const str = "abcDeFghIJklMnOp";
console.log(str.indexOf("cD"));
console.log(str.slice(1, 3));
console.log(str.split(/D/));
console.log(str.split(""));
// 매개변수로 전달된 정규표현식(어렵다?)를 기준으로 짜른다.
// regex : regular expression
console.log(str.replace(/D/, "a"));
console.log(str.toLowerCase());
console.log(str.toUpperCase());
// 1번째 매개변수로 정규표현식을 전달하고, 두번째 매개변수로 바꾸고 싶은 문자열을 전달한다.
