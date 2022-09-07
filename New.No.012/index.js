const odd = (_num) => {
  if (!_num) _num = prompt("몇까지 찍을까 ?");
  const count = parseInt(_num);
  for (let i = 0; i <= count; ++i) {
    if (i % 2) console.log(i);
    //  i % 2 << 홀수일 때 1 << 홀수를 판단할 수 있다.
  }

  for (let i = 0; i < count / 2; ++i) {
    console.log(i * 2 + 1);
  }

  for (let i = 1; i < count + 1; i += 2) {
    console.log(i);
  }
};

function even(_num) {
  if (!_num) _num = prompt("몇까지 찍을까 ?");
  const count = parseInt(_num);
  for (let i = 0; i <= count; ++i) {
    if (!(i % 2)) console.log(i);
    //  i % 2 << 짝수일 때 0 << 0은 false기 때문에 부정을 해준다.
  }

  for (let i = 0; i < (count + 1) / 2; ++i) {
    console.log(2 * i);
  }

  for (let i = 0; i < count + 1; i += 2) {
    console.log(i);
  }
}

const oddeven = () => {
  const count = prompt(
    "몇까지 찍을까 ?\n그리고 홀이야? 짝이야?\n형식은 n&홀짝"
  );

  const number = count.split("&")[0];
  const isOdd = count.split("&")[1];

  if (isOdd == "홀" || isOdd == "홀수") {
    odd(number);
  } else {
    even(number);
  }
};
