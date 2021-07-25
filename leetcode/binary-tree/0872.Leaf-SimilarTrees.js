// Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.



// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

// Two binary trees are considered leaf-similar if their leaf value sequence is the same.

// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

//  

// Example 1:


// Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
// Output: true
// Example 2:

// Input: root1 = [1], root2 = [1]
// Output: true
// Example 3:

// Input: root1 = [1], root2 = [2]
// Output: false
// Example 4:

// Input: root1 = [1,2], root2 = [2,2]
// Output: true
// Example 5:


// Input: root1 = [1,2,3], root2 = [1,3,2]
// Output: false
//  

// Constraints:

// The number of nodes in each tree will be in the range [1, 200].
// Both of the given trees will have values in the range [0, 200].

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 方法一：深度优先搜索 - 递归

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    const sequence1 = preorder(root1)
    const sequence2 = preorder(root2)

    return sequence1.toString() === sequence2.toString()
};

function preorder(root) {
    const res = [];

    if (!root) return []

    if (!root.left && !root.right) {
        res.push(root.val)
    }

    return [...res, ...preorder(root.left), ...preorder(root.right)]
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 方法二：广度优先搜索 - 队列

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {

    const ans1 = [];
    const ans2 = [];

    preorder(root1, ans1)
    preorder(root2, ans2)

    return ans1.toString() === ans2.toString()
};

function preorder(root, ans) {
    // const queue = [root];

    // while (queue.length !== 0) {
    //     let currNode = queue.shift();

    //     if (currNode.left === null && currNode.right === null) {
    //         ans.push(currNode.val)
    //     }

    //     if (currNode.left) {
    //         queue.push(currNode.left);
    //     }

    //     if (currNode.right) {
    //         queue.push(currNode.right)
    //     }
    // }

    const queue = []
    while (root !== null || queue.length !== 0) {
        while (root !== null) {
            queue.push(root);
            root = root.left;
        }

        root = queue.pop();

        if (root.left === null && root.right === null) {
            ans.push(root.val)
        }

        root = root.right
    }
}