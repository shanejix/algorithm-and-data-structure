// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

//  

// Example 1:


// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Example 2:


// Input: root = [1,2,3], targetSum = 5
// Output: false
// Example 3:

// Input: root = [1,2], targetSum = 0
// Output: false
//  

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/path-sum
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {

    // 树可能为空
    if (root === null) {
        return false
    }

    // 叶子节点
    if (root.left === null && root.right === null) {
        return targetSum === root.val
    }

    // 非叶子节点
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)

};

// 🎨 方法二：BFS

// 📝 思路：用两个队列分别存储节点和节点的路径和

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {

    // 树可能为空
    if (root === null) {
        return false
    }

    // 储存将要遍历的节点
    const queNode = [root];
    // 储存将要遍历的节点的路径和
    const queValue = [root.val]

    while (queNode.length) {
        let curNode = queNode.pop();
        let pathVal = queValue.pop();

        // 叶子节点
        if (curNode.left === null && curNode.right === null) {
            if (pathVal === targetSum) {
                return true
            }
            continue;
        }

        if (curNode.left) {
            queNode.push(curNode.left);
            queValue.push(curNode.left.val + pathVal);
        }

        if (curNode.right) {
            queNode.push(curNode.right);
            queValue.push(curNode.right.val + pathVal);
        }
    }
};