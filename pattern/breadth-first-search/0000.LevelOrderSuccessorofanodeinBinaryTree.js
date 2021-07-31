// Given a binary tree and a node in the binary tree, find Levelorder successor of the given node. That is, the node that appears after the given node in the level order traversal of the tree.
// Note: The task is not just to print the data of the node, you have to return the complete node from the tree.
// Examples: 


// Consider the following binary tree
//               20            
//            /      \         
//           10       26       
//          /  \     /   \     
//        4     18  24    27   
//             /  \
//            14   19
//           /  \
//          13  15

// Levelorder traversal of given tree is:
// 20, 10, 26, 4, 18, 24, 27, 14, 19, 13, 15

// Input : 24
// Output : 27

// Input : 4
// Output : 18


// Recommended: Please try your approach on {IDE} first, before moving on to the solution.
// Approach: 


// Check if the root is NULL, that is tree is empty. If true then return NULL.
// Check if the given node is root. If true: 
// Check if left child of root exists, if true return left child of root.
// Else, check if right child exists, return it.
// If the root is the only node. Return NULL.
// Otherwise, perform Level Order Traversal on the tree using a Queue.
// At every step of the level order traversal, check if the current node matches with the given node.
// If True, stop traversing any further and return the element at top of queue which will be the next node in the level order traversal.
// Below is the implementation of the above approach:

// https://www.geeksforgeeks.org/level-order-successor-of-a-node-in-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 🎨 方法一：二叉树的按层遍历 

/**
 * 
 * Function to find the Level Order Successor of a given Node in Binary Tree
 * @param {TreeNode} root
 * @param {TreeNode} key
 * @return {number[][]}
 */

function levelOrderSuccessor(root, key) {

    // Base Case
    if (!root) {
        return null
    }

    // If root equals to key
    if (root == key) {

        if (root.left != null) {
            // If left child exists it will be the Postorder Successor
            return root.left;
        } else if (root.right != null) {
            // Else if right child exists it will be the Postorder Successor
            return root.right;
        } else {
            // No Successor
            return null;
        }
    }

    // Create an empty queue for level order traversal
    const queNode = [root];

    while (queNode.length) {

        let currNode = queNode.shift()

        if (currNode.left) {
            queNode.push(currNode.left)
        }

        if (currNode.right) {
            queNode.push(currNode.right)
        }

        if (currNode === key) {
            break;
        }
    }

    return queNode[0]
}
