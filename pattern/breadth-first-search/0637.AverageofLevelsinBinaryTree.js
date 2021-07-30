// Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
//  

// Example 1:


// Input: root = [3,9,20,null,15,7]
// Output: [3.00000,14.50000,11.00000]
// Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
// Hence return [3, 14.5, 11].
// Example 2:


// Input: root = [3,9,20,15,7]
// Output: [3.00000,14.50000,11.00000]
//  

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/average-of-levels-in-binary-tree
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
 * @return {number[]}
 */
var averageOfLevels = function (root) {

    if (!root) {
        return []
    }

    const queNode = [root];
    const ans = []

    while (queNode.length) {
        let size = queNode.length;
        let level = [];

        while (size) {

            let currNode = queNode.shift()
            level.push(currNode.val)

            if (currNode.left) {
                queNode.push(currNode.left)
            }

            if (currNode.right) {
                queNode.push(currNode.right)
            }

            size--
        }

        const sum = level.reduce((acc, num) => acc + num, 0)
        const average = sum / level.length
        ans.push(average)

        level.length = 0;
    }

    return ans
};