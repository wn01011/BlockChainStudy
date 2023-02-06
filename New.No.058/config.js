// npm init -y

// 설치 명령어
// *************************************
// npm i merkle crypto-js hex-to-binary
// *************************************

// 라이브러리들을 가져옴
const merkle = require("merkle");
const SHA256 = require("crypto-js").SHA256;
// 암호화
const hexToBinary = require("hex-to-binary");
// hex 방식(0 ~ F)으로 지정된 데이터를 바이너리 방식의 (0~1) 데이터로 변환.

// 난이도 조절용 수치를 미리 정해놓자 블록 생성 시간을 조절하기 위해서
const DIFFICULTY_ADJUSTMENT_INTERVAL = 10;
// 블록 하나당 걸리는 시간.
const BLOCK_GENERATION_INTERVAL = 10;
// 시간 단위
const TIME_UNIT = 60 * 1000;

module.exports = {
  lib: {
    merkle,
    SHA256,
    hexToBinary,
  },
  constant: {
    DIFFICULTY_ADJUSTMENT_INTERVAL,
    BLOCK_GENERATION_INTERVAL,
    TIME_UNIT,
  },
};
