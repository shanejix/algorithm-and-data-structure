// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Notice that you should not modify the linked list.

//  

// Example 1:


// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.
// Example 2:


// Input: head = [1,2], pos = 0
// Output: tail connects to node index 0
// Explanation: There is a cycle in the linked list, where tail connects to the first node.
// Example 3:


// Input: head = [1], pos = -1
// Output: no cycle
// Explanation: There is no cycle in the linked list.
//  

// Constraints:

// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.
//  

// Follow up: Can you solve it using O(1) (i.e. constant) memory?

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/linked-list-cycle-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 🎨 方法一：hash

// 📝 思路：用set判断是否出现重复元素来判断环的首个元素

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let set = new Set();
    let ans = null;

    while (head) {
        if (set.has(head)) {
            ans = head;
            break
        }

        set.add(head);
        head = head.next;
    }

    return ans
};

// 🎨 方法二：快慢执政

// 📝 思路：从快慢指针相遇的位置到环起点的步长 等于 从表头到环的起点的步长 https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/huan-xing-lian-biao-ii-by-leetcode-solution/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {

    if (head === null) {
        return null
    }

    let slow = fast = head;

    while (fast) {
        slow = slow.next

        if (fast.next !== null) {
            fast = fast.next.next
        } else {
            return null
        }

        while (fast === slow) {
            let ptr = head;

            while (ptr !== slow) {
                ptr = ptr.next
                slow = slow.next
            }

            return ptr
        }
    }

    return null
};
