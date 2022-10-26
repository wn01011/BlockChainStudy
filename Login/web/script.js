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
    console.log(users[i], loginText.value);
    if (
      users[i].id === loginText.value
        ? users[i].password === passwordText.value
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
    console.log("로그인 완료");
    curUser.id = loginText.value;
    curUser.password = passwordText.value;
    loginBtn.classList.toggle("login");
    logoutBtn.classList.toggle("login");
    info.classList.toggle("login");
    info.innerText = `안녕하세요 ${curUser.id}님`;
  } else {
    loginText.focus();
    console.log("잘못된 입력입니다.");
  }
};
logoutBtn.onclick = function (e) {
  loginText.value = "";
  passwordText.value = "";
  curUser.id = "";
  curUser.password = "";
  loginBtn.classList.toggle("login");
  logoutBtn.classList.toggle("login");
  info.classList.toggle("login");
  console.log("로그아웃 완료");
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
          console.log(data, "아이디 생성 완료");
          getUsers();
        });
      passwordText.value = "";
      loginText.value = "";
    } else {
      console.log("아이디 생성 실패");
    }
  }
};

axios
  .get("/api/test", {
    params: { id: "asfd" },
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    if (err) console.error(err);
  });
