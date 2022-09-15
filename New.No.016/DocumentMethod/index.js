const root = document.getElementById("root");

root.onload = () => {
  console.log("helo");
};

document.getElementById("name").onchange = (e) => {
  console.log(e.target.value);
  //  e.target은 해당 메서드가 어디서 실행되었는지,
  //  포커스(focus)가 기준이 될 수도 있고
  //  마우스가 기준이 될 수도 있다.
};
document.getElementById("name").onkeydown = (e) => {
  console.log(e.target.value);
  //  e.target은 해당 메서드가 어디서 실행되었는지,
  //  포커스(focus)가 기준이 될 수도 있고
  //  마우스가 기준이 될 수도 있다.
};
// on어쩌구 하는 메서드를 쓰는데 그것들을 전부 이벤트 함수라고 부른다.
//  즉, 클릭, 키-다운, 입력 등 사용자의 입력에 대해서 이벤트가 발생했을 때 실행된다.

document.getElementById("name").addEventListener("click", (e) => {
  console.log(e);
});

for (let i = 0; i < 10; ++i) {
  const tempElem = document.createElement("div");
  tempElem.innerHTML = i + `번째 div`;
  root.append(tempElem);
  // root 엘리먼트에 tempElem 엘리먼트를 마지막 자식으로 추가한다.

  root.prepend(tempElem);
  // root 엘리먼트에 tempElem 에릴먼트를 첫번째 자식으로 추가한다.
}

document.body.onresize = () => {
  console.log(
    `(${document.body.clientWidth} x ${document.body.clientHeight}) `
  );
};
