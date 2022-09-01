let leftNum = "";
let rightNum = "";
let result = 0;

let isRight = false;
let isAdd = false;
let isMinus = false;
let isMult = false;
let isDivide = false;
let isRemain = false;

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
    console.log(`leftNum = ${leftNum}\nrightNum = ${rightNum}`);
    document.getElementById("myInput").value = leftNum;
  } else {
    if (rightNum.length == 0) return;
    rightNum = String(rightNum.slice(0, rightNum.length - 1));
    console.log(`leftNum = ${leftNum}\nrightNum = ${rightNum}`);
    document.getElementById("myInput").value = rightNum;
  }
}
function C() {
  leftNum = "";
  rightNum = "";
  Operator(0);
  console.log(`leftNum = ${leftNum}\nrightNum = ${rightNum}`);
  document.getElementById("myInput").value = "";
  document.getElementById("myInput").value = "";
}
function Equal() {
  isRight = false;
  if (isAdd) {
    isAdd = false;
    leftNum = parseInt(leftNum) + parseInt(rightNum);
    rightNum = "";
    document.getElementById("myInput").value = leftNum;
    return console.log(leftNum);
  } else if (isMinus) {
    isMinus = false;
    leftNum = parseInt(leftNum) - parseInt(rightNum);
    rightNum = "";
    document.getElementById("myInput").value = leftNum;
    return console.log(leftNum);
  } else if (isMult) {
    isMult = false;
    leftNum = parseInt(leftNum) * parseInt(rightNum);
    rightNum = "";
    document.getElementById("myInput").value = leftNum;
    return console.log(leftNum);
  } else if (isDivide) {
    isDivide = false;
    leftNum = parseInt(leftNum) / parseInt(rightNum);
    rightNum = "";
    document.getElementById("myInput").value = leftNum;
    return console.log(leftNum);
  } else if (isRemain) {
    isRemain = false;
    leftNum = parseInt(leftNum) % parseInt(rightNum);
    rightNum = "";
    document.getElementById("myInput").value = leftNum;
    return console.log(leftNum);
  } else {
    rightNum = "";
    document.getElementById("myInput").value = leftNum;
    return console.log(leftNum);
  }
}
