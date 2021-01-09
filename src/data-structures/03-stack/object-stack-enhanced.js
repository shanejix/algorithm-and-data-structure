class Stack {
  constructor() {
    this.store = {};
    this.top = 0;
  }
  // 入栈
  push(item) {
    this.top++;
    this.store[this.top] = item;
  }
  // 出栈
  pop() {
    let popItem = this.store[this.top];
    this.top--;
    return popItem;
  }
  // 大小
  size() {
    return this.top;
  }
  // 栈尾
  peek() {
    return this.store[this.top];
  }
  // 判空
  isEmpt() {
    return this.top === 0;
  }
  // 清空
  clear() {
    this.top = 0;
  }
  // 打印
  log() {
    Object.keys(this.store).forEach((item) => console.log(item));
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.log();
console.log(stack.isEmpt());
console.log(stack.peek());
console.log(stack.size());
console.log(stack.pop());
console.log(stack.size());
stack.clear();
console.log(stack.size());
console.log(stack.isEmpt());
