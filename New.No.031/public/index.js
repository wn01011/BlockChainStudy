const todoList = document.getElementById("list");
const goodList = document.getElementById("goodList");
const badList = document.getElementById("badList");
let curData;
let index = 0;
function getList() {
  todoList.innerHTML = "";
  axios
    .get("/api/list")
    .then((resData) => {
      curData = resData;
      console.log(curData);
      curData.data.list.forEach((todo) => {
        const tempElem = document.createElement("li");
        tempElem.classList.add("list-group-item");
        tempElem.classList.add("bad");
        tempElem.innerHTML = `${todo.text} / status : ${todo.status}
      <button>완료버튼</button><button>삭제버튼</button>`;
        todoList.append(tempElem);
      });
    })
    .then((data) => {
      let listGroup = [...document.getElementsByClassName("list-group-item")];
      listGroup.forEach((item, index) => {
        const confirmBtn = item.getElementsByTagName("button")[0];
        const delBtn = item.getElementsByTagName("button")[1];
        confirmBtn.onclick = () => {
          item.classList.remove("bad");
          item.classList.add("good");
          curData.data.list[index].status = "괜찮아";
          item.innerHTML = `${curData.data.list[index].text} / status : ${curData.data.list[index].status}
          <button>완료버튼</button><button>삭제버튼</button>`;

          axios.post("/api/list", { index: index, status: "괜찮아" });
        };
        delBtn.onclick = () => {
          item.remove();
          axios.post("/api/list", { index: index, status: "삭제" });
          index--;
        };
      });
    });
}
getList();

document.forms["todo-form"].onsubmit = function (e) {
  e.preventDefault(); // << 기본 이벤트를 막는다.

  // XMLHttpRequest => fetch/ajax => axios
  // http 모듈 => express

  axios
    .post("/api/list", {
      text: document.forms["todo-form"]["do-name"].value,
      status: "안괜찮아",
      index: index++,
    })
    .then(() => {
      console.log(curData);
      getList();
    });
};
