// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

//  

// Example 1:


// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]
// Example 2:


// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]
// Example 3:

// Input: head = [1,2,3,4,5], k = 1
// Output: [1,2,3,4,5]
// Example 4:

// Input: head = [1], k = 1
// Output: [1]
//  

// Constraints:

// The number of nodes in the list is in the range sz.
// 1 <= sz <= 5000
// 0 <= Node.val <= 1000
// 1 <= k <= sz
//  

// Follow-up: Can you solve the problem in O(1) extra memory space?

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/reverse-nodes-in-k-group
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 🎨 方法一：穿针引线

// 📝 思路： https://leetcode-cn.com/problems/reverse-nodes-in-k-group/solution/k-ge-yi-zu-fan-zhuan-lian-biao-by-leetcode-solutio/

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    // 虚拟头节点
    const dummyNode = new ListNode(null);
    dummyNode.next = head;

    // k group 头节点的前驱
    let pre = dummyNode;

    while (head) {
        // k group 尾节点
        let tail = pre;

        // tail 查看剩余部分是否大于等于 k
        for (let i = 0; i < k; i++) {
            tail = tail.next
            if (!tail) {
                return dummyNode.next;
            }
        }

        // k group 尾节点的后继
        const next = tail.next

        // 反转链表：同第 206 题
        [head, tail] = reverseList(head, tail)

        // 穿针引线
        pre.next = head;
        tail.next = next;
        pre = tail
        head = tail.next

    }

    return dummyNode.next;
};

function reverseList(head, tail) {
    let prev = tail.next;
    let p = head;

    while (prev !== tail) {
        const next = p.next;
        p.next = prev
        prev = p;
        p = next
    }

    return [tail,head]
}