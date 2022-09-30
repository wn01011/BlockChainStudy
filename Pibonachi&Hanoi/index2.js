/**하노이의 탑 숫자 */
function Hanoi(_num) {
  if (_num === 1) return 1;
  return 2 * Hanoi(_num - 1) + 1;
}
/**하노이의 탑 순서도 */
function Log(_num, _from, _other, _to) {
  if (_num === 0) return;
  Log(_num - 1, _from, _to, _other);
  ++count;
  console.log(`${_num} : ${count}번째 ${_from} -> ${_to}`);
  Log(_num - 1, _other, _from, _to);
}
/**하노이탑 실행 함수 */
function Hanoi2() {
  // let _ring = prompt(`ring의 갯수를 입력하세요`);
  let _ring = 3;
  console.log(`걸린 총 횟수 : ${Hanoi(_ring)}`);
  Log(_ring, from, other, to);
}

function TrueHanoi(n, from = 1, other = 2, to = 3) {
  console.log(from, other, to);
}
