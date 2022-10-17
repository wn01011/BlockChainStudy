console.log("hello, World");

// npm => node package manager
// Node.js 에서 사용하는 라이버러리 관리자
// yarn(React)도 사용가능

// npm install 라이브러리 명 / npm i 라이브러리 명
// 라이브러리 설치
// package.json : Node.js를 사용해 구현된 프로그램(모듈, 라이브러리, ...)에 대한 정보를 모아둔 파일

// dependencies 는 의존성을 뜻하며 현재 프로그램이 실행되기 위해서 필요한 라이브러리들이다.

const express = require("express");
// require는 외부 라이브러리를 가져오는 함수이다.
// 매개변수로 라이브러리 명을 전달한다.

const app = express();
const PORT = 8080;
app.get("/", (req, res) => {
  res.send("hi");
  //   req : 요청 사항, 요청의 데이터
  //   res : 응답 사항, 응답의 데이터
});

app.listen(PORT, () => {
  console.log("서버 열음");
});
