class Node {
  constructor(value) {
    this.value = value;
    this.next = 0;
  }
}

//  反向运用链表，表头作为栈尾
class Stack {
  constructor() {
    this.top = null;
    this.size = null;
  }

  // 入栈
  push(value) {
    if (this.top) {
      let newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
      this.size++;
    } else {
      this.top = new Node(value);
    }
  }

  // 出栈
  pop() {
    if (this.size) {
      let removeNode = this.top;
      this.top = this.top.next;
      return removeNode.value;
    } else {
      return null;
    }
  }

  // 大小
  size() {
    return this.size;
  }

  // 栈顶/尾
  peek() {
    if (this.top) {
      return this.top.value;
    } else {
      return null;
    }
  }
  // 判空
  isEmpt() {
    return this.size === 0;
  }

  // 清空
  clear() {
    while (this.top) {
      let removeNode = this.top;
      this.top = this.top.next;
      removeNode = null;
      this.size--;
    }
  }

  // 打印
  log() {
    let newHead = new Node(null);
    newHead = this.top;
    while (newHead) {
      console.log(newHead.value);
      newHead = newHead.next;
    }
  }
}
const stack = new Stack();
stack.push(1);
stack.log();
stack.push(2);
stack.log();
console.log(stack.pop());
console.log(stack.isEmpt());
stack.clear();
console.log(stack.isEmpt());
// stack.log();
// console.log('length', stack.size());
// console.log('pop item', stack.pop());
// console.log('length', stack.size());
