const todoAdd = document.getElementById("todoAdd");
const todoRemove = document.getElementById("todoRemove");
const todoList = document.getElementById("todoList");
const proceedList = document.getElementById("proceedList");
const doneList = document.getElementById("doneList");
const inputText = document.getElementById("inputText");
const fin = document.getElementById("fin");
const deleteText = document.getElementById("deleteText");
const menu = document.getElementById("menu");
let todoListItems = document.getElementsByClassName("checkBox");

let todoListContainer = [];
let proceedListContainer = [];
let doneListContainer = [];

let todoCurId = 0;
let proceedCurId = 100000;
let doneCurId = 200000;

class Contents {
  constructor(id, job, type = 1) {
    this.id = id;
    this.job = job;
    this.type = type;
  }

  view() {
    if (this.type == 1) {
      return `<li class="checkBox${this.type}">
    <input type="checkbox" id="todoCheck${this.id}" name="todoCheck" />
    <label for="todoCheck${this.id}"
    >할 일 : ${this.job} ${this.id}<span class="checkmark"></span
    ></label><input type="button" class="option" value="..." onclick="Menu(${this.id})"></input>
    </li>`;
    } else if (this.type == 2) {
      return `<li class="checkBox${this.type}">
    <input type="checkbox" id="todoCheck${this.id}" name="todoCheck" />
    <label for="todoCheck${this.id}"
    >진행중 : ${this.job} ${this.id}<span class="checkmark"></span
    ></label><input type="button" class="option" value="..." onclick="Menu(${this.id})"></input>
    </li>`;
    } else if (this.type == 3) {
      return `<li class="checkBox${this.type}">
    <input type="checkbox" id="todoCheck${this.id}" name="todoCheck" />
    <label for="todoCheck${this.id}"
    >종 료 : ${this.job} ${this.id}<span class="checkmark"></span
    ></label><input type="button" class="option" value="..." onclick="Menu(${this.id})"></input>
    </li>`;
    }
  }
}
todoAdd.onclick = () => {
  todoCurId++;
  let curValue = inputText.value;
  let curContent;
  if (curValue) curContent = new Contents(todoCurId, inputText.value);
  else return;
  todoListContainer.push(curContent);
  todoList.innerHTML = "";
  for (let i = 0; i < todoListContainer.length; ++i) {
    todoList.innerHTML += todoListContainer[i].view();
  }
  inputText.value = "";
};

todoRemove.onclick = () => {
  todoListContainer.pop();
  todoList.innerHTML = "";
  for (let i = 0; i < todoListContainer.length; ++i) {
    todoList.innerHTML += todoListContainer[i].view();
  }
};

deleteText.onchange = (e) => {
  for (let i = 0; i < todoListContainer.length; ++i) {
    if (todoListContainer[i].id == deleteText.value) {
      todoListContainer.splice(i, 1);
      todoList.innerHTML = "";
      for (let i = 0; i < todoListContainer.length; ++i) {
        todoList.innerHTML += todoListContainer[i].view();
      }
      deleteText.value = "";
      break;
    }
  }
  for (let i = 0; i < proceedListContainer.length; ++i) {
    if (proceedListContainer[i].id == deleteText.value) {
      proceedListContainer.splice(i, 1);
      proceedList.innerHTML = "";
      for (let i = 0; i < proceedListContainer.length; ++i) {
        proceedList.innerHTML += proceedListContainer[i].view();
      }
      break;
    }
  }
  for (let i = 0; i < doneListContainer.length; ++i) {
    if (doneListContainer[i].id == deleteText.value) {
      doneListContainer.splice(i, 1);
      doneList.innerHTML = "";
      for (let i = 0; i < doneListContainer.length; ++i) {
        doneList.innerHTML += doneListContainer[i].view();
      }
      break;
    }
  }
};

function CheckAction() {
  window.requestIdleCallback(CheckAction);
  CheckBoxChecker(1);
  CheckBoxChecker(2);
  CheckBoxChecker(3);
}
CheckAction();

function Menu(id) {
  if (menu.style.display == "none") menu.style.display = "block";
  else menu.style.display = "none";
  menu.value = `id : ${id}`;
}

function CheckBoxChecker(type) {
  if (type == 1) {
    [...document.getElementsByClassName(`checkBox1`)].forEach((elem, index) => {
      if (
        elem.getElementsByTagName("input")[0].checked &&
        elem.parentElement.id == "todoList"
      ) {
        proceedCurId++;
        let curContent = todoListContainer[index];
        todoListContainer.splice(index, 1);
        let curItem = new Contents(proceedCurId, curContent.job, 2);
        proceedListContainer.push(curItem);
        proceedList.innerHTML = "";
        for (let i = 0; i < proceedListContainer.length; ++i) {
          proceedList.innerHTML += proceedListContainer[i].view(curItem.view());
        }
        todoList.innerHTML = "";
        for (let i = 0; i < todoListContainer.length; ++i) {
          todoList.innerHTML += todoListContainer[i].view();
        }
        elem.remove();
      }
    });
  } else if (type == 2) {
    [...document.getElementsByClassName(`checkBox2`)].forEach((elem, index) => {
      if (
        elem.getElementsByTagName("input")[0].checked &&
        elem.parentElement.id == "proceedList"
      ) {
        doneCurId++;
        let curContent = proceedListContainer[index];
        proceedListContainer.splice(index, 1);
        let curItem = new Contents(doneCurId, curContent.job, 3);
        doneListContainer.push(curItem);
        doneList.innerHTML = "";
        for (let i = 0; i < doneListContainer.length; ++i) {
          doneList.innerHTML += doneListContainer[i].view(curItem.view());
        }
        proceedList.innerHTML = "";
        for (let i = 0; i < proceedListContainer.length; ++i) {
          proceedList.innerHTML += proceedListContainer[i].view();
        }
        elem.remove();
      }
    });
  } else if (type == 3) {
    let count = 0;
    [...document.getElementsByClassName(`checkBox3`)].forEach((elem, index) => {
      if (
        elem.getElementsByTagName("input")[0].checked &&
        elem.parentElement.id == "doneList"
      ) {
        count++;
      }
    });
    fin.innerText = `현재 완료 : ${count}`;
  }
}
