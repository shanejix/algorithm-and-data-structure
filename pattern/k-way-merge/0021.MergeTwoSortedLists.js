// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

//  

// Example 1:


// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: l1 = [], l2 = []
// Output: []
// Example 3:

// Input: l1 = [], l2 = [0]
// Output: [0]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/merge-two-sorted-lists
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 🎨 方法一：递归

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2
  }

  if (l2 === null) {
    return l1
  }

  if (l2.val < l1.val) {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }

  if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  }
};

// 🎨 方法二：双指针

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let head = tail = new ListNode(null);

  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      tail.next = new ListNode(l2.val)
      l2 = l2.next;
    }
    tail = tail.next
  }

  tail.next = l1 || l2

  return head.next
};
