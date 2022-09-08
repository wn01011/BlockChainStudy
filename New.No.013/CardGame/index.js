let cards = [];

for (let i = 0; i < 8; ++i) {
  cards.push(i + 1);
  cards.push(i + 1);
}

shuffleArray(cards);

function shuffleArray(array) {
  let temp;
  let ranNum = 0;
  for (let i = 0; i < array.length; ++i) {
    ranNum = Math.floor(Math.random() * (array.length - 1));
    temp = array[i];
    array[i] = array[ranNum];
    array[ranNum] = temp;
  }
}

let firstCardIdx = -1;
let secondCardIdx = -1;

let firstElem;
let secondElem;
function selectNum(cardNum) {
  const tempElem = document.getElementById("card" + cardNum);
  if (tempElem.innerHTML) return;
  //매개변수로 받은 cardNum은 id의 'card' 뒤에 붙은 숫자와ㅑ 동일하게 되어있으며
  //cardNum와 'card'를 붙여서 id 를 찾아옵니다.
  if (firstCardIdx < 0) {
    // 첫 번째 카드를 선택하지 않았는가?
    firstCardIdx = cardNum - 1;
    firstElem = document.getElementById("card" + (firstCardIdx + 1));
    tempElem.innerHTML = cards[cardNum - 1];
    console.log(`firstCardIdx : ${firstCardIdx}`);
  } else if (secondCardIdx < 0) {
    // 첫 째 카드는 선택했는데 둘 째 카드는 선택하지 않았는가?
    secondCardIdx = cardNum - 1;
    secondElem = document.getElementById("card" + (secondCardIdx + 1));
    tempElem.innerHTML = cards[cardNum - 1];
    console.log(`secondCardIdx : ${secondCardIdx}`);

    if (cards[firstCardIdx] != cards[secondCardIdx]) {
      firstElem.innerHTML = "";
      secondElem.innerHTML = "";
    } else {
      firstElem.style.backgroundColor = "green";
      secondElem.style.backgroundColor = "green";
    }
    firstCardIdx = -1;
    secondCardIdx = -1;
  }

  //  찾은 클릭 당한 태그의 내용으로 cards 중에 cardNum -1 번째 (컴퓨터는
  //  숫자를 0부터 시작하기 때문) 부터 출려가힉 시작한다.
}
