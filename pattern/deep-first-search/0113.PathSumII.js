// Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where each path's sum equals targetSum.

// A leaf is a node with no children.

//  

// Example 1:


// Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// Output: [[5,4,11,2],[5,8,4,5]]
// Example 2:


// Input: root = [1,2,3], targetSum = 5
// Output: []
// Example 3:

// Input: root = [1,2], targetSum = 0
// Output: []
//  

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/path-sum-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 🎨 方法一：DFS

// 📝 思路：用两个队列分别存储节点和节点的路径

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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {


};

// 🎨 方法二：BFS

// 📝 思路：用两个队列分别存储节点和节点的路径

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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {

    if (root === null) {
        return []
    }

    const queNode = [root];
    const quePath = [[root.val]];

    const ans = [];

    while (queNode.length) {
        let currNode = queNode.pop()
        let currPath = quePath.pop();

        if (currNode.left === null && currNode.right === null) {
            const sum = currPath.reduce((acc, curr) => acc + curr, 0)
            if (sum === targetSum) {
                ans.push(currPath);
            }
            continue
        }

        if (currNode.left) {
            queNode.push(currNode.left)
            quePath.push([...currPath, currNode.left.val])
        }

        if (currNode.right) {
            queNode.push(currNode.right)
            quePath.push([...currPath, currNode.right.val])
        }
    }

    return ans
};