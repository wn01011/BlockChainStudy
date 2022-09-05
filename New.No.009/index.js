function Factorial(_num) {
  if (_num < 1) return 1;
  else if (_num == 1) return 1;
  return _num * Factorial(_num - 1);
}

function Pibonachi(_num) {
  if (_num == 0) {
    return 1;
  } else if (_num == 1) {
    return 1;
  } else if (_num == 2) {
    return 2;
  }
  return Pibonachi(_num - 2) + Pibonachi(_num - 1);
}
console.log(Pibonachi(6));

function Hanoi(_num) {
  if (_num === 1) return 1;
  return 2 * Hanoi(_num - 1) + 1;
}
console.log(Hanoi(5));
