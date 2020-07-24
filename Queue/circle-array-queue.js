class Queue {
    constructor(size) {
        if (!size) {
            console.log('init error no size')
        }
        this.initSize = size
        this.store = new Array(size)
        this.head = 0
        this.tail = 0
    }

    // 入队
    push(val) {
        console.log((this.tail) % this.initSize);
        if ((this.tail) % this.initSize === this.head) {
            console.log('queue is over')
        } else {
            this.store[this.tail++] = val
        }
    }

    // 出队
    pop() {
        if (this.head === this.tail) {
            console.log('queue is empty')
        } else {
            let removeVal = this.store[this.head]
            this.head++
            return removeVal
        }
    }
    // 大小
    size() {
        return this.store.length
    }
    // 清空
    clear() {
        this.store.length = 0
    }
    // 判空
    isEmpt() {
        return this.store.length === 0
    }
    // 打印
    display() {
        console.log(this.store.toString());
    }
}

let queue = new Queue(5)

queue.push(1)
// queue.push(2)
queue.display();
// console.log(queue.pop());
// queue.display();
// console.log(queue.isEmpt());
// queue.clear();
// console.log(queue.isEmpt());