const idText = document.getElementById("id");
const pwText = document.getElementById("pw");
const signInBtn = document.getElementById("signInBtn");
const signOutBtn = document.getElementById("signOutBtn");
const signUpBtn = document.getElementById("signUpBtn");
const textArea = document.getElementsByTagName("textarea")[0];
const uploadBtn = document.getElementById("upload");
const info = document.getElementById("info");

let curId = "";
let cookieInterval;
function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
let textId = 0;

function login() {
  axios
    .get("/api/user/login", {
      params: {
        id: idText.value,
        pw: pwText.value,
      },
    })
    .then((data) => {
      if (data.data.error == "444") {
        console.error("잘못된 정보입니다.");
        textArea.classList.remove("on");
        uploadBtn.classList.remove("on");
        signOutBtn.classList.remove("on");
        signInBtn.classList.add("on");
        idText.classList.add("on");
        pwText.classList.add("on");
      } else {
        cookieInterval = setInterval(() => {
          if (document.cookie) {
            // console.log("쿠키 있어요");
          } else {
            if (curId != "") logout();
            // console.log("쿠키 없어요");
          }
        }, 1000);
        curId = idText.value;
        const cookieDataRaw = decodeURIComponent(`${document.cookie}`);
        const raw1 = cookieDataRaw.split("=")[0];
        const raw2 = cookieDataRaw.split("=")[1].replace(/{|}/g, "").split(",");
        const cookieData = {
          name: raw1,
          id: raw2[0].split(":")[1],
          pw: raw2[1].split(":")[1],
          jwt: raw2[2].split(":")[1],
        };
        info.innerHTML = `id : ${cookieData.name}<br />pw : ${cookieData.pw}<br />jwt : ${cookieData.jwt}`;
        idText.value = "";
        pwText.value = "";
        textArea.classList.add("on");
        uploadBtn.classList.add("on");
        signOutBtn.classList.add("on");
        signInBtn.classList.remove("on");
        idText.classList.remove("on");
        pwText.classList.remove("on");
        // console.log(data, curId);
      }
    });
}
// 쿠키가 존재할 시 자동 로그인
if (document.cookie) {
  const curCookieData = decodeURIComponent(`${document.cookie}`);
  const rawData = curCookieData.split("=")[1].replace(/{|}/g, "").split(",");
  const cookieData = {
    name: curCookieData.split("=")[0],
    id: rawData[0].split(":")[1],
    pw: rawData[1].split(":")[1],
    jwt: rawData[2].split(":")[1],
  };
  if (cookieData.id && cookieData.pw) {
    idText.value = cookieData.id;
    pwText.value = cookieData.pw;
    login();
  }
}

// 로그인 버튼
signInBtn.onclick = function (e) {
  login();
};

function logout() {
  axios.get("/api/user/logout").then((data) => {
    deleteCookie(`${curId}`);
    textArea.classList.remove("on");
    uploadBtn.classList.remove("on");
    signOutBtn.classList.remove("on");
    signInBtn.classList.add("on");
    idText.classList.add("on");
    pwText.classList.add("on");
    info.innerHTML = `<div></div>`;
    curId = "";
    if (cookieInterval) clearInterval(cookieInterval);
    cookieInterval = undefined;
  });
}

signOutBtn.onclick = function (e) {
  logout();
};

signUpBtn.onclick = function (e) {
  axios
    .get("/api/user/signup", {
      params: {
        id: idText.value,
        pw: pwText.value,
      },
    })
    .then((data) => {
      if (data.data.data != "못만들어 임마") console.log(data);
      else console.error("못만들어 임마");
    });
};

// 처음 게시판 내용 불러오기
function initBoard() {
  axios.get("/api/board/getBoard").then((data) => {
    // console.log(data);
    let maxTextId = 0;
    for (let i = 0; i < data.data.length; ++i) {
      const curData = data.data[i];
      makeInitDiv(curData.id, curData.textId, curData.value);
      if (maxTextId < +curData.textId) maxTextId = +curData.textId;
    }
    textId = maxTextId + 1;
  });
  axios.get("/api/board/getReply").then((data) => {
    for (let i = 0; i < data.data.length; ++i) {
      const curDiv = document.getElementsByClassName(
        `${data.data[i].textId}`
      )[0];
      const curData = data.data[i];
      makeInitReply(curDiv, curData.id, curData.value);
    }
  });
}
initBoard();

function makeInitReply(_curDiv, id, value) {
  const curDiv = _curDiv;
  const replyDiv = document.createElement("div");
  replyDiv.style = `
          background-color:gray;
          color:black;
          display:flex;
          justify-content:space-between;
        `;
  replyDiv.innerHTML = `${id} : ${value}`;
  curDiv.after(replyDiv);
}

