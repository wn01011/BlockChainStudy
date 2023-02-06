const Block = require("../block/block");

class Chain {
  // 체인은 배열로 만들것이다.
  #chain;
  // 아무 데이터 정보 등등을 체인에 넣지 못하도록 외부에서의 접근을 막기 위해 private로 설정
  // 난이도를 통해서 문제(퀴즈)를 풀게 되고 문제 해결된 블록을 체인에 추가하게 된다. << 문제 풀이 과정을 마이닝이라고 한다.
  // 왜 문제 풀이를 하는가? 블록의 생성 시간을 조절하기 위해서
  // 결국 난이도는 블록의 생성 시간을 조절하기 위해서 높아졌다가 낮아졌다가 하게 된다.
  // 난이도 조절에 대한 조건들을 설정하자
  #DIFFICULTY_ADJUSTMENT_INTERVAL = 10;
  // 전부 대문자로 변수명을 적는 이유 : 얘는 상수다. 즉 앞으로 절대 변하지 않는 변수, 상수라고 무조건 대문자로 적을 필요는 없다. << 일반적인 개발자들 사이에서의 관례
  // 블록이 10개 생성될 때 마다 난이도를 조절(재정의)한다.
  #BLOCK_GENERATION_INTERVAL = 10;
  // 블록 10개당 생성에 걸리는 시간(블록당 생성시간)
  #TIME_UNIT = 60 * 1000;
  // 시간의 단위 설정
  // 1분

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

  get config() {
    // 난이도 조절 관련 설정들을 한번에 가져가서 사용할 수 있게 묶자.
    return {
      difficultyAdjustmentInterval: this.#DIFFICULTY_ADJUSTMENT_INTERVAL,
      // 난이도 조절 단위 개수
      averageGenerationTime: this.#BLOCK_GENERATION_INTERVAL * this.#TIME_UNIT,
      // 10개 블록 생성 되는 시간
    };
  }

  get adjustmentBlock() {
    const length = this.#chain.length;
    // 현재 체인의 길이
    const interval = length - this.#DIFFICULTY_ADJUSTMENT_INTERVAL;
    // 난이도 조절 단위 개수 전 index
    if (interval < 0) {
      return this.#chain[0];
    }
    return this.#chain[interval];
    // 제네시스 블럭 후 9개의 블럭이 추가됐다.
    // 10이 추가될 때 난이도를 수정하게 된다.
    // 20일때 10 index의 블럭
  }

  addBlock(_data) {
    const newBlock = new Block(
      _data,
      this.lastBlock,
      this.adjustmentBlock,
      this.config
    );
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

// const chain = new Chain();
// for (let i = 0; i < 32; ++i) {
//   // 테스트용 블록 32개 추가
//   chain.addBlock([`test block ${i}`]);
// }

// console.log(chain.chain);

// 세상을 너무나 모른다고 나보고 그대는 얘기하지 조금은 걱정된 눈빛으로 조금은 미안한 웃음으로 그래 아마 난 세상을 모르나봐 혼자 이렇게 먼길을 떠났나봐 하지만 후횐 없지 울며 웃던 모든 꿈
// 그것 만이 내 세상 하지만 후횐 없지 울며 웃던 모든 꿈 그것만이 내 세상 그것만이 네 세상
// 세상을 너무나 모른다고 나 또한 너에게 얘길하지 조금은 걱정된 눈빛으로 조금은 미안한 웃음으로
// 그래 아마 난 세상을 모르나봐 혼자 그렇게 그 길에 남았나봐 하지만 후횐 없지 울며 웃던 모든 꿈 그것만이 내 세상
// 하지만 후횐 없어 가꿔왔던 모든 꿈 그것만이 내 세상 그것만이 내 세상

module.exports = Chain;
