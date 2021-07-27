// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

//  

// Example 1:


// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]
// Example 2:

// Input: head = [5], left = 1, right = 1
// Output: [5]
//  

// Constraints:

// The number of nodes in the list is n.
// 1 <= n <= 500
// -500 <= Node.val <= 500
// 1 <= left <= right <= n
//  

// Follow up: Could you do it in one pass?

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/reverse-linked-list-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 🎨 方法一：穿针引线

// 📝 思路：找到 left right，截断链表，翻转链表，穿针引线

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    // 虚拟头节点
    const dummyNode = new ListNode(null);
    dummyNode.next = head

    // left 的前驱：从dummyNode 向前走 left - 1 步
    let pre = dummyNode;
    for (let i = 0; i < left - 1; i++) {
        pre = pre.next
    }

    // right 节点：从 pre 向前走 right - (left -1 ) 步
    let rightNode = pre;
    for (let i = 0; i < right - left + 1; i++) {
        rightNode = rightNode.next
    }

    // leftNode 和 rightNode 的后继
    let leftNode = pre.next
    let curr = rightNode.next

    // 截断链表
    pre.next = null;
    rightNode.next = null

    // 反转链表：同第 206 题
    reverseLinkedList(leftNode);

    // 穿针引线
    pre.next = rightNode
    leftNode.next = curr

    return dummyNode.next
};

function reverseLinkedList(head) {
    let pre = null;
    let cur = head;

    while (cur) {
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
}