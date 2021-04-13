// Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.

// Note: This question is the same as 530: https://leetcode.com/problems/minimum-absolute-difference-in-bst/

//  

// Example 1:


// Input: root = [4,2,6,1,3]
// Output: 1
// Example 2:


// Input: root = [1,0,48,null,null,12,49]
// Output: 1
//  

// Constraints:

// The number of nodes in the tree is in the range [2, 100].
// 0 <= Node.val <= 105


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function (root) {

    let res = Number.MAX_SAFE_INTEGER;
    let pre = -1;
    function inorder(root) {
        if (!root) return

        inorder(root.left);

        if (pre === -1) {
            pre = root.val
        } else {
            res = Math.min(res, root.val - pre);
            pre = root.val;
        }

        inorder(root.right);

    }

    inorder(root)

    return res
};

