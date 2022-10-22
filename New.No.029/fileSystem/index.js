// console.log(__filename);
// 파일 이름을 포함한 경로
// console.log(__dirname);
// 현재 파일 경로
// 위 변수들은 ES6에 없다.

// import fs from "fs";
// ES6 문법이다.
const fs = require("fs");
// 이 녀석이랑 똑같은 거다.
const path = require("path");
// console.log(path.dirname(__filename));
// // 파일의 경로
// console.log(path.extname(__filename));
// // 파일의 확장자
// console.log(path.basename(__filename));
// // 파일의 이름
// console.log("hi", path.join(__dirname, "..", "..", "New.No.010"));
// // 경로를 합친다. // path는 경로에 대해 관리하는 모듈이다.

// fs.writeFile("./test.txt", "안녕하세요", (data) => {
//   console.log(data);
// });
// // 파일을 생성한다.
// // fs.readFile("./test.txt", (err, data) => {
// //   if (err) console.log(err);
// //   console.log(data);
// //   console.timeLog(data.toString());
// // });

// const fsProm = fs.promises;

// fsProm
//   .writeFile("./test1.txt", "프라미스~")
//   .then(() => {
//     return fsProm.readFile("./test1.txt");
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(data.toString());
//   })
//   .catch((err) => {
//     console.err(err);
//   });

// fs.writeFileSync("./test2.txt", "싱크 확인");

let data = fs.readFileSync("./test.txt");
console.log("data : " + data.toString());
let data2 = fs.readFileSync("./test1.txt");
console.log("data : " + data2.toString());
let data3 = fs.readFileSync("./test2.txt");
console.log("data : " + data3.toString());

fs.createReadStream();
