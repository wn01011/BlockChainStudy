let calendarBox = [];

let year = prompt();
let month = prompt() - 1;
let day = prompt();
let curDate = new Date(year, month, day);

MakeCalendar(year, month, day);
SetCalendarDate();

function MakeCalendar(_year, _month, _day) {
  curDate = new Date(_year, _month, _day);
  let curYear = curDate.getFullYear();
  let curMonth = curDate.getMonth() + 1;
  let curDay = curDate.getDay();
  console.log(`curYear : ${curYear} curMonth : ${curMonth} curDay : ${curDay}`);
}

function SetCalendarDate() {
  for (let i = 0; i < 42; ++i) {
    calendarBox.push("1");
    console.log(
      document.getElementsByClassName("row")[parseInt(i / 7)].nodeValue
    );
    calendarBox[i];
  }
  console.log(calendarBox[0]);
}

function GetStartIndex(_day) {}
