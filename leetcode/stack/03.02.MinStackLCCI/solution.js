// How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, pop and min should all operate in 0(1) time.

// Example:

// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> return -3.
// minStack.pop();
// minStack.top();      --> return 0.
// minStack.getMin();   --> return -2.

/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = [];
    this.min = Infinity;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    // if(this.stack.length === 0){
    //     this.min = x;
    //     this.stack.push(x);
    // }else{
    //     if(x <= this.min){
    //         this.stack.push(this.min)
    //         this.min = x;
    //     }
    //     this.stack.push(x);
    // }

    if (x <= this.min) { // 相等情况下，min不入栈会导致，pop阶段多抛出一个element
        this.stack.push(this.min);
        this.min = x;
    }
    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    let top = this.stack.pop();

    if (top === this.min) {
        this.min = this.stack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    console.log(this.stack)
    return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */