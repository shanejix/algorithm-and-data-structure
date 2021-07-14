// Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. If x is contained within the list, the values of x only need to be after the elements less than x (see below). The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions.

// Example:

// Input: head = 3->5->8->5->10->2->1, x = 5
// Output: 3->1->2->10->5->5->8


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {

    let smallHead = smallTail = new ListNode(0);
    let bigHead = bigTail = new ListNode(0);

    while (head) {
        if (head.val < x) {
            let tmp = new ListNode(head.val);
            if (smallHead.next === null) {
                smallTail = tmp;
            }
            tmp.next = smallHead.next;
            smallHead.next = tmp;
        } else {
            let tmp = new ListNode(head.val);
            if (bigHead.next === null) {
                bigTail = tmp;
            }
            tmp.next = bigHead.next;
            bigHead.next = tmp;
        }
        head = head.next;
    }

    bigTail.next = null;
    smallTail.next = bigHead.next;

    return smallHead.next;

};