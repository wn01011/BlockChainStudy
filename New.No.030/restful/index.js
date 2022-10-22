const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});

app.use("/", express.static("./public"));
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
    name: "session-cookie",
  })
);

app.use((req, res, next) => {
  console.log(req.body);
  next();
  // next() 다음걸로 넘어가라
});
app.post("/api/user", (req, res, next) => {
  console.log("name : ", req.body.name);
  //   cookie를 추가한다.
  next();
});

app.post("/api/user", (req, res) => {
  res.cookie("name", req.body.name);
  //   cookie를 추가한다.
  res.end("정보를 추가했다.");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});
app.listen(8080, () => {
  console.log("문 열렸다.");
});
