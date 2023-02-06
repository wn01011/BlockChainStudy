import cryptoJs from "crypto-js";
const privateKey: string = cryptoJs.lib.WordArray.random(32).toString();

// random의 매개변수로 몇 byte를 사용할 것인지 전달한다.
// 64자가 나와야하기때문에 32byte를 사용한다.
// console.log(privateKey, privateKey.length);
// 0~F => F를 2진수로 바꾸면? 1111 -> 4bit -> 총 64자 -> 64 * 4 -> 256bit
// 1 byte = 8 bits => 256 bits = 32 bytes

// 쉽게 느낄 수 있는 node.js 기본 모듈 암호화
// import crypto from "crypto";
// const moduleKey = crypto.randomBytes(32).toString("hex");
// console.log(moduleKey, moduleKey.length);

// Double-and-Add 알고리즘을 사용하는 이유
// for(let i = 0; i < Math.pow(2, 256); ++i) {}

// 나타내기 힘든 수 표기
// 1.13223513234234524e+77 => 1.13223513234234524 * (10^77)
// 1.13223513234234524e-77 => 1.13223513234234524 / (10^77)
// console.log(1 / Math.pow(2, 256));
