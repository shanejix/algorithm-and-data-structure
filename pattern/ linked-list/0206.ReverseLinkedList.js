// Given the head of a singly linked list, reverse the list, and return the reversed list.

//  

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:


// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []
//  

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000
//  

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/reverse-linked-list
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 🎨 方法一：头插法

// 📝 思路：遍历链表，依次插入新链表头部后面

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {

    let newHead = new ListNode(null);

    while (head) {
        let tmp = new ListNode(head.val);
        tmp.next = newHead.next
        newHead.next = tmp;
        head = head.next
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

// 🎨 方法一：头插法 - 优化

// 📝 思路：遍历链表，依次插入新链表头部后面

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function (head) {

    let newHead = new ListNode(null);

    let p = newHead;

    while (head) {
        let tmp = head
        head = head.next

        tmp.next = newHead.next;
        newHead.next = tmp;

    }

    return newHead.next;
};