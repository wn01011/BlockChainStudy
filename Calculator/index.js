let leftNum = "";
let rightNum = "";
let result = 0;

let isRight = false;
let isAdd = false;
let isMinus = false;
let isMult = false;
let isDivide = false;
let isRemain = false;

/** 좌항과 우항의 숫자를 문자열로써 쌓는함수 */
function MakeNum(_num) {
  if (!isRight) {
    leftNum += String(_num);
    document.getElementById("myInput").value = leftNum;
  } else {
    rightNum += String(_num);
    document.getElementById("myInput").value = rightNum;
  }
  console.log(`leftNum = ${leftNum}\nrightNum = ${rightNum}`);
}

// Add = 1 Minus = 2 Mult = 3 Divide = 4 Remain = 5
/** 어떤 연산자를 눌렀을 때 해당 연산자에 따른 bool값을 true로 만들고
 *  나머지 연산자의 bool 값을 false로 바꾸는 함수
 */
function Operator(_num) {
  isAdd = false;
  isMinus = false;
  isMult = false;
  isDivide = false;
  isRemain = false;
  isRight = true;
  switch (_num) {
    case 1:
      isAdd = true;
      break;
    case 2:
      isMinus = true;
      break;
    case 3:
      isMult = true;
      break;
    case 4:
      isDivide = true;
      break;
    case 5:
      isRemain = true;
      break;
    default:
      isRight = false;
      break;
  }
}

function Delete() {
  if (!isRight) {
    leftNum = String(leftNum);
    if (leftNum.length == 0) return;
    leftNum = String(leftNum.slice(0, leftNum.length - 1));
    document.getElementById("myInput").value = leftNum;
  } else {
    if (rightNum.length == 0) return;
    rightNum = String(rightNum.slice(0, rightNum.length - 1));
    document.getElementById("myInput").value = rightNum;
  }
  console.log(`leftNum = ${leftNum}\nrightNum = ${rightNum}`);
}
function C() {
  leftNum = "";
  rightNum = "";
  Operator(0);
  console.log(`leftNum = ${leftNum}\nrightNum = ${rightNum}`);
  document.getElementById("myInput").value = "0";
  document.getElementById("myInput").value = "0";
}

function Equal() {
  isRight = false;
  if (isAdd) {
    isAdd = false;
    leftNum = parseInt(leftNum) + parseInt(rightNum);
  } else if (isMinus) {
    isMinus = false;
    leftNum = parseInt(leftNum) - parseInt(rightNum);
  } else if (isMult) {
    isMult = false;
    leftNum = parseInt(leftNum) * parseInt(rightNum);
  } else if (isDivide) {
    isDivide = false;
    leftNum = parseInt(leftNum) / parseInt(rightNum);
  } else if (isRemain) {
    isRemain = false;
    leftNum = parseInt(leftNum) % parseInt(rightNum);
  }
  rightNum = "";
  document.getElementById("myInput").value = leftNum;
  return console.log(leftNum);
}
