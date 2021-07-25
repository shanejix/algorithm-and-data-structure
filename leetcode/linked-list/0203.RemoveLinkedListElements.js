// Remove all elements from a linked list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 方法一：迭代

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let newHead = head;

    while (head && head.val === val) {
        head = head.next;
        newHead = head;
    }

    while (head && head.next) {
        if (head.next.val === val) {
            head.next = head.next.next;
        } else {
            head = head.next;
        }
    }

    return newHead;

};

// 方法二：迭代

var removeElementsOpitmization = function (head, val) {
    let sentinel = new ListNode(0);
    sentinel.next = head;

    let prev = sentinel;
    let curr = head;

    while (curr) {
        if (curr.val === val) {
            prev.next = curr.next;
        } else {
            prev = curr
        }
        curr = curr.next;
    }

    return sentinel.next;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 方法三：迭代

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {

    let newHead = newTail = new ListNode(null);

    let p = head;

    while (p) {
        if (p.val === val) {
            p = p.next;
        } else {
            // // 头插
            // let node  =new ListNode(p.val);
            // node.next = newHead.next;
            // newHead.next = node;
            // p = p.next;

            // 尾插
            let node = new ListNode(p.val);
            newTail.next = node;
            newTail = newTail.next;
            p = p.next;

        }
    }

    return newHead.next
};


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 方法三：迭代 利用哑巴节点优化

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {

    let newHead = new ListNode(null);

    newHead.next = head;

    let p = newHead;

    // why p.next ???  p -> newHead 
    while (p.next) {
        if (p.next.val === val) {
            p.next = p.next.next;
        } else {
            p = p.next
        }
    }

    return newHead.next;
};


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 方法三：递归
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (head === null) {
        return head
    }

    head.next = removeElements(head.next, val);

    return head.val === val ? head.next : head
};