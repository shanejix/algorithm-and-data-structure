// Check if there is a root to leaf path with given sequence
// Difficulty Level : Easy
// Last Updated : 30 Apr, 2020
// Given a binary tree and an array, the task is to find if the given array sequence is present as a root to leaf path in given tree.

// Examples :

// Input : arr[] = {5, 2, 4, 8} for above tree
// Output: "Path Exist"

// Input :  arr[] = {5, 3, 4, 9} for above tree
// Output: "Path does not Exist"
// Recommended: Please try your approach on {IDE} first, before moving on to the solution.
// A simple solution for this problem is to find all root to leaf paths in given tree and for each root to leaf path check that path and given sequence in array both are identical or not.

// An efficient solution for this problem is to traverse the tree once and while traversing the tree we have to check that if path from root to current node is identical to the given sequence of root to leaf path. Here is the algorithm :

// Start traversing tree in preorder fashion.
// Whenever we moves down in tree then we also move by one index in given sequence of root to leaf path .
// If current node is equal to the arr[index] this means that till this level of tree path is identical.
// Now remaining path will either be in left subtree or in right subtree.
// If any node gets mismatched with arr[index] this means that current path is not identical to the given sequence of root to leaf path, so we return back and move in right subtree.
// Now when we are at leaf node and it is equal to arr[index] and there is no further element in given sequence of root to leaf path, this means that path exist in given tree.

// https://www.geeksforgeeks.org/check-root-leaf-path-given-sequence/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// Function to check given sequence of root to leaf path exist in tree or not.
// index : current element in sequence of root to leaf path
// n : arr.length
function existPath(root, arr, n, index) {

    if (root == null) {
        return n === 0
    }

    return existPathUtil(root, arr, n, 0);
}

function existPathUtil(root, arr, n, index) {
    // If root is NULL or reached end of the array
    if (root == null || index === n) {
        return false;
    }

    // If current node is leaf
    if (root.left == null && root.right == null) {
        if ((root.data == arr[index]) && (index == n - 1)) {
            return true;
        }

        return false;
    }

    // If current node is equal to arr[index] this means
    // that till this level path has been matched and
    // remaining path can be either in left subtree or
    // right subtree.
    return (
        (index < n) && (root.data == arr[index]) && (
            existPathUtil(root.left, arr, n, index + 1) ||
            existPathUtil(root.right, arr, n, index + 1)
        )
    );
}