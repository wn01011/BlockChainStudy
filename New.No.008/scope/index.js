let a = 0;
console.log(a);
{
  a = 2;
  let b = 1;
  console.log(a + b);
  console.log(a);
}
console.log(a);

function addA(_a) {
  _a++;
  console.log(_a);
}

let obj = {
  a: 1,
  func: (_fn, _sn) => {
    return _fn + _sn;
  },
  func1: function () {
    console.log("Hi");
  },
  c: 3,
  d: 4,
};
obj.func1();
console.log(obj.func(1, 2));
// 객체 안에 들어간 함수는 메서드라고 부른다.
// console 객체 안의 log 메서드
// Math객체 안의 random 메서드
// obj 안의 func, func1 메서드
function jaegui(_num) {
  if (_num == 1) return;
  return _num * jaegui(_num - 1);
}
