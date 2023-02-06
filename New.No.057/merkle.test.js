//  테스트 함수들을 실행하는데 묶어서 실행할 수 있다.
const { createMerkleTree, libMerkle } = require("./merkleTree.js");
const merkle = require("merkle");
// describe : 테스트들의 묶음(그룹을 지어줄 수 있다고 보면 된다.)

test("IsMyNameKJK?", () => {
  expect("myName Is KJK").toMatch("KJK");
});

describe("이곳은 머클루트가 같은지 테스트하는 테스트 묶음입니다.", () => {
  const myArr = ["1234", "kjkjkjk", "asdf", "asdfawera", "zxcvzxv12"];
  // 각각의 테스트들을 여기에 작성해주면 된다.
  // 테스트 단위
  it("createMerkleTree == libMerkle?", () => {
    expect(createMerkleTree(myArr)).toBe(libMerkle(myArr));
  });
  it("libMerkle === merkle(`sha256`).sync().root()", () => {
    // expect 함수로 비교 함수들을 사용할 수 있게 해준다.
    // expect의 매개변수로 비교할 값을 넣어주고
    // expect().toBe()의 toBe()매개변수로 앞의 값과 비교할 값을 넣어준다.
    // 단순히 데이터비교 A와 B를 넣었다고 한다면 A === B
    expect(libMerkle(myArr)).toBe(merkle(`sha256`).sync(myArr).root());
  });
});

describe("이곳은 머클루트가 같은지 테스트하는 테스트 묶음입니다2.", () => {
  const myArr = ["1234", "kjkjkjk", "asdf", "asdfawera", "zxcvzxv12"];
  // 각각의 테스트들을 여기에 작성해주면 된다.
  // 테스트 단위
  it("createMerkleTree == libMerkle?", () => {
    expect(createMerkleTree(myArr)).toBe(libMerkle(myArr));
  });
  it("libMerkle === merkle(`sha256`).sync().root()", () => {
    // expect 함수로 비교 함수들을 사용할 수 있게 해준다.
    // expect의 매개변수로 비교할 값을 넣어주고
    // expect().toBe()의 toBe()매개변수로 앞의 값과 비교할 값을 넣어준다.
    // 단순히 데이터비교 A와 B를 넣었다고 한다면 A === B
    expect(libMerkle(myArr)).toBe(merkle(`sha256`).sync(myArr).root());
  });
});
