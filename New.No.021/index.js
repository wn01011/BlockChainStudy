class Node {
  constructor(data) {
    this.data = data;
    this.prev = undefined;
    this.next = undefined;
  }
}

class DoubleLinkedList {
  constructor(data) {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insert(data) {
    if (!this.head) {
      this.head = this.tail = new Node(data);
    } else {
      this.tail.next = new Node(data);
      this.tail.next.prev = this.tail;
      this.tail = this.tail.next;
    }
    this.size++;
  }
  remove(data) {
    let curr = this.head;
    if (curr?.data == data) {
      const tempNode = this.head;
      this.head = this.head.next;
      this.head.prev = null;
      this.size--;
      return curr.data;
    }
    while (curr != this.tail) {
      if (curr.next.data == data) {
        const tempNode = curr.next;
        curr.next = tempNode.next;
        if (curr.next) curr.next.prev = curr;
        else this.tail = curr;
        --this.size;
        return tempNode.data;
      }
      curr = curr.next;
    }
  }
  contains(data) {
    let curr = this.head;
    while (true) {
      if (curr.data == data) return true;
      if (!curr.next) return false;
      curr = curr.next;
    }
  }
}
const testDouble = new DoubleLinkedList();
testDouble.insert("test1");
testDouble.insert("test2");
