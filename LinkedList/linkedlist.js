class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  append(val) {
    let current = new Node(val);
    if (this.head) {
      let point = this.head;
      while (point) {
        point = point.next;
      }
      point.next = current;
    } else {
      this.head = current;
    }
    this.size++;
  }
  //TODO:
  find() {}
  //TODO:
  insert() {}
  //TODO:
  display() {}
  //TODO:
  remove() {}
  //TODO:
  reverse() {}
  //TODO:
  length() {}
}
