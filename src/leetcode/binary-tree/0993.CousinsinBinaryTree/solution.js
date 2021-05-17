// In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

// Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

// We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

// Return true if and only if the nodes corresponding to the values x and y are cousins.

//  

// Example 1:


// Input: root = [1,2,3,4], x = 4, y = 3
// Output: false
// Example 2:


// Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
// Output: true
// Example 3:



// Input: root = [1,2,3,null,4], x = 2, y = 3
// Output: false
//  

// Constraints:

// The number of nodes in the tree will be between 2 and 100.
// Each node has a unique integer value from 1 to 100.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 方法一，深度优先搜索

/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    let xparent = null;
    let xdepth = null
    let xfound = false;

    let yparent = null;
    let ydepth = null
    let yfound = false;

    /**
     *  dfs
     * @param {*} node 
     * @param {*} depth 
     * @param {*} parent 
     */
    function dfs(node, depth, parent) {
        if (!node) {
            return
        }

        if (node.val === x) {
            xparent = parent;
            xdepth = depth
            xfound = true
        } else if (node.val === y) {
            yparent = parent;
            ydepth = depth;
            yfound = true;
        }

        // 两个节点同时找到可以提前推出遍历
        if (xfound && yfound) {
            return
        }

        dfs(node.left, depth + 1, node);

        if (xfound && yfound) {
            return;
        }

        dfs(node.right, depth + 1, node)
    };

    dfs(root, 0, null);

    return xparent !== yparent && xdepth === ydepth;
};


// 方法二，广度优先搜索

/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    let xparent = null;
    let xdepth = null
    let xfound = false;

    let yparent = null;
    let ydepth = null
    let yfound = false;

    /**
     * 判断是否遍历到 x 或者 y
     * @param {*} node 
     * @param {*} parent 
     * @param {*} depth 
     */
    function check(node, parent, depth) {
        if (node.val === x) {
            xparent = parent;
            xdepth = depth;
            xfound = true
        } else if (node.val === y) {
            yparent = parent
            ydepth = depth;
            yfound = true
        }
    }

    // 辅助队列：[node , depth]
    const queue = [[root, 0]]
    check(root, null, 0)

    while (queue.length) {
        let [node, depth] = queue.shift();

        if (node.left) {
            queue.push([node.left, depth + 1])
            check(node.left, node, depth + 1);
        }

        if (node.right) {
            queue.push([node.right, depth + 1])
            check(node.right, node, depth + 1)
        }

        if (xfound && yfound) {
            break;
        }
    }

    return xdepth === ydepth && xparent !== yparent
};