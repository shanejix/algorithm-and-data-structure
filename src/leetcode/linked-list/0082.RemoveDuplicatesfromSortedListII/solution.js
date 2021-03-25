// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

//  

// Example 1:


// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]
// Example 2:


// Input: head = [1,1,1,2,3]
// Output: [2,3]
//  

// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 方法一：虚拟头节点-遍历

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head) return head

    const dummy = new ListNode(null, head);

    let curr = dummy;
    while (curr.next && curr.next.next) {
        if (curr.next.val === curr.next.next.val) {
            const v = curr.next.val
            while (curr.next && curr.next.val === v) {
                curr.next = curr.next.next;
            }
        } else {
            curr = curr.next
        }
    }

    return dummy.next;

};