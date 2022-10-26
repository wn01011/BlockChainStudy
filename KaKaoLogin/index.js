const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();

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

var client_id = "SCAoVub8T9U1YEtC89qD";
var client_secret = "QsznMfpfUz";
var state = "RANDOM_STATE";
var redirectURI = encodeURI("http://localhost:8080");
var api_url = "";
app.get("/naverlogin", function (req, res) {
  api_url =
    "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=" +
    client_id +
    "&redirect_uri=" +
    redirectURI +
    "&state=" +
    state;
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  res.end(
    "<a href='" +
      api_url +
      "'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>"
  );
});
app.get("/callback", function (req, res) {
  code = req.query.code;
  state = req.query.state;
  api_url =
    "https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=" +
    client_id +
    "&client_secret=" +
    client_secret +
    "&redirect_uri=" +
    redirectURI +
    "&code=" +
    code +
    "&state=" +
    state;
  var request = require("request");
  var options = {
    url: api_url,
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };
  request.get(options, async function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
      const token = JSON.parse(body).access_token;
      console.log(token);

      const info_options = {
        url: `https://openapi.naver.com/v1/nid/me`,
        headers: { Authorization: `Bearer ${token}` },
      };
      const info_result = await request.get(info_options);
      console.log(info_result);
      //   const info_result_json = JSON.parse(info_result).response;
      //   console.log(info_result_json);
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});

app.set("port", process.env.PORT || 8080);
app.listen(app.get("port"), () => {
  console.log("http://localhost : " + app.get("port"));
});
