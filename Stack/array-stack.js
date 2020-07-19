class Stack {
  constructor() {
    this.store = [];
  }

  // 入栈
  push(item) {
    this.store.push(item);
  }

  // 出栈
  pop() {
    if (this.store.length) {
      return this.store.pop();
    } else {
      return null;
    }
  }

  // 大小
  size() {
    return this.store.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log('length', stack.size());
console.log('pop item', stack.pop());
console.log('length', stack.size());
