// Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range [low, high].

//  

// Example 1:


// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32
// Example 2:


// Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
// Output: 23
//  

// Constraints:

// The number of nodes in the tree is in the range [1, 2 * 104].
// 1 <= Node.val <= 105
// 1 <= low <= high <= 105
// All Node.val are unique.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 方法一：递归 - 深度优先遍历

/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {

    let res = 0;

    function inorder(root) {

        if (!root) {
            return
        }

        inorder(root.left);

        if (root.val >= low && root.val <= high) {
            res += root.val
        }

        inorder(root.right)
    }

    inorder(root);

    return res
};

// 方法一：递归 - 深度优先遍历 - 优化

/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {

    if (!root) {
        // return
        return 0
    }

    if (root.val < low) {
        return rangeSumBST(root.right, low, high)
    }

    if (root.val > high) {
        return rangeSumBST(root.left, low, high)
    }


    return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high)
};

// 方法二：迭代 - 广度优先遍历 

/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {

    let res = 0;

    const queue = [root];

    while (queue.length) {
        let node = queue.shift();

        if (!node) {
            continue
        } else if (node.val > high) {
            queue.push(node.left)
        } else if (node.val < low) {
            queue.push(node.right);
        } else {

            // [low,high]
            res += node.val
            queue.push(node.left)
            queue.push(node.right)
        }
    }

    return res;
};