function makeInitDiv(id, textId, value) {
  const curDiv = document.createElement("div");
  curDiv.classList.add(`${textId}`);
  curDiv.style = `
        background-color:black;
        color:white;
        display:flex;
        justify-content : space-between;
      `;
  const textDiv = document.createElement("div");
  textDiv.style = `
        background-color:black;
        color:white;
        width : 80%;
      `;
  textDiv.innerHTML = `${id}:${value}`;
  curDiv.appendChild(textDiv);
  document.body.appendChild(curDiv);
  const btnBox = document.createElement("div");
  btnBox.style = `
      width : 20%;
      display:flex;
      `;
  curDiv.appendChild(btnBox);

  // 댓글 버튼
  const replyBtn = document.createElement("button");
  replyBtn.style = `
        width : 33%;
      `;
  replyBtn.innerHTML = "댓글입력";
  replyBtn.onclick = function (e) {
    if (curId == "") return;
    const replyDiv = document.createElement("div");
    replyDiv.style = `
          background-color:gray;
          color:black;
          display:flex;
          justify-content:space-between;
        `;
    replyDiv.innerHTML = `${curId} : ${textArea.value}`;
    axios.get("api/board/reply", {
      params: {
        textId: curDiv.classList[0],
        id: curId,
        value: textArea.value,
      },
    });
    curDiv.after(replyDiv);
  };
  btnBox.appendChild(replyBtn);

  // 삭제 버튼
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add(`${id}`);
  deleteBtn.style = `
        width : 33%;
      `;
  deleteBtn.innerHTML = "지우기";
  deleteBtn.onclick = function (e) {
    if (curId == textDiv.innerHTML.split(":")[0]) {
      while (curDiv.nextElementSibling?.style?.backgroundColor == "gray") {
        curDiv.nextElementSibling.remove();
      }
      axios
        .get("/api/board/delete", {
          params: {
            textId: `${curDiv.classList[0]}`,
          },
        })
        .then((data) => {
          // console.log(data.data);
        });
      curDiv.remove();
    }
  };
  btnBox.appendChild(deleteBtn);

  // 수정 버튼
  const correctionBtn = document.createElement("button");
  correctionBtn.style = `
        width: 33%;
      `;
  correctionBtn.innerHTML = "수정하기";
  correctionBtn.onclick = function (e) {
    if (curId == textDiv.innerHTML.split(":")[0] && textArea.value) {
      textDiv.innerText = `${curId}:${textArea.value}`;
      axios.get("/api/board/correction", {
        params: {
          textId: curDiv.classList[0],
          id: curId,
          value: textArea.value,
        },
      });
    }
  };
  replyBtn.after(correctionBtn);
  curDiv.appendChild(btnBox);
}

function makeDiv(id, value, _textId) {
  axios
    .get("/api/board/upload", {
      params: {
        id: id,
        value: value,
        textId: _textId,
      },
    })
    .then((data) => {
      const curDiv = document.createElement("div");
      curDiv.classList.add(`${textId++}`);
      curDiv.style = `
        background-color:black;
        color:white;
        display:flex;
        justify-content : space-between;
      `;
      const textDiv = document.createElement("div");
      textDiv.style = `
        background-color:black;
        color:white;
        width : 80%;
      `;
      textDiv.innerHTML = `${id}:${value}`;
      curDiv.appendChild(textDiv);
      document.body.appendChild(curDiv);
      const btnBox = document.createElement("div");
      btnBox.style = `
      width : 20%;
      display:flex;
      `;
      curDiv.appendChild(btnBox);

      // 댓글 버튼
      const replyBtn = document.createElement("button");
      replyBtn.style = `
        width : 33%;
      `;
      replyBtn.innerHTML = "댓글입력";
      replyBtn.onclick = function (e) {
        if (curId == "") return;
        const replyDiv = document.createElement("div");
        replyDiv.style = `
          background-color:gray;
          color:black;
          display:flex;
          justify-content:space-between;
        `;
        replyDiv.innerHTML = `${curId} : ${textArea.value}`;
        axios.get("api/board/reply", {
          params: {
            textId: curDiv.classList[0],
            id: curId,
            value: textArea.value,
          },
        });
        curDiv.after(replyDiv);
      };
      btnBox.appendChild(replyBtn);

      // 삭제 버튼
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add(`${id}`);
      deleteBtn.style = `
        width : 33%;
      `;
      deleteBtn.innerHTML = "지우기";
      deleteBtn.onclick = function (e) {
        if (curId == textDiv.innerHTML.split(":")[0]) {
          while (curDiv.nextElementSibling?.style?.backgroundColor == "gray") {
            curDiv.nextElementSibling.remove();
          }
          axios
            .get("/api/board/delete", {
              params: {
                textId: `${curDiv.classList[0]}`,
              },
            })
            .then((data) => {
              // console.log(data.data);
            });
          curDiv.remove();
        }
      };
      btnBox.appendChild(deleteBtn);

      // 수정 버튼
      const correctionBtn = document.createElement("button");
      correctionBtn.style = `
        width: 33%;
      `;
      correctionBtn.innerHTML = "수정하기";
      correctionBtn.onclick = function (e) {
        if (curId == textDiv.innerHTML.split(":")[0] && textArea.value) {
          textDiv.innerText = `${curId}:${textArea.value}`;
          axios.get("/api/board/correction", {
            params: {
              textId: curDiv.classList[0],
              id: curId,
              value: textArea.value,
            },
          });
        }
      };
      replyBtn.after(correctionBtn);
      curDiv.appendChild(btnBox);
    });
}

uploadBtn.onclick = function (e) {
  makeDiv(curId, textArea.value, textId);
};
