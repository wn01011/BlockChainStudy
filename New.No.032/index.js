// 암호화 << 이론만 간단하게 용어
// 입력한 데이터를 다른 사람이 알 수 없도록 변환하는 과정
// 복호화 : 암호화된 데이터를 원상 복구한다.
// 사용자가 입력한 데이터를 알 수 있어야할까? => 아니다.
// 알면 안되는 것들도 있다. => 단방향 / 양방향 암호화
// 단방향은 암호화만 가능하다. => 복호화가 불가능 하다.
// 양방향은 복호화가 가능하다.

const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");

// require("./api/cryptoTest.js");
// require("./api/jwt.js");

const boardList = [];
fs.readFile("./test/test.json", "utf-8", function (err, data) {
  if (err) {
    console.error(err.message);
  } else {
    JSON.parse(data).forEach((item) => {
      boardList.push(item);
    });
  }
});
const userInfo = [];
fs.readFile("./test/user.json", "utf-8", function (err, data) {
  if (err) console.error(err.message);
  else
    JSON.parse(data).forEach((item) => {
      userInfo.push(item);
    });
});

// const routes = require("./routes/index.js");

const userApi = require("./routes/user.js");

const app = express();
dotenv.config();

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});
app.use("/", express.static(path.join(__dirname, "web")));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session",
  })
);

// app.use("/api", routes);
app.post("/api/board/add", (req, res) => {
  boardList.unshift(req.body);
  fs.writeFileSync("test/test.json", `${JSON.stringify(boardList)}`);
  res.send({ status: 200, data: "정상 입력 완료" });
});

app.post("/api/board/delete", (req, res) => {
  boardList.splice(+req.body.count * 5 + +req.body.num, 1);
  fs.writeFileSync("test/test.json", `${JSON.stringify(boardList)}`);
  res.send({ status: 200, data: "딜리트 테스트" });
});

app.post("/api/board/update", (req, res) => {
  boardList[+req.body.count * 5 + +req.body.num].text = req.body.text;
  boardList[+req.body.count * 5 + +req.body.num].uptime = req.body.time;
  fs.writeFileSync("test/test.json", `${JSON.stringify(boardList)}`);
  res.send({ status: 200, data: "업데이트 테스트" });
});

app.use("/api/user", userApi);

app.get("/api/board", (req, res) => {
  res.send({
    status: 200,
    list: boardList.slice(+req.query.count * 5, 5 * (+req.query.count + 1)),
    maxCount:
      parseInt(
        (boardList.length ? boardList.length - 1 : boardList.length) / 5
      ) + 1,
  });
});

app.set("port", process.env.PORT || 8080);

app.listen(8080, () => {
  console.log("http://localhost:" + app.get("port"));
});
