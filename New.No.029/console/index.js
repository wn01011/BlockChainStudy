// ES6이전 << 자바스크립트의 버전
// Class 가 대표적인 ES6, import export
console.log("로그 남기기");
// Javascript가 갖고 있는 객체 => 내장 객체
console.log(global);
// global(브라우저의 window와 같다.) => 전역 객체, js 파일에서 변수를 초기화 하면 그 js 파일 내에서만 사용이 가능한데
// 전역으로 쓰고 싶으면 global의 프로퍼티로 추가해라.
// Node.js에 DOM 이 있을까?
// HTML 파일의 구조를 저장한 객체 => DOM, document
// Node.js HTML 구조가 있나? => 없음 => document가 없다.
// window => 브라우저의 정보를 갖고있는 객체
// Node.js 가 브라우저를 쓴다 ? => 안쓴다.
// window 객체가 없다. => global이 대신한다.

console.warn("경고");
console.dir({ data: "구조출력" });
console.time("시간 측정");
// 시간 확인에 대한 시작점
console.timeLog("시간 측정");
// 시간 확인에 대한 중간점
console.timeEnd("시간 측정");
//  시간 확인 완료

console.assert(true, "참");
console.assert(false, "거짓");
// 거짓일 때 출력한다.

console.count("몇번?");
console.count("몇번?");
console.countReset("몇번?");
console.count("몇번?");
console.table({ name: "표", data: "출력" });
console.error("에러출력");

global.a = 12;
