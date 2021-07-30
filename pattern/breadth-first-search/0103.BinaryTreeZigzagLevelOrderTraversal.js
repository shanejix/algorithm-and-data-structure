// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

//  

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []
//  

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -100 <= Node.val <= 100

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal
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

// 📝 思路：同 102 题

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {

    if (root === null) {
        return []
    }

    const ans = [];
    const queNode = [root]

    let isZigzag = true

    while (queNode.length) {
        let size = queNode.length;
        const level = [];

        while (size) {
            let currNode = queNode.shift();

            if (isZigzag) {
                level.push(currNode.val);
            } else {
                level.unshift(currNode.val);
            }

            if (currNode.left) {
                queNode.push(currNode.left)
            }

            if (currNode.right) {
                queNode.push(currNode.right);
            }

            size--
        }

        ans.push([...level]);
        level.length = 0;
        isZigzag = !isZigzag
    }

    return ans
};