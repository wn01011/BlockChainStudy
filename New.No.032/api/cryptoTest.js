const crypto = require("crypto-js");

console.log(crypto.SHA256("myData").toString());

console.log(crypto.MD5("myData").toString());

console.log(crypto.SHA1("myData").toString());

console.log(crypto.SHA512("myData").toString());

const tempAES = crypto.AES.encrypt("myData", "myKey1");
// 암호화
console.log("hi : " + tempAES.toString());

console.log(crypto.AES.decrypt(tempAES, "myKey1").toString(crypto.enc.Utf8));
// 대칭 키들
// 복호화

// 알아서 찾아봐라
// 비대칭 키
