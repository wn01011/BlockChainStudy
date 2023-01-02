const { Router } = require("express");
const crypto = require("crypto-js");

const router = Router();
const userArr = [];
const user = {};
router.post("/regist", (req, res) => {
  console.log(req.body);
  if (!userArr.find((item) => item.userId == req.body.userId))
    userArr.push(req.body);
  res.end();
});

router.post("/login", (req, res) => {
  console.log(req.body);
  const tempUser = userArr.find((item) => (item.userId = req.body.userId));
  if (
    tempUser &&
    tempUser.userPw == req.body.userPw &&
    !user[tempUser.userId]
  ) {
    user[tempUser.userId] = crypto
      .SHA256(tempUser.userId)
      .toString(crypto.enc.Base64);
    res.cookie("user", user[tempUser.userId], {
      expires: new Date(Date.now() + 10 * 60 * 1000),
    });
    setTimeout(() => {
      user[tempUser.userId] = undefined;
    }, 10 * 60 * 1000);
    res.send({ ...tempUser, userPw: undefined });
  } else res.send({ text: "정보가 틀렸습니다." });
});

router.get("/check", (req, res) => {
  console.log({ user, userArr });
  res.send({ user, userArr });
});

router.post("/logout", (req, res) => {
  console.log(req.body);
  res.clearCookie("user");
  user[req.body.userId] = undefined;
  res.end();
});

module.exports = router;
