// Style
const STYLES = {
  FLEXBOX: "display: flex;",
  BORDER: "border:1px solid black;",
  WIDTH: "width:100%;",
};
const styleElem = document.createElement("style");
styleElem.innerHTML = "*{margin:0;padding:0;box-sizing:border-box;}";
document.head.append(styleElem);

const listArray = [];
class listElem {
  constructor({ id, text, elem }) {
    this.id = id;
    this.text = text;
    this.elem = elem;
  }
}

const root = document.getElementById("root");
const body = document.body;
// document.getElementsByTagName("body")[0].style = `
// box-sizeing : borderbox;
// padding:0;
// margin:0;
// `;

root.style = STYLES.FLEXBOX + STYLES.WIDTH;
root.remove();
document.getElementsByTagName("title")[0].innerText = "Title";
const header = document.createElement("header");
header.style = `
margin:auto;
margin-top : 40px;
display:flex;
flex-direction : column;
justify-content : center;
row-gap : 20px;
align-items : center;
background-color:gray;
width : 80%;
height: 20%;
`;
body.appendChild(header);

const title = document.createElement("h1");
title.innerText = "ToDo.";
header.appendChild(title);

const assign = document.createElement("section");
header.appendChild(assign);
assign.style = `
    display:flex;
    justify-content : center;
    align-items : center;
    column-gap :20px;
`;

const inputText = document.createElement("input");
assign.appendChild(inputText);

inputText.placeholder = "할 일을 입력하세요!";
inputText.style = `
font-size : 2rem;
text-align : center;
background-color : lightgreen;
width : 100%;
height : 100%;
color:gray;
`;

const assignBtn = document.createElement("button");
assign.appendChild(assignBtn);
assignBtn.style = `
width : 40px;
height : 40px;
background-color:skyblue;
border : none;
`;
let textValue;

const listBox = document.createElement("section");
body.appendChild(listBox);

listBox.style = `
margin:auto;
margin-top : 20px;
width : 80%;
border : 1px solid black;
background-color : lightpink;
display:flex;
flex-direction:column;
justify-content : start;
align-items : center;
`;

let count = 0;

function AppendList(id, text) {
  let curList = CreateList(id, text);
  // 수정 버튼
  let reviseBtn = document.createElement("revise");
  reviseBtn.textContent = "● ● ●";
  curList.appendChild(reviseBtn);
  reviseBtn.style = `
  width : 40px;
  line-height:40px;
  display:flex;
  text-align:center;
  justify-content:center;
  font-size:0.1rem;
  background-color:green;
  `;
  // 지우기 버튼
  let deleteBtn = document.createElement("button");
  curList.appendChild(deleteBtn);
  deleteBtn.textContent = "x";
  deleteBtn.style = `
  font-size:2rem;
  width : 40px;
  background-color:red;
  `;
  listArray.push(new listElem({ id: count, text: text, elem: curList }));
  reviseBtn.onclick = () => {
    ReviseList(id);
  };
  deleteBtn.onclick = () => {
    RemoveList(id);
  };
  count++;
}

function CreateList(id, text) {
  let curList = document.createElement("div");
  listBox.appendChild(curList);
  curList.style = `
  width : 100%;
  height : 40px;
  display:flex;
  justify-content:space-evenly;
  column-gap :20px;
  margin : 5px;
  border:1px solid black;
  background-color:lightyellow;
  `;

  let curListText = document.createElement("p");
  curList.appendChild(curListText);
  curListText.style = `
  display:flex;
  align-items:center;
  font-size:1.5rem;
  width : 80%;
  background-color:lightgray;
  padding-left : 20px;
  letter-spacing : 0.6rem;
  `;

  curListText.textContent = `${id}\u00a0\u00a0\u00a0\ ${text}`;
  return curList;
}
function ReviseList(id) {
  if (inputText.value == "") return;
  let idx = listArray.findIndex((item) => item.id == id);

  listArray[idx].text = inputText.value;
  listArray[idx].elem.getElementsByTagName(
    "p"
  )[0].textContent = `${listArray[idx].id}\u00a0\u00a0\u00a0\ ${listArray[idx].text}`;
  inputText.value = "";
}
function RemoveList(id) {
  let idx = listArray.findIndex((item) => item.id == id);

  listArray[idx].elem.remove();
  listArray.splice(idx, 1);
}

assignBtn.onclick = () => {
  if (inputText.value == "") return;
  AppendList(count, inputText.value);
  inputText.value = "";
};
