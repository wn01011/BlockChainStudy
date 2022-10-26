// jwt : Json Web Token
// forms['dataName'] == forms.dataName
// jwt : 웹에서 사용하는 JSON 형식의 토큰(짧은 데이터)
const crypto = require("crypto-js");

const tempHeader = JSON.stringify({ name: "block7", alg: "HS256" });
// HS, 256, 512

const base64Header = Buffer.from(tempHeader).toString("base64url");
// JWT는 base64url 형식의 포멧을 사용한다.
// base64 : ASCII 코드를 기준으로 데이터를 저장하는 포멧이다.
const JWTHeader = base64Header.replaceAll("=", "");
// 위는 header를 완성했다.

const tempPayload = JSON.stringify({ maker: "tester", expiresIn: "10m" });
const base64Payload = Buffer.from(tempPayload).toString("base64url");
const JWTPayload = base64Payload.replaceAll("=", "");
// 위는 payload를 완성했다.

const tempSignature = crypto
  .HmacSHA256(JWTHeader + "." + JWTPayload, "key")
  .toString(crypto.enc.Base64url)
  .replaceAll("=", "");

const jwt = `${JWTHeader}.${JWTPayload}.${tempSignature}`;
console.log("jwt : " + jwt);
// JSON Web Token은 "header.payload.signature"로 이루어져있다.
// header : jwt의 검증을 위한 데이터가 저장된다.
// payload : jwt가 갖고 있는 데이터이다. << 우리가 저장하고 싶은 데이터
// signature : 암호화된 서명이다. << 검증에 사용한다.
