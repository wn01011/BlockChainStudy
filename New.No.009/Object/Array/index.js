// 객체가 뭐냐? {}로 묶인 키와 값으로 이루어진 요소들의 집합
const obj = {
  // obj = 객체
  a: 1,
  b: function () {
    // b와 c는 함수 => 메서드(method)
    console.log("b");
  },
  c: () => {
    return "c";
  },
};
const arr = [1, 2, 3];
const tempArr = [
  {
    name: "김정규",
    age: 29,
    area: "창원",
  },
];
// 배열도 객체다.
// arr.push();
// arr객체의 push 메서드 (객체 안의 함수를 메서드라고 한다.)
let tempReturn = arr.indexOf(3);
// 배열에 있는 아이템을 찾아서 그 위치를 알려준다. 없으면 -1을 반환한다.
//tempReturn = arr.find((x) => x % 2 == 1);
let tempArrReturn = tempArr.find((x) => x.age == 29);
console.log(tempArrReturn);
tempReturn = arr.find(function (x) {
  return x == 2;
});
// 매개변수는 배열의 각 아이템을 적용한다.
// find 함수는 배열의 각 아이템을 순서대로 매개변수함수에 전달하여 리턴값을 확인한다.
// 매개변수함수에게서 받은 리턴 값이 true면 해당 아이템을 리턴하고 find함수를 종료한다.
// find는 검색할 때 사용할 코드를 넣어줌. 화살표 함수를 쓰자.
// 배열 안의 아이템 갯수

const testArr = [1, 2, 4];
const tempFind = (_item, _value) => {
  return _item === _value;
  // x가 3이랑 같으면 true를 리턴하고 아니면 false를 리턴한다.
};
const arrFind = function (_value) {
  for (let i = 0; i < testArr.length; ++i) {
    if (tempFind(testArr[i], _value)) return testArr[i];
  }
};
console.log(arrFind(4));

tempReturn = tempArr.filter((item) => {
  return item.name[0] === "김";
});
console.log(tempReturn);
// filter는 매개변수가 true 인 아이템들을 배열로 반환
/* 결과
0:{name: '김정규', age: 29, area: '창원'}
length:1
*/

tempReturn = tempArr.map((item) => {
  return item.name + " 오늘 출석함";
  return item.name[0] === "김";
});
console.log(tempReturn);
/* 결과
['김정규 오늘 출석함']
*/

arr.forEach((item) => console.log(item));
const myArr = [
  {
    name: "정재훈",
    age: 30,
    area: "대치동",
  },
  {
    name: "염예나",
    age: 32,
    area: "하남",
  },
  {
    name: "김성진",
    age: 27,
    area: "성남",
  },
];
const nameArr = ["정재훈", "염예나", "김성진"];
console.log(myArr.find((x) => x.area === "하남"));
console.log(myArr.findIndex((x) => x.area === "하남"));
console.log(myArr.filter((x) => x.area === "하남"));
console.log(
  myArr.map((x) => {
    if (x.area === "하남") console.log("하남에 살아");
  })
);

// console.log(nameArr.reverse());
// 순서 거꾸로
console.log(nameArr.join(" / "));
// 배열을 문자열로 바꿔줍니다. 매개변수로 아이템 사이에 넣을 문자를 입력합니다.
console.log(nameArr.toString()); // 문자열로 바꿈 (거의 모든 객체에 포함되어 있음)
console.log(nameArr.slice(1, -1));
// 요소의 사이마다 새로 index를 붙인다고 생각하면 편함
// ex) 0 "정재훈" 1 "염예나" 2 "김성진" 3
// -는 뒤에서 부터 읽는다.
// console.log(nameArr.splice(0, 2));
// 0부터 2까지 자른다. 단, 해당 배열을 수저해버린다.

console.log(
  nameArr.sort((curr, next) => {
    if (curr > next) return -1;
    else if (curr < next) return 1;
    else return 0;
  })
);
// sort 메서드는 정렬을 해주는 메서드입니다.
// 1, 0, -1 로 정렬 방식을 선택합니다.
// 현재가 큰 것을 1로 주고 다음 것이 큰 것을 -1로 주면 오름차순으로 정렬된다.

console.log(
  [1, 6, 2, 3, 2, 5, 4].sort((curr, next) => {
    return curr - next;
    // 오름차순
    return next - curr;
    // 내림차순
  })
);
