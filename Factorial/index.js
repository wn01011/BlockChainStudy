let myInput = prompt("팩토리얼!!! 시작 숫자를 눌러봐");
myInput = parseInt(myInput);
let str = "";
let fac = Factorial(myInput);
console.log(fac);

function Factorial(_num) {
  if (_num === 1) return _num;
  console.log(String((str += ` * ${_num}`)));
  return (_num *= Factorial(_num - 1));
}
