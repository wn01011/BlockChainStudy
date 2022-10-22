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
  if (coin.textContent <= 0) return;
  PicktheWinner(0);
};
const scissors = rsp[1];
scissors.onclick = () => {
  if (coin.textContent <= 0) return;
  PicktheWinner(1);
};
const paper = rsp[2];
paper.onclick = () => {
  if (coin.textContent <= 0) return;
  PicktheWinner(2);
};
const insertCoin = rsp[3];
insertCoin.onclick = () => {
  coin.textContent = parseInt(coin.textContent) + 100;
};

window.onresize = (e) => {
  let width = window.innerWidth;
  console.log(width);
};

let numbersAry = [];
let imageRollingId = 0;
const COUNT = 16;
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
  if (bull == false) {
    rock.onclick = (e) => {
      e.preventDefault();
    };
    scissors.onclick = (e) => {
      e.preventDefault();
    };
    paper.onclick = (e) => {
      e.preventDefault();
    };
  } else {
    rock.onclick = () => {
      if (coin.textContent <= 0) return;
      PicktheWinner(0);
    };
    scissors.onclick = () => {
      if (coin.textContent <= 0) return;
      PicktheWinner(1);
    };
    paper.onclick = () => {
      if (coin.textContent <= 0) return;
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
function ImageRolling(speed = 1) {
  let count = 0;
  imageRollingId = setInterval(() => {
    SetImage(count++);
  }, 1000 / speed);
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
  return [interval * num, (num % COUNT) + 1];
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
  RspOnclick(false);
  coin.textContent = parseInt(coin.textContent) - 100;

  setTimeout(() => {
    ImageRolling(10);

    setTimeout(() => {
      SetImage(ranComId);
      clearInterval(imageRollingId);

      switch (result) {
        case "win":
          console.log("win");
          let tempTime = 0;
          setTimeout(() => {
            SetHighLight(win1, 4000);
            setTimeout(() => {
              SetHighLight(win2, 4000);
              let winningNum = Math.floor(Math.random() * COUNT);
              setTimeout(() => {
                let tempnumbers = HighlightNumbers(COUNT * 4 + winningNum);
                tempTime = tempnumbers[0];
                setTimeout(() => {
                  ImageRolling();
                  RspOnclick(true);
                  coin.textContent =
                    parseInt(coin.textContent) + tempnumbers[1] * 100;
                }, tempTime);
              }, 4000);
            }, 100);
          }, 0);

          break;
        case "lose":
          console.log("lose");
          SetTwinkle(lose, 2000);
          setTimeout(() => {
            ImageRolling();
            RspOnclick(true);
          }, 2000);
          break;
        case "draw":
          console.log("draw");
          SetTwinkle(draw, 2000);
          setTimeout(() => {
            ImageRolling();
            RspOnclick(true);
            coin.textContent = parseInt(coin.textContent) + 100;
          }, 2000);
          break;
        default:
          break;
      }
    }, 4000);
  }, 0);
}
