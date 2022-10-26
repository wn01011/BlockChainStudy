document.getElementById("menu-btn").onclick = function (e) {
  document.getElementById("user-input-container").classList.toggle("on");
};

document.getElementById("board-add").onsubmit = async function (e) {
  e.preventDefault();
  if (!e.target["board-title"].value) {
    e.target["board-title"].focus();
    return;
  }
  if (!e.target["board-text"].value) {
    e.target["board-text"].focus();
    return;
  }

  //   axios.post("/api/board/add", {
  //     title: e.target["board-title"].value,
  //     text: e.target["board-text"].value,
  //     uptime: Date.now(),
  //   });

  try {
    const data = await axios.post("/api/board/add", {
      title: e.target["board-title"].value,
      text: e.target["board-text"].value,
      uptime: Date.now(),
    });

    if (data.data.status == 200) {
      e.target["board-title"].value = e.target["board-text"].value = "";
      getList();
    }
  } catch (err) {
    if (err) console.error(err.message);
  }
};

let maxCount = 2; //페이지 수
let count = 0; // 현재 페이지

const pageElem = document.getElementById("page");
const listElem = document.getElementById("list");

async function getList() {
  try {
    const data = await axios.get("/api/board?count=" + count);

    pageElem.innerHTML = "";
    maxCount = data.data.maxCount;

    for (let i = 0; i < maxCount; ++i) {
      const tempLi = document.createElement("li");
      tempLi.innerText = i + 1;
      tempLi.onclick = function (e) {
        count = i;
        pageElem.getElementsByClassName("now")[0].classList.remove("now");
        tempLi.classList.add("now");
        getList();
      };

      if (count === i) {
        tempLi.classList.toggle("now");
      }
      pageElem.append(tempLi);
    }

    listElem.innerHTML = "";
    data.data.list.forEach((data, index) => {
      const tempLi = document.createElement("li");
      const tempTitle = document.createElement("div");
      const tempH3 = document.createElement("h3");
      const tempText = document.createElement("div");
      const tempImg = document.createElement("img");
      const tempP = document.createElement("p");
      const tempTextArea = document.createElement("textarea");
      const tempBtnBox = document.createElement("div");
      const tempDelBtn = document.createElement("img");
      const tempEditBtn = document.createElement("img");
      const tempCancleBtn = document.createElement("img");

      tempTitle.classList.add("title");
      tempBtnBox.classList.add("btnBox");
      tempTitle.onclick = function (e) {
        tempText.classList.toggle("textOff");
        tempImg.classList.toggle("imgRotate");
        tempText.classList.remove("edit");
      };
      tempText.classList.add("text");
      tempImg.src = "./Images/angle-up-solid.svg";
      tempImg.alt = "list-item-btn";
      tempH3.innerText = data.title;
      tempP.innerText = data.text;
      tempTextArea.value = data.text;
      tempDelBtn.src = "./Images/trash-can-solid.svg";
      tempDelBtn.alt = "deleteBtn";
      tempDelBtn.classList.add("delete");
      tempDelBtn.onclick = async function (e) {
        try {
          const data = await axios.post("/api/board/delete", {
            count,
            num: index,
          });
          getList();
        } catch (err) {
          console.error(err);
        }
      };
      tempEditBtn.src = "./Images/square-plus-regular.svg";
      tempEditBtn.alt = "editBtn";

      tempEditBtn.onclick = async function (e) {
        if (tempText.classList.contains("edit")) {
          try {
            const data = await axios.post("/api/board/update", {
              count,
              num: index,
              text: tempTextArea.value,
              time: Date.now(),
            });
            tempText.classList.toggle("edit");
            getList();
          } catch (err) {
            console.error(err);
          }
        } else {
          tempTextArea.value = data.text;
          tempText.classList.add("edit");
        }
      };

      tempCancleBtn.src = "./Images/ban-solid.svg";
      tempCancleBtn.alt = "cancel-btn";
      tempCancleBtn.classList.add("cancel");
      tempCancleBtn.onclick = function (e) {
        tempText.classList.remove("edit");
      };
      tempBtnBox.append(tempEditBtn);
      tempBtnBox.append(tempDelBtn);

      tempTitle.append(tempH3);
      tempTitle.append(tempImg);
      tempText.append(tempP);
      tempText.append(tempTextArea);
      tempText.append(tempBtnBox);
      tempLi.append(tempTitle);
      tempLi.append(tempText);
      listElem.append(tempLi);
    });
  } catch (err) {
    console.error(err.message);
  }
}
getList();

// 회원가입시작
let users = [];
let curUser = { id: "", password: "" };
function getUsers() {
  axios.get("/api/user").then((data) => {
    users = [];
    data.data.forEach((item) => {
      users.push(item);
    });
    console.log(users);
  });
}
getUsers();

const loginText = document.getElementById("loginText");
const passwordText = document.getElementById("passwordText");

function checkUserInfo() {
  getUsers();
  for (let i = 0; i < users.length; ++i) {
    if (
      users[i]?.id === loginText.value
        ? users[i]?.password === passwordText.value
          ? true
          : false
        : false
    )
      return true;
  }
  return false;
}

function checkSameId(id) {
  getUsers();
  if (users)
    for (let i = 0; i < users.length; ++i) {
      if (users[i].id === id) {
        return true;
      }
    }
  return false;
}

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const info = document.getElementById("info");
loginBtn.onclick = function (e) {
  if (checkUserInfo()) {
    curUser.id = loginText.value;
    curUser.password = passwordText.value;
    loginBtn.classList.toggle("login");
    logoutBtn.classList.toggle("login");
    loginText.classList.toggle("login");
    passwordText.classList.toggle("login");
    info.classList.toggle("login");
    info.innerText = `안녕하세요 ${curUser.id}님`;
  } else {
    loginText.focus();
    info.innerText = `잘못된 입력입니다.`;
  }
};
logoutBtn.onclick = function (e) {
  loginText.value = "";
  passwordText.value = "";
  curUser.id = "";
  curUser.password = "";
  loginBtn.classList.toggle("login");
  logoutBtn.classList.toggle("login");
  loginText.classList.toggle("login");
  passwordText.classList.toggle("login");
  info.classList.toggle("login");
  info.innerText = `로그아웃 완료`;
};

const signupBtn = document.getElementById("signupBtn");
signupBtn.onclick = function (e) {
  if (
    loginText.value &&
    passwordText.value &&
    curUser.id == "" &&
    curUser.password == ""
  ) {
    if (!checkSameId(loginText.value)) {
      axios
        .post("/api/user", {
          id: loginText.value,
          password: passwordText.value,
        })
        .then((data) => {
          info.innerText = `회원가입이 완료되었습니다.`;
          getUsers();
        });
      passwordText.value = "";
      loginText.value = "";
    } else {
      loginText.focus();
      info.innerText = `중복된 아이디가 있습니다.`;
    }
  } else {
    info.innerText = `회원 가입은 로그아웃을 하시고 아이디와 비밀번호에 값을 입력해야 가능합니다.`;
  }
};
