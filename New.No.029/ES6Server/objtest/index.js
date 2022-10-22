// module.exports = {} << ES5
// export {} << ES6

function sum(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}

const objTest = {
  sum,
  multiply,
  testNum: 1,
  testNum2: 2,
};

const { testNum, testNum2 } = objTest;
// 구조분해 할당
// 객체 내의 프로퍼티를 변수로 가져온다.
console.log(testNum, testNum2);

export default objTest;
export function minus(a, b) {
  return a - b;
}

// export || export default
// export {} 안으로 들어간다.
//   구조 분해 할당으로만 가져올 수 있다.
// export default는 외부로 내보낼 때 이거 하나를 내보낸다.
