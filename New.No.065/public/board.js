const ulElem = document.getElementsByTagName("ul")[0];
axios.get("/board/list").then(({ data }) => {
  data.forEach((item) => {
    const tempLi = document.createElement("li");
    tempLi.innerText = item;
    ulElem.append(tempLi);
  });
});
const inputElem = document.getElementsByTagName("input")[0];
inputElem.focus();
window.addEventListener("keydown", (e) => {
  if (
    e.key === "Enter" &&
    inputElem.value != "" &&
    inputElem == document.activeElement
  ) {
    axios.post("/board/add", { value: inputElem.value }).then(({ data }) => {
      inputElem.value = "";
      ulElem.innerHTML = "";
      data.forEach((item) => {
        const tempLi = document.createElement("li");
        tempLi.innerText = item;
        ulElem.append(tempLi);
      });
    });
  }
  [1, 2, 3].indexOf(Math.max(...[1, 2, 3]));
});
