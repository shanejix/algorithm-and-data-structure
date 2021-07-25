// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

//  

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:


// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
//  

// Constraints:

// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/middle-of-the-linked-list
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 🎨 方法一：快慢指针

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {

    let slow = fast = head;

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    return slow

};