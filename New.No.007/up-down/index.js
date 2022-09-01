const comSel = parseInt(Math.random() * 99 + 1);
let playerSel;
let count = 0;
let max = 100;
let min = 0;
let updown = ``;
const maxCount = parseInt(prompt(`몇 번만에 맞출래? 숫자로만`));

do {
  playerSel = prompt(
    `${updown}\n숫자를 입력해 주세요.\n컴퓨터가 선택한 숫자를 맞추시면 됩니다.\n최소 : ${min} / 최대 : ${max} / 남은 횟수 : ${
      maxCount - count
    }`
  ); //prompt로 받은 것은 String이다.
  count++;
  // 카운트를 플레이어의 입력을 받으면 하나씩 ++;
  playerSel = parseInt(playerSel);
  if (playerSel > 100 || playerSel < 0) {
    console.log(`0 ~ 100 사이의 값만 입력하세욧!`);
    count--;
  } else if (min > playerSel || max < playerSel) {
    //최소와 최대 사이에 값만 확인하기 위해 최소 미만과 최대 초과를 먼저 처리한다.
    console.log("제외된 숫자들입니다.");
    count--;
  } else if (playerSel === comSel) {
    console.log(`${count}번 만에 맞추셨네요 축하합니다.`);
    break;
  } else if (playerSel > comSel) {
    max = playerSel;
    console.log("UP!");
    updown = "UP!";
  } else if (playerSel < comSel) {
    min = playerSel;
    console.log("Down!");
    updown = "Down!";
  } else {
    console.log("숫자만 입력해라!");
    updown = "숫자만 입력해라!";
    count--;
  }
} while (playerSel !== comSel && count < maxCount);
if (count >= maxCount && comSel !== playerSel) {
  // count == 0 이면 거짓이라는 의미도 되기떄문에 !count로도 쓸 수 있다.

  console.log(`제한 횟수를 초과했습니다.`);
}
