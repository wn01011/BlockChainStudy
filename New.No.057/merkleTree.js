// merkle, crypto-js/sha256 불러오기
const merkle = require("merkle");
const SHA256 = require("crypto-js/sha256");

/** 머클 트리를 만들고 Root를 반환해주는 함수 */
const createMerkleTree = (_data = []) => {
  if (!Array.isArray(_data)) return "너 배열 아님";

  // 배열의 값을 전체 암호화해서 merkleArr 변수에 암호화해준다.
  let merkleArr = _data.map((item) => SHA256(item).toString().toUpperCase());

  // 조건 머클루트 한개의 값이 나올 때 까지 합치는 작업을 반복함
  while (merkleArr.length > 1) {
    const tempArr = [];
    for (let i = 0; i < merkleArr.length; i += 2) {
      if (i + 1 === merkleArr.length) {
        tempArr.push(merkleArr[i]);
      } else {
        tempArr.push(
          SHA256(merkleArr[i] + merkleArr[i + 1])
            .toString()
            .toUpperCase()
        );
      }
    }
    merkleArr = tempArr;
  }
  // 하나로 합쳐질때까지 while문을 돌렸으니merkleArr의 0번째 index가 머클 루트가 된다.
  return merkleArr[0];
};

const myArr = ["1234", "kjkjkjk", "asdf", "asdfawera", "zxcvzxv12"];

/** 머클루트를 받는 함수 */
const libMerkle = (_data) => {
  // 암호화 방식은 sha256이고 매개변수로 전달받은 배열을 트리구조로 만들어 주고 root값을 가져오자.
  const merkleRoot = merkle("sha256").sync(_data).root();
  return merkleRoot;
};

console.log("createMerkle", createMerkleTree(myArr));
console.log("createMerkle", libMerkle(myArr));

module.exports = { createMerkleTree, libMerkle };
