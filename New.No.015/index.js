console.log(document.body.children);
// children은 엘리먼트의 자식 엘리먼트들을 가져온다, 호출한다.

console.log(document.body.childNodes);
// childNodes 는 자식 노드들을 모두 가져온다.
// 노드들은 엘리먼트 뿐만아니라 입력된 빈칸(text)까지 입력을 한다.
// 즉; 노드는 엘리먼트를 포함하는 상위 개념이다.

// console.log(document.getElementById("parent").childNodes);

// console.log(document.getElementById("parent").parentElement);
// // 부모 엘리먼트를 가져온다.

// console.log(document.getElementById("parent").firstElementChild);
// // 첫번째 자식 엘리먼트를 가져온다.

// console.log(document.getElementById("parent").lastElementChild);
// //  마지막 자식 엘리먼트를 가져온다.

// console.log(document.getElementById("child1").previousElementSibling);
// // 이전 형제 엘리먼트를 가져온다.

// console.log(document.getElementById("child1").nextElementSibling);
// // 다음 형제 엘리먼트를 가져온다.

let children = document.getElementById("parent").children;
// // 위 children은 배열이 아니라 컬랙션이라고 한다.
// 배열로 쓰고 싶다면 배열로 변환 해야한다. 변환 방법(스프레드)
// [...변환할 변수]
[...children].forEach((elem) => console.log(elem));

children = document.getElementsByClassName("child");
children[0].onclick = () => {
  alert("온클릭");
};

function onClick(num) {
  console.log(num + "번째 자식을 클릭했어!");
}

[...children].forEach((elem, index) => {
  // forEach 매개변수 함수에 매개변수로 (item, index)형식으로 받을 수 있으며
  // item은 배열의 아이템 하나하나 , index는 해당아이템의 인덱스를 변환
  elem.onmouseover = () => {
    elem.classList.toggle("hover");
  };
  elem.onmouseleave = () => {
    elem.classList.toggle("hover");
  };
  elem.onclick = () => {
    onClick(index + 1);
    console.log(elem.innerHTML);
    // break; forEach의 단점 : 멈출 수 없다.
    /*
    if (elem.classList.contains("on")) elem.classList.remove("on");
    else elem.classList.add("on");
    // classList 는 엘리먼트의 클래스를 관리하는 객체이다.
    // add 메서드는 클래스를 추가한다.
    return this;
    */
    // elem.classList.toggle("on");
  };
});

let tempArr = ["a", "b", "c"];
for (let index = 0; index < tempArr.length; ++index) {
  const item = tempArr[index];
  console.log(item + " : " + index + "번째 아이템");
}

console.log(document.getElementById("parent").innerHTML);
// HTML 기준으로 텍스를 가져온다.
console.log(document.getElementById("parent").innerText);
// HTML 태그 등등을 제외한 텍스트만 가져온다.
