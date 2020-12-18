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
    return this.store.pop();
  }
  // 栈尾
  peek() {
    return this.store[this.store.length - 1];
  }
  // 大小
  size() {
    return this.store.length;
  }
  // 判空
  isEmpty() {
    return !this.store.length;
  }
  // 清空
  clear() {
    this.store.length = 0;
  }
  // 打印
  log() {
    console.log(this.store.toString());
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log('length', stack.size());
console.log('pop item', stack.pop());
console.log('lenght', stack.size());
console.log('isEmpty', stack.isEmpty());
console.log('log', stack.log());
console.log('peek', stack.peek());
console.log('clear', stack.clear());
console.log('log', stack.log());
console.log('lenght', stack.size());
