const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const morgan = require("morgan");
// morgan은 요청과 응답에 대한 정보를 콘솔에 기록한다.

dotenv.config();

const app = express();
app.set("port", process.env.PORT || 8080);
app.get("/", express.static(__dirname + "/public"));

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});

app.listen(app.get("port"), () => {
  console.log("문열었다.");
});
