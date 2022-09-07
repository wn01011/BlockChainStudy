// for 문을 써서 0 부터 입력값까지 홀수 콘솔 찍기
// for를 써서 0부터 입력값까지 짝수 콘솔 찍기
// for를 써서 1부터 입력값까지 3이 아니면 숫자, 3이면 '짝' 콘솔 찍기 (369 게임, 33일 경우 (369의 수만큼) 짝짝 아니면 숫자)

// 입력창에 홀수인지 짝수인지 입력할 수 있게

let input = prompt(
  "숫자 뒤에 바로 홀수나 짝수 입력\n만약 369게임이면 숫자뒤에 삼육구 입력"
);
let num = parseInt(input);
// 36짝수
let str = input.replace(`${num}`, "");

HolJJack(num, str);
TSNGame(num);

function HolJJack(_num, _str) {
  for (let i = 0; i <= _num; ++i) {
    if (i % 2 == 0 && _str == "짝수") {
      console.log(i);
    } else if (i % 2 == 1 && _str == "홀수") {
      console.log(i);
    }
  }
}

function TSNGame(_num) {
  if (str != "삼육구") {
    console.log("삼육구는 아니네");
    return;
  }
  for (let i = 0; i < _num; ++i) {
    let curNumStr = String(i);
    let tempStr = "";
    for (let j = 0; j < curNumStr.length; ++j) {
      if (curNumStr[j] == "3" || curNumStr[j] == "6" || curNumStr[j] == "9")
        tempStr += "짝";
    }
    if (tempStr != "") console.log(tempStr);
    else console.log(i);
  }
}
let myLet;
myLet;
myLet;
const myConst = 1;
myConst = 2;
