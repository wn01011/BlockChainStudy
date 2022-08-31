let i = 0;
// 반복할 때 i, j , k 이런식으로 변수를 선언함.
// i는 index의 약자.
while (i < 10) {
  // while은 반복문의 명령어 중 하나다.
  console.log("i = " + ++i);
}

let j = 0;
while (j < 10) {
  console.log("j = " + j++);
}

let k = 0;
do {
  console.log("k = " + k++);
} while (k < 10);
