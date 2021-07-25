// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

// Example:

// Input:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// Output: 1->1->2->3->4->4->5->6

//   Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// 分治合并 - 递归

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  return mergeList(lists, 0, lists.length - 1);
};

function mergeList(listNodes, begin, end) {
  if (begin > end) {
    return null;
  }

  if (begin === end) return listNodes[begin];

  let mid = (begin + end) >> 1;

  let listNode1 = mergeList(listNodes, begin, mid);
  let listNode2 = mergeList(listNodes, mid + 1, end);

  let merges = merge(listNode1, listNode2);

  return merges;
}

function merge(l1, l2) {
  let p1 = l1;
  let p2 = l2;
  let result = new ListNode(null);
  let p3 = result;

  while (p1 && p2) {
    if (p1.val > p2.val) {
      p3.next = p2;
      p2 = p2.next;
    } else {
      p3.next = p1;
      p1 = p1.next;
    }
    p3 = p3.next;
  }

  p3.next = p1 || p2;

  return result.next;
}
