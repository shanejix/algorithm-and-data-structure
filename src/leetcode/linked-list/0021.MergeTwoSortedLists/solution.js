// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {

  let r = c = new ListNode(0);

  while (l1 && l2) {
    if (l1.val < l2.val) {
      c.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      c.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    c = c.next;
  }

  if (l1) {
    c.next = l1;
  }

  if (l2) {
    c.next = l2;
  }

  return r.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoListsOptimization = function (l1, l2) {

  let r = c = new ListNode(0);

  while (l1 && l2) {
    if (l1.val < l2.val) {
      // c.next = new ListNode(l1.val);
      c.next = l1;
      l1 = l1.next;
    } else {
      // c.next = new ListNode(l2.val);
      c.next = l2;
      l2 = l2.next;
    }
    c = c.next;
  }

  // if(l1){
  //     c.next = l1;
  // }

  // if(l2){
  //     c.next  = l2;
  // }

  c.next = l1 || l2;

  return r.next;

};