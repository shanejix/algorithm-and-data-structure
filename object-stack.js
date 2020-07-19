class Stack {
  constructor() {
    this.store = {};
    this.top = 0;
  }
  push(item) {
    this.top++;
    this.store[this.top] = item;
  }
  pop() {
    let popItem = this.store[this.top];
    this.top--;
    return popItem;
  }

  len() {
    return this.top;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.len());
console.log(stack.pop());
console.log(stack.len());
