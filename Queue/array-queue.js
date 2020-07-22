class Queue {
    constructor() {
        this.store = []
    }

    // 入队
    push(val) {
        this.store.push(val)
    }
    // 出队
    pop() {
        return this.store.shift()
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
        console.log(this.store.toString())
    }
}

let queue = new Queue()

queue.push(1)
queue.push(2)
queue.display();
console.log(queue.pop());
queue.display();
console.log(queue.isEmpt());
queue.clear();
console.log(queue.isEmpt());