const loginBtn = document.getElementById("loginBtn");
const callbackBtn = document.getElementById("callbackBtn");
const loginRes = document.getElementById("loginRes");
loginBtn.onclick = () => {
  axios.get("/naverlogin").then((data) => {
    loginRes.innerHTML = data.data;
  });
};
callbackBtn.onclick = () => {
  let params = new URL(document.location.toString()).searchParams;
  let curCode = params.get("code");
  let curState = params.get("state");
  axios
    .get("/callback", { params: { code: curCode, state: curState } })
    .then((data) => {
      console.log(data);
    });
};
