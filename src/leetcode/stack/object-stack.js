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
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.size());
console.log(stack.pop());
console.log(stack.size());
