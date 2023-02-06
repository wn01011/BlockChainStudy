declare interface ITxOut {
  // transaction의 결과(output)
  address: string;
  amount: number;
}

declare interface ITxIn {
  // transaction에서 사용되는 잔액(input)
  txOutId: string; // transaction의 hash
  txOutIndex: number; // transaction의 몇 번째 output
  signature?: string;
  // signature: string | undefined;
}

declare interface ITransaction {
  txIns: Array<ITxIn>;
  txOuts: Array<ITxOut>;
  hash: string; // TxHash || TxID
}

declare interface IUnspentTxOut {
  address: string;
  amount: number;
  txOutId: string;
  txOutIndex: number;
}
