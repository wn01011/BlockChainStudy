confirm(
  `입력 예외처리 안했어요.\n연도, 월, 일 순서대로 입력하면 됩니다.\n예시) 2022입력 09입력 02입력\ng : gray, t : today, r : red`
);
let _Year = prompt();
let _Month = prompt() - 1;
let _Date = prompt();
// 필요한 변수들 미리 선언
let date = new Date(_Year, _Month, _Date);
let curMonth = date.getMonth();
let curYear = date.getFullYear();
let curDate = date.getDate();
let curDay = date.getDay();
let startDay = new Date(curYear, curMonth, 0);
let dayStart = new Date(curYear, curMonth, 1).getDay();
let lastMonthDate = startDay.getDate();
let lastMonthDay = startDay.getDay();
let endDay = new Date(curYear, curMonth + 1, 0);
let nextDate = endDay.getDate();
let nextDay = endDay.getDay();

MakeCalendar();
function MakeCalendar() {
  console.log(`${curYear}. ${curMonth + 1}`);
  console.log(`일     월    화    수    목    금    토`);
  // 첫 줄에 전 달꺼 계산해야돼서 따로 예외처리함.
  // 나머지는 MakeStr()함수에서 처리했음
  let firstStr = ``;
  // 마지막 날짜에서 해당 날짜의 요일만큼 빼면 첫줄의 gray시작 날짜 계산할 수 있음.
  for (let i = lastMonthDate - lastMonthDay; i <= lastMonthDate; ++i) {
    firstStr += `${i}g   `;
  }
  // gray로 계산된 날짜를 7일에서 빼면 첫줄의 흰색 날짜 계산 가능.
  for (let i = 1; i < 7 - lastMonthDay; ++i) {
    // 밑에서도 여기서 쓰인 로직 반복임 여기서만 주석을 담
    if (i == curDate) {
      // 만약 현재 날짜면 t를 붙임 우선순위를 가장 높히기 위해 if else문
      // 가장 꼭대기에 위치함
      firstStr += `${i}t   `;
    } else if (
      // 토욜 일욜 계산 후 r을 붙임
      GetRedDay(i)
    ) {
      firstStr += `${i}r    `;
    } else {
      firstStr += `${i}    `;
    }
    // 만약 날짜가 10 미만이면 글자수가 하나씩 줄어들어서 칸 맞추기 위해 빈칸 추가해줌
    if (i < 10) firstStr += ` `;
  }
  console.log(firstStr);
  for (let i = 1; i < 100; ++i) {
    // 만약 이번달의 마지막 날보다 큰 수를 세면 MakeStr() 함수 내부의
    // isEnd가 참이 되어 밑의 break;로 탈출함
    if (MakeStr(i)) break;
  }
}

function MakeStr(_num) {
  let tempStr = ``;
  let isEnd = false;
  for (
    let i = 7 * _num - lastMonthDay;
    i < 7 * (_num + 1) - lastMonthDay;
    ++i
  ) {
    if (i == curDate) {
      tempStr += `${i}t   `;
    } else if (GetRedDay(i)) {
      tempStr += `${i}r    `;
    } else {
      tempStr += `${i}    `;
    }
    if (i < 10) tempStr += ` `;
    else if (i >= nextDate) {
      isEnd = true;
      for (let j = 1; j < (7 - nextDay == 7 ? 0 : 7 - nextDay); j++) {
        tempStr += `${j}g   `;
        if (j < 10) tempStr += ` `;
      }
      break;
    }
  }
  console.log(tempStr);
  return isEnd;
}

function GetRedDay(_num) {
  if (
    ((_num - 1) % 7) - (6 - dayStart) == 0 ||
    ((_num - 1) % 7) - (6 - dayStart) == 1
  )
    return true;
  else return false;
}
