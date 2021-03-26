// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

//  

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []
//  

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];

    const res = [];
    const queue = [root];

    while (queue.length !== 0) {
        let size = queue.length;
        let level = [];

        while (size) {
            let top = queue.shift();
            level.push(top.val);

            if (top.left) {
                queue.push(top.left)
            }

            if (top.right) {
                queue.push(top.right)
            }

            size--;
        }

        res.push([...level]);
        level.length = 0
    }

    return res;
};