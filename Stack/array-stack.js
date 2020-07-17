class Stack {
  constructor() {
    this.store = [];
  }

  pop() {
    if (this.store.length) {
      return this.store.pop();
    }
  }

  push(item) {
    this.store.push(item);
  }

  len() {
    return this.store.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log("length", stack.len());
console.log("pop item", stack.pop());
console.log("lenght", stack.len());
