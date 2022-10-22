const Heap = function (type = "min") {
  this.item = [];
  this.type = type;
  if (this.type == "min") this.sign = 1;
  else this.sign = -1;
};

Heap.prototype.swap = function (idx1, idx2) {
  const temp = this.item[idx1];
  this.item[idx1] = this.item[idx2];
  this.item[idx2] = temp;
};

Heap.prototype.getParentIndex = (idx) => {
  return parseInt((idx - 1) / 2);
};

Heap.prototype.getLeftChildIndex = (idx) => {
  return idx * 2 + 1;
};

Heap.prototype.getRightChildIndex = (idx) => {
  return idx * 2 + 2;
};

//만들어보자
Heap.prototype.insert = function (item) {
  this.item.push(item);
  let nowIdx = this.item.length - 1;
  while (true) {
    if (nowIdx < 1) return this.item.length;
    const parentIdx = this.getParentIndex(nowIdx);
    if (this.item[parentIdx] * this.sign > this.item[nowIdx] * this.sign) {
      this.swap(parentIdx, nowIdx);
      nowIdx = parentIdx;
    } else break;
  }
  return this.item.length;
};

Heap.prototype.remove = function () {
  const temp = this.item.shift();
  this.item.unshift(this.item.pop());
  let nowIdx = 0;

  while (true) {
    const leftChild = this.getLeftChildIndex(nowIdx);
    const rightChild = this.getRightChildIndex(nowIdx);

    if (
      this.item[nowIdx] > this.item[leftChild] ||
      this.item[nowIdx] > this.item[rightChild]
    ) {
      if (
        this.item[leftChild] * this.sign >
        this.item[rightChild] * this.sign
      ) {
        this.swap(nowIdx, rightChild);
      } else {
        this.swap(nowIdx, leftChild);
      }
      nowIdx = leftChild;
    } else break;
  }
  return temp;
};

const myHeap = new Heap("max");
myHeap.insert(10);
myHeap.insert(40);
myHeap.insert(20);
myHeap.insert(30);
myHeap.insert(10);
myHeap.insert(90);
myHeap.insert(60);
myHeap.insert(50);
myHeap.insert(40);
console.log(myHeap);
// console.log(myHeap.remove());
// console.log(myHeap);
