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

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 🎨 方法一：二叉树的按层遍历 

// 📝 思路：按层遍历，上一层遍历结束会进入下一层，用size记录每层的宽度

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {

    if (!root) {
        return []
    }

    const queue = [root];
    const ans = []

    while (queue.length) {
        let size = queue.length;
        let level = [];

        while (size) {

            let currNode = queue.shift()
            level.push(currNode.val)

            if (currNode.left) {
                queue.push(currNode.left)
            }

            if (currNode.right) {
                queue.push(currNode.right)
            }

            size--
        }

        ans.push([...level])
        level.length = 0;
    }

    return ans
};