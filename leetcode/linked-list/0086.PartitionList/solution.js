// Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

//  

// Example 1:


// Input: head = [1,4,3,2,5,2], x = 3
// Output: [1,2,2,4,3,5]
// Example 2:

// Input: head = [2,1], x = 2
// Output: [1,2]
//  

// Constraints:

// The number of nodes in the list is in the range [0, 200].
// -100 <= Node.val <= 100
// -200 <= x <= 200


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {

    // if(!head) return;

    let h1 = t1 = new ListNode(0);
    let h2 = t2 = new ListNode(0);

    while (head) {
        if (head.val < x) {
            t1.next = new ListNode(head.val);
            t1 = t1.next;
        } else {
            t2.next = new ListNode(head.val);
            t2 = t2.next;
        }
        head = head.next;
    }

    t1.next = h2.next;

    return h1.next;
};


var partitionOptmization = function (head, x) {
    let h1 = t1 = new ListNode(0);
    let h2 = t2 = new ListNode(0);

    while (head) {
        if (head.val < x) {
            t1.next = head;
            t1 = t1.next;
        } else {
            t2.next = head;
            t2 = t2.next;
        }
        head = head.next;
    }

    t2.next = null;
    t1.next = h2.next;

    return h1.next;
};

var partitionOptmization1 = function (head, x) {
    let smallHead = smallTail = new ListNode(0);
    let bigHead = bigTail = new ListNode(0);

    while (head) {
        if (head.val < x) {
            smallTail.next = head;
            smallTail = smallTail.next;
        } else {
            bigTail.next = head;
            bigTail = bigTail.next;
        }
        head = head.next;
    }

    bigTail.next = null;
    smallTail.next = bigHead.next;

    return smallHead.next;
};