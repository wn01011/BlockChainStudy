let firstNum = 0;
let secondNum = 0;

function Calculator(isFirst, isAdd) {
  if (isFirst && isAdd) {
    Expression(`firstNum : ${firstNum}`, ++firstNum);
    document.getElementById(
      "first"
    ).childNodes[0].textContent = `firstNum : ${firstNum}`;
  } else if (isFirst && !isAdd) {
    Expression(`firstNum : ${firstNum}`, --firstNum);
    document.getElementById(
      "first"
    ).childNodes[0].textContent = `firstNum : ${firstNum}`;
  } else if (!isFirst && isAdd) {
    Expression(`secondNum : ${secondNum}`, ++secondNum);
    document.getElementById(
      "second"
    ).childNodes[0].textContent = `secondNum : ${secondNum}`;
  } else {
    Expression(`secondNum : ${secondNum}`, --secondNum);
    document.getElementById(
      "second"
    ).childNodes[0].textContent = `secondNum : ${secondNum}`;
  }
}

function Expression(log, add) {
  add;
  document.getElementById("sum").childNodes[0].textContent = `Sum : ${
    firstNum + secondNum
  }`;
  document.getElementById("mult").childNodes[0].textContent = `Multifly : ${
    firstNum * secondNum
  }`;
}
