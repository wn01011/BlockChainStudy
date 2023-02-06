const merkle = require("merkle");
const SHA256 = require("crypto-js/sha256");

// block Header 클래스
class Header {
  constructor(_height, _previousHash) {
    // 블록의 버전
    this.version = Header.getVersion();
    this.height = _height;
    this.timeStamp = Header.getTimeStamp();
    this.previousHash = _previousHash || "0".repeat(64);
  }

  // static으로 만들어서 전역으로 사용할 수 있는 함수
  // class를 동적할당하는데 생성된 객체의 함수인데 static은 해당 함수를 객체 생성시마다 새로 만들지 않으므로
  // static으로 만들면 데이터를 절약할 수 있다.
  // 함수 내용에 this가 들어가면 안된다.
  static getVersion() {
    return "1.0.0";
  }

  static getTimeStamp() {
    return Date.now();
  }
}

// 그냥 블록 자체가 될 클래스
class Block {
  constructor(_header, _data) {
    // 받아온 헤더의 버전을 블록에게 주고
    this.version = _header.version;
    // 블록의 높이도 헤더에서 가져옴
    this.height = _header.height;
    // 블록 생성 시간도 헤더에서 가져옴
    this.timeStamp = _header.timeStamp;
    // 이전 블록의 해쉬도 헤더에서 가져옴
    this.previousHash = _header.previousHash;
    // 블록의 머클루트
    this.merkleRoot = Block.getMerkleRoot(_data);
    // 블록의 해쉬
    this.hash = Block.createblockHash(_header, Block.getMerkleRoot(_data));
    // 블록의 내용
    this.data = _data;
  }

  /**  머클 라이브러리로 트리생성후 머클루트 반환함 */
  static getMerkleRoot(_data) {
    const merkleRoot = merkle("sha256").sync(_data).root();
    return merkleRoot;
  }
  /** 블록의 해시 값 반환해줄 함수 */
  static createblockHash(_header, _merkleRoot) {
    // _header의 value들을 뽑아서 담고
    const values = Object.values(_header);
    // join은 배열을 문자열로 합쳐준다.
    const data = values.join("") + _merkleRoot;
    // 데이터를 다 더하고 값을 해싱해서 반환 해줌
    return SHA256(data).toString().toUpperCase();
  }
}

// 변수에 데이터 내용을 담자.
const data = [
  "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks",
];

// block Header 생성
// 첫 블록이라 이전 해시값은 주지 않는다.
const header = new Header(0);
const block = new Block(header, data);

console.log(block);

// 두번째 블록
const secondHeader = new Header(1, block.hash);
const secondBlock = new Block(secondHeader, ["난 두번째 블록이닷"]);

console.log(secondBlock);
