// 설치 명령어 -------------------------------------------
//  npm i merkle
// ------------------------------------------------------

const merkle = require("merkle");
// merkle 라이브러리가 머클 트리를 쉽게 사용할 수 있게 도와준다.
const data = ["15131", "abcde", "131141", "kjkjkjkjk"];
// 머클 트리
// 인자값 : 암호화 방법
// sync(data) 함수로 트리를 만들어준다.
const merkleTree = merkle(`sha256`).sync(data);
// 생성한 머클트리의 루트를 구하는 방법
const root = merkleTree.root();
// 머클 트리에서 sha256 알고리즘을 사용하는데 문자열로 변환과 대문자로 변환을 둘 다 해주고 값을 반환해준다.

console.log(
  merkleTree.root(),
  merkleTree.level(1),
  merkleTree.depth(),
  merkleTree.levels(),
  merkleTree.nodes(),
  merkleTree.getProofPath()
);
