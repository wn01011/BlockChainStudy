const { Router } = require("express");
const fs = require("fs");
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");

////////////////////////////////// jwt 생성

function createJwt(name, key) {
  const expireTime = "10";
  const tempJwt = jwt.sign({ name: `${name}` }, key, {
    algorithm: "HS256",
    expiresIn: `${expireTime}s`,
    issuer: "kjk",
  });
  const tempData = jwt.verify(tempJwt, key);
  console.log(tempJwt, tempData);
  return [tempJwt, tempData];
}

//////////////////////////////////

const users = [
  {
    id: "a",
    pw: "ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb",
  },
];

fs.readFile("./data/user.json", "utf-8", (err, data) => {
  if (err) console.error(err);
  else {
    if (data) {
      data = JSON.parse(data);
      data.forEach((item) => {
        users.push(item);
      });
    }
  }
});

const router = Router();
// "/api/user"
router
  .route("/")
  //   .get((req, res) => {
  //     let curAry = createJwt("myKey");
  //     console.log(curAry[0], curAry[1]);
  //     res.cookie("cookie_name", `{id:${req.query.id},pw:${req.query.pw}}`, {
  //       expires: new Date(Date.now() + 10 * 60 * 1000),
  //     });
  //     res.send(req.query);
  //   })
  .post((req, res) => {
    users.push({ id: req.body.id, password: req.body.password });
    fs.writeFileSync("./data/user.json", `${JSON.stringify([...users])}`);
    res.end();
  });

function checkUserLogin(id, pw) {
  for (let i = 0; i < users.length; ++i) {
    let result = users[i].id == id ? (users[i].pw == pw ? true : false) : false;
    if (result) return result;
  }
  return false;
}

router.route("/login").get((req, res) => {
  const curId = req.query.id;
  let curPw = req.query.pw;
  curPw = crypto.SHA256(`${curPw}`).toString();
  if (checkUserLogin(curId, curPw)) {
    const curJwt = createJwt(curId, curId);
    res.cookie(
      curJwt[1].name,
      `{id:${req.query.id},pw:${req.query.pw},jwt:${curJwt[0]}}`,
      {
        expires: new Date(Date.now() + (curJwt[1].exp - curJwt[1].iat) * 1000),
      }
    );
    res.send({ id: curId, pw: curPw });
  } else {
    res.send({ error: 444, data: "잘못된 정보입니다" });
  }
});

router.route("/logout").get((req, res) => {
  res.send();
});

function checkUserIdPw(id, pw) {
  if (!id || !pw) {
    return false;
  }
  for (let i = 0; i < users.length; ++i) {
    let result = users[i].id == id ? true : false;
    if (result) return false;
  }
  return true;
}

router.route("/signup").get((req, res) => {
  if (checkUserIdPw(req.query.id, req.query.pw)) {
    const curPw = crypto.SHA256(`${req.query.pw}`).toString();
    const curData = { id: req.query.id, pw: curPw };
    users.push(curData);
    res.send({ data: users });
  } else {
    res.send({ data: "못만들어 임마" });
  }
});

module.exports = router;
