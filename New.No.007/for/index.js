for (let i = 0; i < 10; ++i) {
  // for는 반복문의 명령어 중 하나이다.
  console.log(`i = ${i}`);

  // ``(Template literals)은 텍스트(string)안에 변수를 넣고 싶을 때 사용한다.
  // `i = ${i}` === "i = " + i => 두 가지가 있다.
  // ` 은 백틱 또는 Grave Accent라고 부른다.
}

for (let a = 0, b = 1; a < 10 && b < 5; ++a, ++b) {
  console.log(`a = ${a}, b = ${b}`);
}
