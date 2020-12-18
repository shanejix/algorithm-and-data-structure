// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
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

  if (p1) {
    p3.next = p1;
  }
  if (p2) {
    p3.next = p2;
  }

  return result.next;
};

var L1 = new ListNode(1);
L1.next = new ListNode(2);
L1.next.next = new ListNode(4);
var L2 = new ListNode(1);
L2.next = new ListNode(3);
L2.next.next = new ListNode(4);

// console.log(JSON.stringify(mergeTwoLists(L1, L2)));

var mergeTwoLists2 = function (l1, l2) {
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
};

console.log('2:',JSON.stringify(mergeTwoLists2(L1, L2)));
