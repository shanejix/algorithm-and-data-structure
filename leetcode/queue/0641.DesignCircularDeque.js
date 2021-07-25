// Design your implementation of the circular double-ended queue (deque).

// Your implementation should support following operations:

// MyCircularDeque(k): Constructor, set the size of the deque to be k.
// insertFront(): Adds an item at the front of Deque. Return true if the operation is successful.
// insertLast(): Adds an item at the rear of Deque. Return true if the operation is successful.
// deleteFront(): Deletes an item from the front of Deque. Return true if the operation is successful.
// deleteLast(): Deletes an item from the rear of Deque. Return true if the operation is successful.
// getFront(): Gets the front item from the Deque. If the deque is empty, return -1.
// getRear(): Gets the last item from Deque. If the deque is empty, return -1.
// isEmpty(): Checks whether Deque is empty or not. 
// isFull(): Checks whether Deque is full or not.


// Example:

// MyCircularDeque circularDeque = new MycircularDeque(3); // set the size to be 3
// circularDeque.insertLast(1);			// return true
// circularDeque.insertLast(2);			// return true
// circularDeque.insertFront(3);			// return true
// circularDeque.insertFront(4);			// return false, the queue is full
// circularDeque.getRear();  			// return 2
// circularDeque.isFull();				// return true
// circularDeque.deleteLast();			// return true
// circularDeque.insertFront(4);			// return true
// circularDeque.getFront();			// return 4


// Note:

// All values will be in the range of [0, 1000].
// The number of operations will be in the range of [1, 1000].
// Please do not use the built-in Deque library.

/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function (k) {
    this.initSize = k
    this.size = 0
    this.store = []
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
    if (this.size < this.initSize) {
        this.store.unshift(value)
        this.size++
        return true
    } else {
        return false
    }
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
    if (this.size < this.initSize) {
        this.store.push(value)
        this.size++
        return true
    } else {
        return false
    }
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
    if (this.size) {
        this.size--
        return this.store.shift()
    } else {
        return false
    }
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
    if (this.size) {
        this.size--
        return this.store.pop()
    } else {
        return false
    }
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
    if (this.size) {
        return this.store[0]
    } else {
        return false
    }
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
    if (this.size) {
        return this.store[this.store.length - 1]
    } else {
        return false
    }
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
    return this.size === 0
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
    return this.size === this.initSize
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */

var obj = new MyCircularDeque(8)
var param_1 = obj.insertFront(1)
var param_2 = obj.insertLast(2)
var param_3 = obj.deleteFront()
var param_4 = obj.deleteLast()
var param_5 = obj.getFront()
var param_6 = obj.getRear()
var param_7 = obj.isEmpty()
var param_8 = obj.isFull()

console.log(param_1)
console.log(param_2)
console.log(param_3)
console.log(param_4)
console.log(param_5)
console.log(param_6)
console.log(param_7)
console.log(param_8)