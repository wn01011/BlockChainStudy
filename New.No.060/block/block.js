const merkle = require("merkle");
const SHA256 = require("crypto-js").SHA256;
class BlockHeader {
  #version;
  #merkleRoot;
  #timestamp;
  #height;
  #difficulty;
  #nonce;

  constructor(_data, _previousBlock) {
    this.#version = "1.0.0";
    this.#merkleRoot = _data
      ? merkle("sha256").sync(_data).root()
      : "0".repeat(64);
    this.setTimeStamp();
    // Date << 클래스, now << static으로 정의된 메서드
    this.#height = _previousBlock ? _previousBlock.height + 1 : 0;
    this.#difficulty = 0;
    this.#nonce = 0;
  }

  get version() {
    return this.#version;
  }
  get merkleRoot() {
    return this.#merkleRoot;
  }
  get timestamp() {
    return this.#timestamp;
  }
  get height() {
    return this.#height;
  }
  get difficulty() {
    return this.#difficulty;
  }
  get nonce() {
    return this.#nonce;
  }
  setTimeStamp() {
    this.#timestamp = Date.now();
  }
}

class Block extends BlockHeader {
  #previousHash;
  #hash;
  #data;
  constructor(_data, _previousBlock) {
    super(_data, _previousBlock);
    this.#previousHash = _previousBlock ? _previousBlock.hash : "0".repeat(64);
    this.#hash =
      _data && _previousBlock ? Block.createHash(this) : "0".repeat(64);
    this.#data = _data;
  }

  get previousHash() {
    return this.#previousHash;
  }
  get hash() {
    return this.#hash;
  }
  get data() {
    return this.#data;
  }

  static createHash(_block) {
    let tempStr = "";
    // 블록의 정보를 임시로 합칠 string

    _block.setTimeStamp();
    // 이 과정이 끝나면 체인에 연결하게 된다.
    tempStr += _block.version;
    tempStr += _block.merkleRoot;
    tempStr += _block.timestamp;
    tempStr += _block.height;
    tempStr += _block.difficulty;
    tempStr += _block.nonce;
    tempStr += _block.previousHash;
    // hash는 현재 만들고있는 키라서 추가하지않는다.
    // data는 merkleRoot로 합쳐져 있기 때문에 merkleRoot로 대체한다.
    return SHA256(tempStr).toString().toUpperCase();
  }
}

const temp = new Block(["a"]);
console.log(temp.hash, temp.timestamp);
Block.createHash(temp);
console.log(temp.hash, temp.timestamp);

module.exports = Block;
