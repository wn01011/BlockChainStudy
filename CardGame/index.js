let mainGrid = document.getElementById("mainGrid");
alert(
  "행과 열 순서대로 입력하는데 서로 곱한 값이 26이 넘지 않게\n행과 열을 입력해 주세요"
);
let row = parseInt(prompt("행 입력"));
let column = parseInt(prompt("열 입력"));
let cardNumAry = [];
let cardAry = [];
let sameCardChecker = -1;
let clickedAry = [];
let clearAry = [];
let clickTry = 0;
const cardBackImg = "url(./Assets/Images/cardBack.png)";

if (row % 2 == 1 && column % 2 == 1) {
  row -= 1;
}
if (row * column > 104) {
  row = 10;
  column = 10;
}

function Card(_img, _type, _num) {
  this.img = _img;
  this.type = _type;
  this.num = _num;
}

SetGrid(row, column);
SetCardNum(row, column);

/** css 그리드 스타일 지정 */
function SetGrid(_row, _column) {
  mainGrid.style.setProperty(
    `grid-template-rows`,
    `repeat(${_row}, ${100 / _row}%)`
  );
  mainGrid.style.setProperty(
    `grid-template-columns`,
    `repeat(${_column}, ${100 / _column}%)`
  );
  for (let i = 0; i < _row * _column; ++i) {
    let curItem = document.createElement("div");
    curItem.classList += "gridItem";
    mainGrid.appendChild(curItem);
  }
}

/** 중복없는 카드배열 생성 */
function SetCardNum(_row, _column) {
  for (let i = 1; i <= 13; ++i) {
    cardNumAry.push([i, "Clober"]);
    cardNumAry.push([i, "Diamond"]);
    cardNumAry.push([i, "Heart"]);
    cardNumAry.push([i, "Spade"]);
  }
  shuffleArray(cardNumAry);
  console.log(cardNumAry);
  cardNumAry = cardNumAry.slice(0, (_row * _column) / 2);
  DuplicateCard();
  shuffleArray(cardNumAry);
  cardAry = cardNumAry.map((x) => {
    return MakeCard(x);
  });
  SetCard();
}

function shuffleArray(array) {
  let temp;
  let ranNum = 0;
  for (let i = 0; i < array.length; ++i) {
    ranNum = Math.floor(Math.random() * array.length);
    temp = array[i];
    array[i] = array[ranNum];
    array[ranNum] = temp;
  }
}

// /** 짝을 서로 만들어야해서 중복없는 카드배열을 복사해서 뒤에 붙여주는 함수 */
function DuplicateCard() {
  let aryLen = cardNumAry.length;
  for (let i = 0; i < aryLen; ++i) {
    cardNumAry.push(cardNumAry[i]);
  }
}

function SetCard() {
  let gridItems = document.getElementsByClassName("gridItem");

  for (let i = 0; i < gridItems.length; ++i) {
    gridItems[i].addEventListener("click", (x) => {
      ClickEvent(x, i);
    });
  }
}

function ClickEvent(x, i) {
  if (clickedAry.length >= 2) return;
  x.target.style.setProperty(`content`, `${cardAry[i].img}`);
  if (i != sameCardChecker && clickedAry.length < 2) {
    clickedAry.push(cardAry[i]);
    sameCardChecker = i;
  }
  if (MatchCard()) return;
}

function MatchCard() {
  let items = document.getElementsByClassName("gridItem");
  let indexes = [];

  for (let i = 0; i < cardAry.length; ++i) {
    for (let j = 0; j < clickedAry.length; ++j) {
      if (cardAry[i] == clickedAry[j]) {
        indexes.push(i);
      }
    }
  }
  if (
    clickedAry.length == 2 &&
    clickedAry[0].num == clickedAry[1].num &&
    clickedAry[0].type == clickedAry[1].type
  ) {
    items[indexes[0]].style.setProperty(`pointer-events`, `none`);
    items[indexes[1]].style.setProperty(`pointer-events`, `none`);
    if (
      !clearAry.includes(items[indexes[0]]) &&
      !clearAry.includes(items[indexes[1]])
    ) {
      clearAry.push(items[indexes[0]]);
      clearAry.push(items[indexes[1]]);
    }

    if (clearAry.length >= row * column) {
      ClearFontColor();
    }
    items[indexes[0]].style.setProperty(
      `content`,
      `${cardAry[indexes[0].img]}`
    );
    items[indexes[1]].style.setProperty(
      `content`,
      `${cardAry[indexes[1].img]}`
    );
    let leftCards = [];
    for (let i = 0; i < items.length; ++i) {
      if (!clearAry.includes(items[i])) {
        leftCards.push(items[i]);
        items[i].style.setProperty(`pointer-events`, `none`);
      }
    }
    setTimeout(() => {
      for (let i = 0; i < leftCards.length; ++i) {
        leftCards[i].style.setProperty(`pointer-events`, `all`);
        leftCards[i].style.setProperty(`content`, `${cardBackImg}`);
      }
      clickedAry = [];
    }, 1000);
    return true;
  } else if (
    clickedAry.length == 2 &&
    (clickedAry[0].num != clickedAry[1].num ||
      clickedAry[0].type != clickedAry[1].type)
  ) {
    let leftCards = [];
    for (let i = 0; i < items.length; ++i) {
      if (!clearAry.includes(items[i])) {
        leftCards.push(items[i]);
        items[i].style.setProperty(`pointer-events`, `none`);
      }
    }
    setTimeout(() => {
      items[indexes[0]].style.setProperty(`content`, `${cardBackImg}`);
      items[indexes[1]].style.setProperty(`content`, `${cardBackImg}`);
      for (let i = 0; i < leftCards.length; ++i) {
        leftCards[i].style.setProperty(`pointer-events`, `all`);
        leftCards[i].style.setProperty(`content`, `${cardBackImg}`);
      }
      clickedAry = [];
    }, 1000);
  }

  return false;
}

function ClearFontColor() {
  let curFont = document.getElementById("clear");
  curFont.style.setProperty(`display`, `block`);

  setInterval(frame, 10);
  let r = 50 + parseInt(Math.random() * 150);
  let g = 50 + parseInt(Math.random() * 150);
  let b = 50 + parseInt(Math.random() * 150);
  let tick = 0;
  function frame() {
    tick += 1;
    if (tick >= 255) {
      tick %= 255;
    } else {
      curFont.style.color =
        ((r + tick) % 255, (g - tick) % 255, (b + tick) % 255);
    }
  }
  curFont.style.color = (r, g, b);
}
function MakeCard(_num) {
  let curCard = new Card();
  curCard.num = _num[0];
  curCard.type = _num[1];
  curCard.img = `url(./Assets/Images/${curCard.type}${curCard.num}.png`;
  return curCard;
}
