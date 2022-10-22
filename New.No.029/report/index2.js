const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.set("port", process.env.PORT || 8080);
app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
// 모든 요청에 대해 json, urlencoded, cookieParser을 실행하겠다.
//  따라서 app.use("/", express.json())과 같은 경우도 가능하다.
// 또는 중복으로 콜백함수를 선언하는 것 또한 가능하다.
// app.use("/", (req, res, next) => {console.log("asdfasdf"); next();}
//            , (req, res, next) => {console.log("zxcb"); next();})

app.use(
  session({
    resave: false,
    saveUnitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie",
  })
);

app.listen(app.get("port"), () => {
  console.log("서버를 열었습니다.");
});
