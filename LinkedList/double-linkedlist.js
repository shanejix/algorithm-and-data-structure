class Node {
  constructor(val) {
    this.Node = val;
    this.next = null;
    this.previous = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(val) {
    let current = new Node(val);
    if (this.head) {
      let pointer = this.head;
      while (pointer) {
        pointer = pointer.next;
      }
      pointer.next = current;
      current.previous = pointer;
    } else {
      this.head = current;
    }
    this.size++;
  }
  // TODO:
  insert() {}
  pop() {}
  find() {}
  reverse() {}
  length() {}
  display() {}
}
