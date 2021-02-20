// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
//  

// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2
//  

// Constraints:

// Methods pop, top and getMin operations will always be called on non-empty stacks.

// 双栈法

/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = [];
    this.minStack = [];
};

// Optimization
var MinStack = function () {
    this.stack = [];
    // this.minStack = [];
    this.minStack = [Infinity];
};
/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x);

    if (this.minStack.length === 0) {
        this.minStack.push(x);
    } else {
        let min = this.minStack[this.minStack.length - 1];
        if (x < min) {
            this.minStack.push(x);
        } else {
            this.minStack.push(min);
        }
    }
};

// Optimization
MinStack.prototype.push = function (x) {
    this.stack.push(x);

    // if (this.minStack.length === 0) {
    //     this.minStack.push(x);
    // } else {
    //     let min = this.minStack[this.minStack.length - 1];
    //     if (x < min) {
    //         this.minStack.push(x);
    //     } else {
    //         this.minStack.push(min);
    //     }
    // }

    this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], x));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.minStack.pop();
    return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1];
};




/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

/**
* initialize your data structure here.
*/
var MinStack = function () {
    this.stack = [];
    this.min = Infinity;
};

// 单栈-最小值法

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {

    if (x <= this.min) {
        this.stack.push(this.min);
        this.min = x;
    }

    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.stack.pop() === this.min) {
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

// 单栈-差值法

/**
* initialize your data structure here.
*/
var MinStack = function () {
    this.stack = [];
    this.min = null;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {

    // if(this.min === null){
    //     this.min = x;
    // }

    // this.stack.push(x - this.min);

    // if(x < this.min){
    //     this.min = x;
    // }

    if (this.stack.length === 0) {
        this.min = x;
        this.stack.push(x - this.min);
    } else {
        this.stack.push(x - this.min);

        if (x < this.min) {
            this.min = x;
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.stack.length === 0) {
        return
    }

    let top = this.stack.pop();

    if (top < 0) {
        this.min = this.min - top;
    }

};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    let top = this.stack[this.stack.length - 1];

    if (top < 0) {
        return this.min;
    } else {
        return this.min + top;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
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