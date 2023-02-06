const merkle = require("merkle");
const SHA256 = require("crypto-js").SHA256;
const hexToBinary = require("hex-to-binary");

class BlockHeader {
  version;
  merkleRoot;
  timestamp;
  height;
  difficulty;
  nonce;
  // private 키로 정의(생성)할 경우 키들이 객체에서 보이지 않는다.
  // 후에 통신할 때 다른 처리를 하려 했으나 쉽게 가기 위해서 private를 취소하겠다.

  constructor(_data, _previousBlock) {
    this.version = "1.0.0";
    const merkleRoot = this.createMerkleRoot(_data);
    if (merkleRoot.isError) {
      this.merkleRoot = "";
      console.error(merkleRoot.msg);
    } else {
      this.merkleRoot = merkleRoot.value;
    }
    this.setTimeStamp();
    // Date << 클래스, now << static으로 정의된 메서드
    this.height = _previousBlock ? _previousBlock.height + 1 : 0;
    this.difficulty = 0;
    this.nonce = 0;
  }

  setTimeStamp() {
    this.timestamp = Date.now();
  }

  createMerkleRoot(_data) {
    if (!Array.isArray(_data) || !_data.length) {
      // Array.isArray는 매개변수가 배열인지 확인한다.
      return { isError: true, msg: "data가 배열이 아니거나 빈 배열이다." };
    }
    return { isError: false, value: merkle("sha256").sync(_data).root() };
  }

  getDifficulty({
    previousDifficulty, // 이전 블록의 난이도
    adjustmentDifficulty, // 10개 전 블록의 난이도
    adjustmentTimestamp, // 10개 전 블록의 생성 시간
    difficultyAdjustmentInterval, // 난이도 조절 단위 개수
    averageGenerationTime, // 블록 세대당 생성 시간, 블록 10개당 생성 시간
  }) {
    if (this.height < difficultyAdjustmentInterval) {
      this.difficulty = 0;
      // 10개 이전에는 제네시스 블록 생성 시 설정한 난이도 그대로 가져간다.
    } else if (this.height < difficultyAdjustmentInterval * 2) {
      this.difficulty = 1;
    }
    // 20개 이전에는 제네시스 블록 생성 시 설정한 나이도보다 하나 더 높은 난이도가 설정된다.
    else if (this.height % difficultyAdjustmentInterval !== 0) {
      this.difficulty = previousDifficulty;
      // 난이도를 조절하는 블록 타이밍이 아닐때는 이전 블록의 난이도를 그대로 가져간다.
    } else {
      const timeToken = this.timestamp - adjustmentTimestamp;
      // 10개 전 블록과 현재 블록의 생성 시간 차이
      if (timeToken < averageGenerationTime * 0.9) {
        // 이전 10개 생성 시간이 5분보다 적게 걸렸을 때
        this.difficulty = adjustmentDifficulty + 1;
        // 난이도를 올려서 시간이 더 걸릴 수 있게 조절한다.
      } else if (timeToken > averageGenerationTime * 1.1) {
        this.difficulty = adjustmentDifficulty - 1;
      } else {
        this.difficulty = adjustmentDifficulty;
      }
    }
  }
}

class Block extends BlockHeader {
  previousHash;
  hash;
  data;
  constructor(_data, _previousBlock, _adjustmentBlock, _config) {
    super(_data, _previousBlock);
    this.previousHash = _previousBlock ? _previousBlock.hash : "0".repeat(64);
    // this.hash =
    // _data && _previousBlock ? Block.createHash(this) : "0".repeat(64);
    if (this.merkleRoot) {
      if (_adjustmentBlock && _config) {
        // 제네시스 블록 생성 시 전달하지 않음으로 예외 처리
        this.getDifficulty({
          previousDifficulty: _previousBlock.difficulty,
          adjustmentDifficulty: _adjustmentBlock.difficulty,
          adjustmentTimestamp: _adjustmentBlock.timestamp,
          difficultyAdjustmentInterval: _config.difficultyAdjustmentInterval,
          averageGenerationTime: _config.averageGenerationTime,
        });
      }
      // merkleRoot가 있을 때 << 정상적인 배열로 된 데이터가 입력 되었다.
      this.hash = Block.createHash(this);

      if (_adjustmentBlock && _config) {
        this.updateBlock({
          previousDifficulty: _previousBlock.difficulty,
          adjustmentDifficulty: _adjustmentBlock.difficulty,
          adjustmentTimestamp: _adjustmentBlock.timestamp,
          difficultyAdjustmentInterval: _config.difficultyAdjustmentInterval,
          averageGenerationTime: _config.averageGenerationTime,
        });
      }
    } else {
      // merkleRoot가 없음 << 배열이 아닌 데이터가 입력(전달)되었다.
      this.hash = "";
      // 이후 오류 발생 여부 확인용
    }
    this.data = _data;
    console.log(this);
  }

