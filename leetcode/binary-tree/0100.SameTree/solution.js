// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

//  

// Example 1:


// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Example 2:


// Input: p = [1,2], q = [1,null,2]
// Output: false
// Example 3:


// Input: p = [1,2,1], q = [1,1,2]
// Output: false
//  

// Constraints:

// The number of nodes in both trees is in the range [0, 100].
// -104 <= Node.val <= 104

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 方法一：深度优先搜索

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (p === null && q === null) {
        return true
    } else if (p === null && q !== null) {
        return false
    } else if (p !== null && q === null) {
        return false
    } else if (p.val !== q.val) {
        return false
    } else {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
};

// 方法一：广度优先搜索

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (p === null && q === null) {
        return true;
    } else if (p === null || q === null) {
        return false
    }

    const queue1 = [p];
    const queue2 = [q];

    while (queue1.length !== 0 && queue2.length !== 0) {
        let node1 = queue1.shift()
        let node2 = queue2.shift()

        if (node1.val !== node2.val) {
            return false
        }

        let left1 = node1.left;
        let right1 = node1.right;
        let left2 = node2.left;
        let right2 = node2.right;

        // 只有一个节点的左子节点为空
        if (left1 === null ^ left2 === null) {
            return false
        }

        // 只有一个节点的右子节点为空
        if (right1 === null ^ right2 === null) {
            return false
        }

        // 如果两个节点的子节点的结构相同，则将两个节点的非空子节点分别加入两个队列，子节点加入队列时需要注意顺序，如果左右子节点都不为空，则先加入左子节点，后加入右子节点

        if (left1 !== null) {
            queue1.push(left1)
        }

        if (right1 !== null) {
            queue1.push(right1)
        }

        if (left2 !== null) {
            queue2.push(left2)
        }

        if (right2 !== null) {
            queue2.push(right2)
        }
    }

    return queue1.length !== 0 && queue2.length !== 0
};