// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

//  

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 2
// Example 2:

// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5
//  

// Constraints:

// The number of nodes in the tree is in the range [0, 105].
// -1000 <= Node.val <= 1000

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/minimum-depth-of-binary-tree
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 🎨 方法一：DFS

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {

    return dfs(root, 1, Infinity);

};

function dfs(root, deep, minDeep) {

    if (root === null) {
        return 0
    }

    if (root.left === null && root.right === null) {
        minDeep = deep;
    }

    let minDeepLeft = Infinity
    if (root.left) {
        minDeepLeft = dfs(root.left, deep + 1, minDeep);
    }

    let minDeepRight = Infinity
    if (root.right) {
        minDeepRight = dfs(root.right, deep + 1, minDeep)
    }

    return Math.min(minDeep, minDeepLeft, minDeepRight)
}