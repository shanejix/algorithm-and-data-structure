// Given the head of a linked list, rotate the list to the right by k places.

//  

// Example 1:


// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// Example 2:


// Input: head = [0,1,2], k = 4
// Output: [2,0,1]
//  

// Constraints:

// The number of nodes in the list is in the range [0, 500].
// -100 <= Node.val <= 100
// 0 <= k <= 2 * 109

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 方法一：直接法

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {

    let len = length(head);

    if (len === 0) return null
    if (len === 1) return head

    let rate = k % len
    if (rate === 0) return head;

    let step = len - rate;

    let p = head;
    while (step > 1) {
        p = p.next;
        step--
    }

    let newHead = p.next;
    p.next = null;

    let tail = newHead;
    while (tail && tail.next) {
        tail = tail.next;
    }

    tail.next = head;

    return newHead;
};

function length(root) {
    let len = 0;
    let p = root

    if (!p) return len

    while (p) {
        len++;
        p = p.next
    }

    return len
}