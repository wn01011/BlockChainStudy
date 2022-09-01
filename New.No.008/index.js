// 함수를 기능을 실행하는 코드에 이름을 지은 것이다.
// 변수가 데이터에 이름을 짓는다.
function test() {
  // function func_name ([params]) { statements };

  console.log("와다다다다다다다다다다");
}
function test1() {
  console.log("함수를 초기화 합니다.");
  console.log("해당 형식으로 함수를 초기화 하는 방식 : 함수 선언문");
  //   function 이름(){} << 함수 선언문
}
let test2 = function () {
  console.log("함수를 초기화 합니다.");
  console.log("해당 형식으로 함수를 초기화 하는 방식 : 함수 표현식");
  //   const/let 이름 = function(){} << 함수 표현식이다.
};
const test3 = () => {
  console.log("함수를 초기화 합니다.");
  console.log("해당 형식으로 함수를 초기화 하는 방식 : 화살표 함수");
  // const/et 이름 = () => {} << 화살표 함수다.
};

// 매개변수란, 함수에게 데이터를 전달한다.
// 함수가 사용해야할 데이터를 호출할 때 전해준다.

function addFunc(_firstNum, _secondNum) {
  // firstNum, secondNum이 매개변수이다.
  return _firstNum + _secondNum;
}

let a = addFunc(2, 3);

console.log(a);
