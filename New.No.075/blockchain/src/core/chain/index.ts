// const Block = require("../block/block");
import Block from "@core/block/block";
import Transaction from "@core/transaction/Transaction";
import TxIn from "@core/transaction/TxIn";
import TxOut from "@core/transaction/TxOut";
import UnspentTxOut from "@core/transaction/UnspentTxOut";

class Chain implements IChain {
  private chain: Array<IBlock>;
  private DIFFICULTY_ADJUSTMENT_INTERVAL: number = 10;
  private BLOCK_GENERATION_INTERVAL: number = 1;
  private TIME_UNIT: number = 60 * 1000;
  // 보기 편하려고 private로 변경, 보통 다른 언어에서 private으로 변경
  // private는 해당 클래스 내에서만 사용할 수 있기 때문에 interface를 따로 사용하지 못한다.
  // - private는 상속도 안된다.

  private utxos: Array<IUnspentTxOut>;
  private txPool: Array<ITransaction>;

  constructor() {
    this.chain = [];
    const transaction = new Transaction(
      [new TxIn(`제네시스 블록 ${new Date()}`, 0)],
      []
    );
    const genesis: IBlock = new Block([transaction]);
    this.chain.push(genesis);

    this.utxos = [];
    this.txPool = [];
  }

  get getChain(): Array<IBlock> {
    return [...this.chain];
  }

  get lastBlock(): IBlock {
    return this.chain[this.chain.length - 1];
  }

  get config(): IConfig {
    return {
      difficultyAdjustmentInterval: this.DIFFICULTY_ADJUSTMENT_INTERVAL,
      averageGenerationTime: this.BLOCK_GENERATION_INTERVAL * this.TIME_UNIT,
    };
  }

  get adjustmentBlock() {
    const length: number = this.chain.length;
    const interval: number = length - this.DIFFICULTY_ADJUSTMENT_INTERVAL;
    if (interval < 0) {
      return this.chain[0];
    }
    return this.chain[interval];
  }

  get getUtxo(): Array<IUnspentTxOut> {
    return [...this.utxos];
  }

  get getTxPool(): Array<ITransaction> {
    return [...this.txPool];
  }

  addBlock(_data: Array<ITransaction>): IBlock | null {
    const newBlock: IBlock = new Block(
      _data,
      this.lastBlock,
      this.adjustmentBlock,
      this.config
    );

    return this.add2Chain(newBlock);
  }
  add2Chain(_newBlock: IBlock): IBlock | null {
    const isValid: TResult<IBlock, string> = Block.isValidBlock(
      _newBlock,
      this.lastBlock
    );
    if (isValid.isError) {
      return null;
    } else {
      this.chain.push(_newBlock);

      _newBlock.data.forEach((_tx: Transaction) => this.updateUTXO(_tx));
      this.updateTxPool(_newBlock);
      // 다른 peer가 추가 됐다고 보냈을 때
      return _newBlock;
    }
  }

  isValidChain(_chain: Array<IBlock>): TResult<undefined, string> {
    for (let i = 1; i < _chain.length; ++i) {
      const nowBlock = _chain[i];
      const previousBlock = _chain[i - 1];
      const isValid = Block.isValidBlock(nowBlock, previousBlock);
      if (isValid.isError == true) return isValid;
      // 문제가 있는 체인이면 에러를 반환한다.
    }
    return { isError: false, value: undefined };
    // 문제가 없는 체인임이 확인됐다.
  }

  replaceChain(_chain: Array<IBlock>): TResult<undefined, string> {
    const newLastBlock = _chain[_chain.length - 1];
    const lastBlock = this.lastBlock;
    if (newLastBlock.height === 0 && lastBlock.height !== 0) {
      return { isError: true, msg: "받은 블록이 제네시스 블록이다." };
    }
    if (newLastBlock.height < lastBlock.height) {
      return { isError: true, msg: "내 체인이 더 길다." };
    }
    if (newLastBlock.hash === lastBlock.hash) {
      return { isError: true, msg: "동기화 완료" };
    }
    this.chain = _chain;
    // 새로운 체인의 모든 블록을 가져다가
    this.chain.forEach((_block: IBlock) => {
      // 트랜잭션 풀을 업데이트하고(삭제할거 삭제, 추가할거 추가)
      this.updateTxPool(_block);
      _block.data.forEach((_tx: Transaction) => {
        // 각 블록의 data(트랜젝션)을 하나하나 가져와서 UTXO를 업데이트한다.
        this.updateUTXO(_tx);
      });
    });

    return { isError: false, value: undefined };
  }

  mineBlock(_address: string) {
    const txIn: ITxIn = new TxIn("", this.lastBlock.height + 1);
    // 코인베이스 트랜잭션의 특징으로 txOutIndex를 블록의 높이로 정의한다.
    const txOut: ITxOut = new TxOut(_address, 50);
    const coinbaseTransaction: Transaction = new Transaction([txIn], [txOut]);
    // const utxo = coinbaseTransaction.createUTXO();
    // this.utxos.push(...utxo);
    return this.addBlock([...this.getTxPool, coinbaseTransaction]);
  }

  updateUTXO(_tx: Transaction): void {
    const utxos = this.getUtxo;
    const newUTXO: Array<IUnspentTxOut> = [];
    for (let i = 0; i < _tx.txOuts.length; ++i) {
      newUTXO.push(
        new UnspentTxOut(
          _tx.txOuts[i].address,
          _tx.txOuts[i].amount,
          _tx.hash,
          i
        )
      );
    }

    let temp = utxos.filter((item) => {
      const txIn = _tx.txIns.find((item1) => {
        return (
          item.txOutId === item1.txOutId && item.txOutIndex === item1.txOutIndex
          // 트랜잭션의 txIns에 들어갔다. => input으로 넣어서 사용했다.
          // 그럼 기존의 utxos 에서 사용한 utxo들을 빼야한다.
          // 그래서 txIns와 utxos를 비교, 검색해서 나오면 filter에서 걸러진다.
        );
      });
      return !txIn;
    });

    const result = [...temp, ...newUTXO];
    this.utxos = result.reduce((prev, curr) => {
      const find = prev.find(
        ({ txOutId, txOutIndex }) =>
          txOutId === curr.txOutId && txOutIndex === curr.txOutIndex
      );
      if (!find) prev.push(curr);
      return prev;
    }, []);
  }

  addTxPool(_tx: Transaction): void {
    this.txPool.push(_tx);
  }

  updateTxPool(_newBlock: IBlock): void {
    // 블록생성 후 해당 블록에 사용된 Transaction을 삭제한다.
    let txPool: Array<ITransaction> = this.getTxPool;
    const tempTx: Array<ITransaction> = _newBlock.data;
    for (let i = 0; i < tempTx.length; ++i) {
      const tempTxPool: Array<ITransaction> = [];
      for (let j = 0; j < txPool.length; ++j) {
        if (txPool[j].hash !== tempTx[i].hash) {
          tempTxPool.push(txPool[j]);
          // 기존 트랜잭션 풀과 사용된 트랜잭션들 (블록내의 트랜잭션)을 비교해서 사용되지 않은 트랜잭션을 새로운 배열에 가져온다.
        }
      }
      txPool = tempTxPool;
      // txPool = txPool.filter(_tx => _tx.hash !==tempTx[i].hash);
    }
    this.txPool = txPool;
  }
}

export default Chain;
