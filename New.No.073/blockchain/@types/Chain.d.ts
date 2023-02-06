declare interface IConfig {
  difficultyAdjustmentInterval: number;
  averageGenerationTime: number;
}
declare interface IChain {
  // 함수도 Interface에 포함시킨다.
  getChain: Array<IBlock>;
  lastBlock: IBlock;
  config: IConfig;
  adjustmentBlock: IBlock;
  addBlock(_data: Array<string>): IBlock | null;
  add2Chain(_newBlock: IBlock): IBlock | null;
}
