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
// 로그인 버튼
signInBtn.onclick = function (e) {
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
            console.log("쿠키 있어요");
          } else {
            if (curId != "") logout();
            console.log("쿠키 없어요");
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
        console.log(data, curId);
      }
    });
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

uploadBtn.onclick = function (e) {
  axios
    .get("/api/board/upload", {
      params: {
        id: curId,
        value: textArea.value,
      },
    })
    .then((data) => {
      const curDiv = document.createElement("div");
      curDiv.style = `
        background-color:black;
        color:white;
        display:flex;
        justify-content:space-between;
      `;
      curDiv.innerHTML = `${curId}:${data.data.value}`;
      document.body.appendChild(curDiv);
      const curBtn = document.createElement("button");
      curBtn.classList.add(`${curId}`);
      curBtn.style = `
        width : 10%;
      `;
      curBtn.innerHTML = "지우기";
      curBtn.onclick = function (e) {
        if (curId == curDiv.innerHTML.split(":")[0]) curDiv.remove(curBtn);
      };
      curDiv.appendChild(curBtn);
    });
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
