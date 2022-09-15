const coin = document.getElementById("coinText");

coin.textContent = 0;

const win1 = document.getElementById("win").children[0];
const win2 = document.getElementById("win").children[1];
const lose = document.getElementById("lose").children[0];
const draw = document.getElementById("lose").children[1];
const numbers = document.getElementById("numbers");
const image = numbers.children[0];

// btns
const rsp = document.getElementsByClassName("rsp");
const rock = rsp[0];
rock.onclick = () => {
  PicktheWinner(0);
};
const scissors = rsp[1];
scissors.onclick = () => {
  PicktheWinner(1);
};
const paper = rsp[2];
paper.onclick = () => {
  PicktheWinner(2);
};
const insertCoin = rsp[3];
insertCoin.onclick = () => {
  coin.textContent = parseInt(coin.textContent) + 100;
};

let numbersAry = [];
let imageRollingId = 0;
const COUNT = 22;
SetNumber(COUNT);

ImageRolling();

function SetNumber(num) {
  let curNumber;
  let curText;
  let magicNum = 360 / num;
  for (let i = 0; i < num; ++i) {
    curNumber = document.createElement("li");
    numbers.appendChild(curNumber);
    curNumber.style = `
  transform: rotate(${i * magicNum}deg) skewY(-${90 - magicNum}deg);
  position: absolute;
  overflow: hidden;
  transform-origin: 0% 100%;
  top: 0;
  right: 0;
  list-style: none;
  width: 50%;
  height: 50%;
  background-color: transparent;
  `;
    curText = document.createElement("div");
    curNumber.appendChild(curText);
    curText.textContent = i + 1;
    if (i % 2 == 0) {
      curText.style = `
        background: whitesmoke;
        color: maroon;
        position: absolute;
        left: -100%;
        width: 200%;
        height: 200%;
        text-align: center;
        transform: skewY(${90 - magicNum}deg) rotate(${magicNum / 2}deg);
        padding-top: 5px;`;
    } else {
      curText.style = `
        background: maroon;
        position: absolute;
        left: -100%;
        width: 200%;
        height: 200%;
        text-align: center;
        transform: skewY(${90 - magicNum}deg) rotate(${magicNum / 2}deg);
        padding-top: 5px;`;
    }
    numbersAry.push(curNumber);
  }
}

function SetTwinkle(elem, delay) {
  elem.classList += "twinkle";
  setTimeout(() => {
    elem.classList = "";
  }, delay);
}

function SetHighLight(elem, delay) {
  elem.classList += "highLight";
  setTimeout(() => {
    elem.classList = "select";
    setTimeout(() => {
      elem.classList = "";
    }, 2000);
  }, delay);
}

function RspOnclick(bull) {
  if (!bull) {
    rock.onclick = (e) => {
      e.preventDefault;
    };
    scissors.onclick = (e) => {
      e.preventDefault;
    };
    paper.onclick = (e) => {
      e.preventDefault;
    };
  } else {
    rock.onclick = () => {
      PicktheWinner(0);
    };
    scissors.onclick = () => {
      PicktheWinner(1);
    };
    paper.onclick = () => {
      PicktheWinner(2);
    };
  }
}

function SetImage(num) {
  num %= 3;
  switch (num) {
    case 0:
      image.src = "./Assets/Images/rock.png";
      break;
    case 1:
      image.src = "./Assets/Images/scissors.png";
      break;
    case 2:
      image.src = "./Assets/Images/paper.png";
      break;
    default:
      image.src = "./Assets/Images/rock.png";
      break;
  }
}
function ImageRolling() {
  let count = 0;
  imageRollingId = setInterval(() => {
    SetImage(count++);
  }, 1000);
}

function HighlightNumbers(num) {
  let count = 0;
  const interval = 40;
  let tempId = setInterval(() => {
    if (count >= num) {
      SetTwinkle(numbersAry[count++ % COUNT].children[0], 2000);
      clearInterval(tempId);
    }
    SetTwinkle(numbersAry[count++ % COUNT].children[0], interval);
  }, interval);
  return interval * num;
}

function PicktheWinner(rspId) {
  let ranComId = Math.floor(Math.random() * 3);
  let curDiff = ranComId - rspId;
  let result = "draw";
  if (curDiff > 0) {
    Math.abs(curDiff) == 1 ? (result = "win") : (result = "lose");
  } else if (curDiff < 0) {
    Math.abs(curDiff) == 1 ? (result = "lose") : (result = "win");
  }
  clearInterval(imageRollingId);
  SetImage(ranComId);
  RspOnclick(false);
  switch (result) {
    case "win":
      console.log("win");
      let waitTime = 0;
      let tempTime;
      setTimeout(() => {
        SetHighLight(win1, 4000);
      }, (waitTime += 100));

      setTimeout(() => SetHighLight(win2, 4000), (waitTime += 100));
      let winningNum = Math.floor(Math.random() * COUNT);
      setTimeout(() => {
        tempTime = HighlightNumbers(COUNT * 4 + winningNum);
      }, (waitTime += 4000));
      setTimeout(() => {
        RspOnclick(true);
        ImageRolling();
      }, waitTime + 4000 + tempTime);
      break;
    case "lose":
      RspOnclick(true);
      console.log("lose");
      break;
    case "draw":
      RspOnclick(true);
      console.log("draw");
      break;
    default:
      break;
  }
}
