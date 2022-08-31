console.log("이것은 개발자 도구 콘솔창에 로그를 남기는 것이다.");
console.log("fabicon 어쩌구 하는 오류는 가끔 뜨는데 무시하자");

console.log('1 === "1" : ' + (1 === "1"));

// 조건문, if && elseif && else
let a;
// a = Number(prompt("넣고 싶은 값을 입력해 보세요."));
// 숫자로의 형변환 => Number(***) || +*** || parseInt(***) || parseFloat(***)
if (Number(a) < 2) {
  console.log(`${a} < 2는 true다.`);
} else if (Number(a) > 2) {
  console.log(`${a} < 2 는 false 다.`);
} else {
  console.log(`${a} 는 2다.`);
}

let test1 = 5;
let test2 = 7;

if (test1 < test2) {
  console.log("꼴은 좀 보자.");
} else {
  console.log("꼴도 보기 싫다.");
}

switch (a) {
  case 0:
    console.log("0이야!");
    break;
  case 1:
    console.log("1이야!");
    break;
  case NaN:
    console.log("NaN이야!");
    break;
  case undefined:
    console.log("undefined야!");
  default:
    console.log("이건 뭐야!");
}
console.log("a : 의 값은 " + a + "이고 타입은 : " + typeof a + "이다.");
