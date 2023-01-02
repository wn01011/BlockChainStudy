const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const app = express();
const routes = require("./routes/index.js");
const cors = require("cors");

dotenv.config();
app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});
app.use(cors({ origin: "http://localhost:3000" }));
// origin은 원본의 주소이며 해당 원본 주소에 대해서만 요청을 응답하겠다. : CORS해결
// - 원본 주소에는 http와 같은 프로토콜, localhost와 같은 Domain 주소, :3000과 같은 포트까지 포함한다.
// - /api와 같은 라우터는 포함하지 않는다.
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

app.use("/api", routes);

app.listen(app.get("port"), () => {
  console.log("http://localhost:" + app.get("port"));
});