  static createHash(_block) {
    let tempStr = "";
    // 블록의 정보를 임시로 합칠 string

    // _block.setTimeStamp();
    // 이 과정이 끝나면 체인에 연결하게 된다.
    // tempStr += _block.version;
    // tempStr += _block.merkleRoot;
    // tempStr += _block.timestamp;
    // tempStr += _block.height;
    // tempStr += _block.difficulty;
    // tempStr += _block.nonce;
    // tempStr += _block.previousHash;
    // hash는 현재 만들고있는 키라서 추가하지않는다.
    // data는 merkleRoot로 합쳐져 있기 때문에 merkleRoot로 대체한다.

    const keys = Object.keys(_block);
    // Object.keys => 객체의 키들을 배열로 가져온다.(반환한다.)
    for (let i = 0; i < keys.length; ++i) {
      if (keys[i] === "hash" || keys[i] === "data") {
        continue;
      }
      tempStr += _block[keys[i]];
    }

    return SHA256(tempStr).toString().toUpperCase();
  }

  updateBlock(difficultyOptions) {
    // 난이도와 논스를 사용해서 문제를 푼다.
    // 여기서의 문제는 difficulty 알고리즘 이라고 한다.
    // difficulty 알고리즘은
    //   - 2진수로 변화하여 앞의 0의 개수와 difficulty와 비교하여 difficulty보다 0의 개수가 많으면 문제를 해결한 것이다.
    //   - Block의 암호화된 hash는 64자의 16진수로 이루어져있다.
    //   - hash를 2진수로 바꾸고 2진수의 수의 제일 앞에서부터 연속되는 0의 개수가 difficulty보다 크면 해결한 것이고 아니면 해결하지 못한 것이다.
    //   - hash == AAA => 1010 1010 1010 1010 => difficulty가 0이면 0이 0개 있으므로 합격 하지만 difficulty가 1이면 통과하지 못한다.

    let hashBinary = hexToBinary(this.hash);
    // 현재 hash를 2진수로 변환한다.
    while (!hashBinary.startsWith("0".repeat(this.difficulty))) {
      // startsWith는 string의 메서드로 시작하는 문장(string)을 확인해준다.
      this.nonce += 1;
      // hash가 변경될 수 있도록 nonce를 증가시킨다.
      this.setTimeStamp();
      // 블록 생성 시간은 chain에 추가되는 시간이기 때문에 문제 풀이 시점을 생성 시간으로 재설정한다.
      this.getDifficulty(difficultyOptions);
      // 시간이 다시 설정됐기 때문에 기준 시간과 비교하여 난이도를 재설정한다.
      //   - difficultyOptions는 매개변수로 받아서 실행함
      this.hash = Block.createHash(this);
      // 변경된 값에 따라서 hash를 다시 설정하고
      hashBinary = hexToBinary(this.hash);
      // 2진수로 바꾸어 while의 조건문(문제 조건)에 해당하지 않는지 확인한다.
      //  - while의 조건문이 부정이기 때문에 해당하지 않으면 문제 해결이다.
    }
    // console.log(hashBinary);
    // console.log(hashBinary.slice(0, this.difficulty));
  }

  static isValidBlock(_newBlock, _previousBlock) {
    // 생성된 블록이 정상인지 확인해보자.
    if (_newBlock.height !== _previousBlock.height + 1) {
      return { isError: true, msg: "높이가 다르다." };
    }
    if (_newBlock.previousHash !== _previousBlock.hash) {
      return {
        isError: true,
        msg: "이전 블록의 해시와 새로운 블록의 이전 해시가 다르다.",
      };
    }
    if (_newBlock.hash !== Block.createHash(_newBlock)) {
      return { isError: true, msg: "hash 생성 중 오류 발생" };
    }
    return { isError: false, value: _newBlock };
  }
}

const temp = new Block(["a"]);
Block.createHash(temp);

module.exports = Block;
