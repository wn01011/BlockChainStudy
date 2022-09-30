function solution(dartResult) {
  var answer = 0;
  const len = dartResult.length;
  let num = [];
  let symbol = [];
  let specialIdx = [];
  let curNum = "";
  for (let i = 0; i < dartResult.length; i++) {
    const curChar = dartResult[i];
    if (curChar == "S" || curChar == "D" || curChar == "T") {
      symbol.push(curChar);
      num.push(curNum);
      curNum = "";
    } else if (curChar == "*") {
      specialIdx.push([2, num.length]);
      continue;
    } else if (curChar == "#") {
      specialIdx.push([-1, num.length]);
      continue;
    } else {
      curNum += curChar;
    }
  }
  let answerAry = [];
  for (let i = 0; i < num.length; ++i) {
    let myMult = 1;
    if (symbol[i] == "D") myMult = 2;
    else if (symbol[i] == "T") myMult = 3;

    answerAry.push(Math.pow(parseInt(num[i]), myMult));
  }
  for (let i = 0; i < specialIdx.length; ++i) {
    if (specialIdx[i][0] == 2) {
      if (specialIdx[i][1] == 1) answerAry[0] *= 2;
      else if (specialIdx[i][1] >= 2) {
        answerAry[specialIdx[i][1] - 1] *= 2;
        answerAry[specialIdx[i][1] - 2] *= 2;
      }
    } else if (specialIdx[i][0] == -1) {
      answerAry[specialIdx[i][1] - 1] *= -1;
    }
  }

  for (let i = 0; i < answerAry.length; ++i) {
    answer += answerAry[i];
  }
  return answer;
}
console.log(solution("1D2S3T*"));
