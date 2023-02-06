const Block = require("../block/block");

class Chain {
  // 체인은 배열로 만들것이다.
  #chain;
  // 아무 데이터 정보 등등을 체인에 넣지 못하도록 외부에서의 접근을 막기 위해 private로 설정

  constructor() {
    this.#chain = [];
    const genesis = new Block([`제네시스 블록 ${new Date()}`]);
    console.log(Date.now());
    this.#chain.push(genesis);
  }

  get chain() {
    return [...this.#chain];
    // 외부에서 #chain 접근 시 새로운 배열을 만들어서 준다.(반환한다.)
  }

  get lastBlock() {
    return this.#chain[this.#chain.length - 1];
  }

  addBlock(_data) {
    const newBlock = new Block(_data, this.lastBlock);
    return this.add2Chain(newBlock);
  }

  add2Chain(_newBlock) {
    const isValid = Block.isValidBlock(_newBlock, this.lastBlock);
    if (isValid.isError) {
      console.error(isValid.msg);
      return null;
    } else {
      this.#chain.push(_newBlock);
      return _newBlock;
    }
  }
  // chain = [1, 2, 3] => 4번 블록을 추가한다.
  // 4번 블록은 3번 블록을 알고있어야한다. (previousHash)
  // chain 기준으로 2번 인덱스의 블록 << chain의 길이에서 1을 빼면 마지막 인덱스가 나온다.
  // => 마지막 인덱스에 해당하는 블록을 가져와서 사용한다.
}

const chain = new Chain();

chain.addBlock(["asdf"]);
chain.addBlock(["asdf2"]);
chain.addBlock(["asdf3"]);

const block = new Block(["qwer"], chain.lastBlock);
chain.add2Chain(block);

console.log(chain.chain);

// 세상을 너무나 모른다고 나보고 그대는 얘기하지 조금은 걱정된 눈빛으로 조금은 미안한 웃음으로 그래 아마 난 세상을 모르나봐 혼자 이렇게 먼길을 떠났나봐 하지만 후횐 없지 울며 웃던 모든 꿈
// 그것 만이 내 세상 하지만 후횐 없지 울며 웃던 모든 꿈 그것만이 내 세상 그것만이 네 세상
// 세상을 너무나 모른다고 나 또한 너에게 얘길하지 조금은 걱정된 눈빛으로 조금은 미안한 웃음으로
// 그래 아마 난 세상을 모르나봐 혼자 그렇게 그 길에 남았나봐 하지만 후횐 없지 울며 웃던 모든 꿈 그것만이 내 세상
// 하지만 후횐 없어 가꿔왔던 모든 꿈 그것만이 내 세상 그것만이 내 세상

module.exports = Chain;
