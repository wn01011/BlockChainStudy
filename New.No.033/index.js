const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");

const userList = [];

fs.readFile("./data/user.json", "utf-8", function (err, data) {
  if (err) {
    console.error(err.message);
  } else {
    if (data) {
      JSON.parse(data).forEach((item) => {
        userList.push(item);
      });
    }
  }
});

const userApi = require("./routes/user.js");
const boardApi = require("./routes/board.js");

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

app.use("/api/user", userApi);
app.use("/api/board", boardApi);

app.set("port", process.env.PORT || 8080);
app.listen(app.get("port"), () => {
  console.log("http://localhost:" + app.get("port"));
});
