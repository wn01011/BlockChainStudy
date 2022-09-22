// 클래스를 사용해서 배열 생성
// - 순차적 데이터, 즉 get(index)를 사용해 배열의 []와 같이 가져올 수 있다.
// - push(), pop() 을 이용해서 데이터를 넣을 수 있다.
// - indexOf()를 사용해서 데이터의 위치를 찾는다.
// 내일 풀이 해줄거고, 내일은 과제가 없다.
// 큐(queue) push, shift
// 큐는 보통 사용자 입력에 대해 관리한다.
// 힙(heap)
class Node {
  constructor(data) {
    this.data = data;
    this.head = undefined;
  }
  indexof(value) {
    let count = 0;
    let curHead = this.head;
    let curData = this.data;
    while (curData) {
      if (value == curData) {
        return count;
      }
      count++;
      curData = curHead.data;
      curHead = curHead.head;
    }
  }
  getByIndex(index) {
    let count = 0;
    let curHead = this.head;
    let curData = this.data;
    while (count <= index) {
      if (count == index) {
        return curData;
      }
      if (!curHead) {
        return "잘못된 인덱스여";
      }
      count++;
      curData = curHead.data;
      curHead = curHead.head;
    }
  }
  log() {
    let str = "";
    let curHead;
    if (this.head) curHead = this.head;
    if (this.data) str = String(this.data);
    while (this.head) {
      str += ` ${curHead.data}`;
      if (!curHead.head) break;
      else curHead = curHead.head;
    }
    return console.log(str);
  }
}

class StackNode extends Node {
  constructor(data) {
    super(data);
  }

  push(data) {
    if (!this.data) this.data = data;
    else if (this.head) {
      this.head.push(data);
    } else {
      this.head = new StackNode(data);
    }
  }

  pop() {
    if (this?.head?.head) return this.head.pop();
    else if (!this?.head) {
      const temp = this.data;
      this.data = undefined;
      return temp;
    } else {
      const temp = this.head.data;
      delete this.head;
      this.head = undefined;
      return temp;
    }
  }
}

const myStack = new StackNode();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.log();
console.log(myStack.indexof(3));

class QueueNode extends Node {
  constructor(data) {
    super(data);
    this.head = undefined;
  }

  push(data) {
    if (!this.data) this.data = data;
    else if (this.head) {
      this.head.push(data);
    } else {
      this.head = new QueueNode(data);
    }
  }

  shift() {
    if (this?.head?.head) {
      this.data = this.head.data;
      return this.head.shift();
    } else if (this?.head && !this?.head?.head) {
      this.data = this.head.data;
      delete this.head;
      this.head = undefined;
    } else if (!this?.head && this?.data) {
      this.data = undefined;
    }
  }
}

const myQueue = new QueueNode();
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);
myQueue.push(4);
console.log(myQueue.getByIndex(3));
console.log(myQueue.indexof(4));
myQueue.push(6);
myQueue.push(7);
myQueue.push(8);
myQueue.shift();
myQueue.shift();
myQueue.shift();
myQueue.shift();
myQueue.log();

class TreeNode {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.count = 0;
    this.root = null;
  }
  add(data) {
    let newNode = new TreeNode(data);
    if (this.count == 0) this.root = newNode;
    else insertNode(newNode, this.root);
    this.count++;
    return this.count;
  }

  search(data) {
    return searchNode(data, this.root);
  }
}

function insertNode(node, root) {
  if (!root) return node;
  if (node.data < root.data) {
    root.left = insertNode(node, root.left);
    return root;
  } else if (node.data >= root.data) {
    root.right = insertNode(node, root.right);
    return root;
  }
}

function searchNode(data, node) {
  if (data < node.data) {
    return searchNode(data, node.left);
  } else if (data > node.data) {
    return searchNode(data, node.right);
  } else return node;
}

let myTree = new BinaryTree();
myTree.add(6);
myTree.add(4);
myTree.add(9);
myTree.add(2);
myTree.add(10);
myTree.add(11);
myTree.add(12);
myTree.add(1);
console.log(myTree);

const myAry = MakeAry(11);

class Stack {
  constructor(length) {
    this.ary = {};
    this.length = length;
    for (let i = 0; i < length; ++i) {
      this.ary[`${i}`] = "";
    }
    this.indicator = -1;
  }

  get(index) {
    if (index < 0 || index >= this.length)
      return console.log("잘못된 인덱스입니다.");
    else if (this.ary[index] == "") return console.log("빈 장소입니다.");
    return this.ary[index];
  }
  indexOf(value) {
    for (let i = 0; i < this.length; ++i) {
      if (this.ary[i] == value) {
        return i;
      }
    }
    return console.log("그런 값은 없습니다.");
  }
  push(num) {
    if (num == undefined) return console.log("값을 입력해주세요");
    if (this.indicator++ > this.length - 2) {
      this.indicator--;
      console.log("StackOverFlow");
      return;
    }
    this.ary[this.indicator] = num;
  }
  pop() {
    if (this.indicator-- < 0) {
      this.indicator++;
      console.log("너무 많이 뺏어");
      return;
    }
    let curItem = this.ary[this.indicator + 1];
    return curItem;
  }
  print() {
    if (this.indicator <= -1) return console.log("없어!");
    let tempStr = "";
    for (let i = 0; i <= this.indicator; ++i) {
      if (this.ary[i] == undefined) break;
      tempStr += `[${i}] : ${this.ary[i]}  `;
    }
    console.log(tempStr);
  }
}

let stack = new Stack(4);

class Queue {
  constructor(length) {
    this.ary = {};
    this.length = length;
    for (let i = 0; i < this.length; ++i) {
      this.ary[`${i}`] = "";
    }
    this.indicator = -1;
  }

  get(index) {
    if (index < 0 || index >= this.length)
      return console.log("잘못된 인덱스입니다.");
    else if (this.ary[index] == "") return console.log("빈 장소입니다.");
    return this.ary[index];
  }
  indexOf(value) {
    for (let i = 0; i < this.length; ++i) {
      if (this.ary[i] == value) {
        return i;
      }
    }
    return console.log("그런 값은 없습니다.");
  }
  push(num) {
    if (num == undefined) return console.log("값을 입력해주세요");
    if (this.indicator++ > this.length - 2) {
      this.indicator--;
      console.log("QueueOverFlow");
      return;
    }
    this.ary[this.indicator] = num;
  }
  shift() {
    if (this.indicator-- < 0) {
      this.indicator++;
      console.log("너무 많이 뺏어");
      return;
    }
    let curItem = this.ary[0];
    this.ary[this.length - 1] = "";
    for (let i = 0; i < this.length - 1; ++i) {
      this.ary[`${i}`] = this.ary[`${i + 1}`];
    }
    return curItem;
  }
  print() {
    if (this.indicator <= -1) return console.log("없어!");
    let tempStr = "";
    for (let i = 0; i <= this.indicator; ++i) {
      if (this.ary[i] == undefined) break;
      tempStr += `[${i}] : ${this.ary[i]}  `;
    }
    console.log(tempStr);
  }
}

let queue = new Queue(3);
