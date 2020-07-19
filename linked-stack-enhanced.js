class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = null;
  }

  // 入栈
  push(item) {}

  // 出栈
  pop() {}

  // 大小
  size() {}

  // 栈顶/尾
  peek() {}
  // 判空

  // 清空
  clear() {}

  // 打印
  log() {}
}

// const node1 = new Node(1);
// const node2 = new Node(2);

// const stack = new Stack();

// stack.push(node1);
// stack.push(node2);
// console.log('length', stack.size());
// console.log('pop item', stack.pop());
// console.log('length', stack.size());
