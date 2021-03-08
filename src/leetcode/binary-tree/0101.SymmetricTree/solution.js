// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

//  

// Example 1:


// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:


// Input: root = [1,2,2,null,3,null,3]
// Output: false
//  

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100
//  

// Follow up: Could you solve it both recursively and iteratively?

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

//  

// Example 1:


// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:


// Input: root = [1,2,2,null,3,null,3]
// Output: false
//  

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100
//  

// Follow up: Could you solve it both recursively and iteratively?

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 方法一：序列化字符串的方法有问题

// [1,2,2,2,null,2] 用例不通过

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) return false;

    if (!root.left && !root.right) return true;

    let left = toString(root.left)
    // let right = toString(root.right).split('!').reverse().join('!').slice(1) + '!';
    let right = toString(root.right);

    console.log(left);
    console.log(right);

    if (left.length === right.length) {
        let p = 0;
        while (p < left.length) {
            if (left[p] !== right[p]) {
                return false
            }
            console.log(left[p], right[p])
            p++
        }

        return true;
    } else {
        return false
    }

};

function toString(node) {
    if (node === undefined) return '#!';
    if (node === null) return null + '!'

    return res = toString(node.left) + node.val + '!' + toString(node.right)
}