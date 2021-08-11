// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

//  

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []
//  

// Constraints:

// k == lists.length
// 0 <= k <= 10^4
// 0 <= lists[i].length <= 500
// -10^4 <= lists[i][j] <= 10^4
// lists[i] is sorted in ascending order.
// The sum of lists[i].length won't exceed 10^4.

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/merge-k-sorted-lists
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 🎨 方法一：顺序合并

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {

    let ans = null;

    for (let list of lists) {
        ans = mergeTwoLists(ans, list)
    }

    return ans

};

// 🎨 方法二：分治合并 - 顺序合并优化

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {

    /**
     * 分治合共lists
     * @param {*} lists 
     * @param {*} l 
     * @param {*} r 
     */
    const merge = (lists, l, r) => {
        if (l === r) {
            return lists[l]
        }


        if (l > r) {
            return null
        }

        let mid = l + r >> 1;

        return mergeTwoLists(merge(lists, l, mid), merge(lists, mid + 1, r))
    }

    // [0,lists.lenght - 1]
    return merge(lists, 0, lists.length - 1)
};

/**
 * 合并两个有序链表
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {

    let head = tail = new ListNode(null)

    while (l1 && l2) {

        if (l1.val <= l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next
        }

        tail = tail.next
    }

    tail.next = l1 || l2

    return head.next;
}