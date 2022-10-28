const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const path = require("path");

const db = require("./models/index.js");

const app = express();
dotenv.config();

const kakaoStrategy = {
  clientId: process.env.KAKAO_ID,
  callbackURL: `/oauth/kakao/callback`,
};

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});
app.use("/", express.static(path.join(__dirname, "web")));
app.use(kakaoStrategy.callbackURL, express.static(path.join(__dirname, "web")));
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

app.set("port", process.env.PORT || 8080);
let curcallback = "";
app.get(kakaoStrategy.callbackURL, (req, res) => {
  curcallback = req.query;
  console.log(curcallback);
  res.end();
});
app.get(kakaoStrategy.callbackURL + "/return", (req, res) => {
  console.log(req.query);
  res.send(curcallback);
});
app.post(kakaoStrategy.callbackURL, (req, res) => {
  console.log(req.body);
  res.end();
});
app.post("https://kauth.kakao.com/oauth/token", (req, res) => {
  console.log(req.body);
  res.send(req.body.data);
});

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log(`db connected`);
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(app.get("port"), () => {
  console.log("http://localhost:" + app.get("port"));
});
