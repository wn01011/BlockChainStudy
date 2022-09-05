let count = 0;
let hanoiCount = 0;
let hanoiNumn = 0;
let from = 1;
let other = 2;
let to = 3;
let node = {
  stick1: [],
  stick2: [],
  stick3: [],
};
let myRing = function (_num, _curRing) {
  this._num = _num;
  this._curRing = _curRing;
};
console.log(document.getElementsByClassName("stick")[0]);
document.getElementsByClassName("stick")[1].style.backgroundColor = "red";

document.getElementsByClassName("stick")[0].style.backgroundColor = "blue";

function HanoiAnim(_num, _from, _other, _to) {
  const interval = 4000;
  setTimeout(() => {
    myMove(_num, _from, _other, _to);
  }, interval * count++);
}
let ringNum = 7;
MakeRing(ringNum);
RealHanoi(ringNum, 0, 1, 2);

function MakeRing(_num) {
  let stick1 = document.getElementsByClassName("stick")[0];
  for (let i = 0; i < _num; ++i) {
    let div = document.createElement("div");
    div.classList.add("ring");
    div.style.width = 400 - i * 20 + "%";
    stick1.appendChild(div);
    let curRing = new Object(myRing());
    curRing.num = i;
    node.stick1.push(curRing);
  }
}

function RealHanoi(_num, _from, _other, _to) {
  if (_num === 0) return;
  RealHanoi(_num - 1, _from, _to, _other);
  ++hanoiCount;
  HanoiAnim(_num, _from, _other, _to);
  //myMove(_num, _from, _other, _to);
  RealHanoi(_num - 1, _other, _from, _to);
}
/*function Log(_num, _from, _other, _to) {
  if (_num === 0) return;
  Log(_num - 1, _from, _to, _other);
  ++count;
  console.log(`${_num} : ${count}번째 ${_from} -> ${_to}`);
  Log(_num - 1, _other, _from, _to);
}*/
function SetRing() {
  SetRingColor(1, "gray");
}

function SetRingColor(_num, _color) {
  let curRing = document.getElementsByClassName("ring")[_num - 1];
  // curRing.style.cssText = `transform: translateY(-${1000}%); background-color : ${_color}`;
}

function SetRingParent(_ringNum, _stickNum) {
  let curRing = document.getElementsByClassName("ring")[_ringNum - 1];
  curRing.animate(
    [{ transform: `translate(0, 0)` }, { transform: `translate(0, -1000%)` }],
    { duration: 1000, delay: 700, fillMode: "forwards" }
  );
  let otherStick = document.getElementsByClassName("stick")[_stickNum - 1];
  otherStick.appendChild(curRing);
}

function myMove(_num, _from, _other, _destination) {
  let id = null;
  // let curRing = document.getElementsByClassName("ring")[_num];
  let tempRing;
  let curRing;
  let pos = 0;
  let curLeft = null;
  if (_from == 0) {
    tempRing = node.stick1.pop();
    curRing = document.getElementsByClassName("ring")[tempRing.num];
    curRing.style.left = 0;
  } else if (_from == 1) {
    tempRing = node.stick2.pop();
    curRing = document.getElementsByClassName("ring")[tempRing.num];
    curRing.style.left = 340 + "%";
  } else {
    tempRing = node.stick3.pop();
    curRing = document.getElementsByClassName("ring")[tempRing.num];
    curRing.style.left = 680 + "%";
  }
  curLeft = parseInt(curRing.style.left);
  console.log(curLeft);
  let start = curLeft;
  let end;
  if (_destination == 0) {
    end = 0;
    node.stick1.push(tempRing);
  } else if (_destination == 1) {
    end = 340;
    node.stick2.push(tempRing);
  } else {
    end = 680;
    node.stick3.push(tempRing);
  }
  clearInterval(id);
  id = setInterval(frame, 30);
  curRing.style.bottom = -100 + "%";
  function frame() {
    pos += 10;
    // distination 0 : left = 0// 1 : left = 340 // 2 : left = 680
    // top : 50%; bottom : -100%;
    if (pos >= 700) {
      clearInterval(id);
      curRing.style.bottom = -100 + "%";
      return;
    } else if (pos >= 50 && pos <= 100) {
      curRing.style.bottom = (pos - 100) / 5 + 50 + "%";
    } else if (pos > 350 && pos <= 400) {
      curRing.style.left = (400 - pos) / 5 + end + "%";
    } else if (pos >= 600 && pos < 650) {
      curRing.style.bottom = (650 - pos) / 5 - 100 + "%";
    }
  }
}
