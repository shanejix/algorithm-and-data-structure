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