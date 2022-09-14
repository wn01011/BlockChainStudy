// Style
const STYLES = {
  FLEXBOX: "display: flex;",
  BORDER: "border:1px solid black;",
  WIDTH: "width:100%;",
};
const styleElem = document.createElement("style");
styleElem.innerHTML = "*{margin:0;padding:0;box-sizing:border-box;}";
document.head.append(styleElem);

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
assignBtn.onclick = () => {
  console.log("abcd");
};
