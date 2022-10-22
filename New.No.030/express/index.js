const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");

dotenv.config();

const app = express();
const PORT = 8080;
app.set("port", process.env.PORT || PORT);

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});
app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
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

app.use("/public", (req, res) => {
  console.log(req.query);
  res.end(`<div>${req.query.lunch}</div>`);
  //   get 메서드 형식을 사용할 때는 query, 즉 쿼리스트링을 사용한다.
  //   post 메서드 형식을 사용할 때는 body로 데이터에 접근한다.
});

app.use("/", (err, req, res, next) => {
  console.log(err);
  res.status(500).send(err.message);
});

app.listen(app.get("port"), () => {
  console.log(`포트 번호 ${app.get("port")}로 접속`);
});
