// Given a binary tree and an integer k. The task is to count the number of paths in the tree with the sum of the nodes equals to k.
// A path can start from any node and end at any node and must be downward only, i.e. they need not be root node and leaf node, and negative numbers can also be there in the tree.

// Examples:  

// Input : k = 5  
//         Root of below binary tree:
//            1
//         /     \
//       3        -1
//     /   \     /   \
//    2     1   4     5                        
//         /   / \     \                    
//        1   1   2     6    

// Output : No of paths with sum equals to 5 are: 8
// 3 2 
// 3 1 1 
// 1 3 1 
// 4 1 
// 1 -1 4 1 
// -1 4 2 
// 5 
// 1 -1 5 

// Input : k = 3
//            1
//         /     \
//       2       -1
//     /   \     /   
//    1     2   3                             
//             / \                         
//            2   5        
// Output : No of paths with sum equals to 3 are : 4
// Recommended: Please try your approach on {IDE} first, before moving on to the solution.
// Approach : 
// The implementation of printing paths with path sum equal to k is already discussed in this post using vector. However, storing in vector and recursively moving increases both space and time complexity if we just want to store the count of such paths
// An efficient implementation of the above problem can be done in using backtracking and unordered maps. 

// Steps:  

// We will be using a unordered map which will be filled with various path sum.
// For every node we will check if current sum and root’s value equal to k or not. If the sum equals to k then increment the required answer by one.
// Then we will add all those path sum in map which differs from current sum+root->data value by a constant integer k.
// Then we will be inserting the current sum + root->data value in the map.
// We will recursively check for left and right subtrees of current root
// After the right subtree is also traversed we will remove the current sum + root->data value from the map so that it is not taken into consideration in further traversals of other nodes other than the current root’s
// Below is the implementation of the above approach:

// https://www.geeksforgeeks.org/count-all-k-sum-paths-in-a-binary-tree/


// Javascript program to print all root to leaf
// paths with there relative position
let res;

// Tree structure
class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

// Function to backtrack the tree path and
// add each path sum in the unordered map
function k_paths(root, k, p, sum) {

    // If root is not null
    if (root != null) {

        // If root value and previous sum equal
        // to k then increase the count
        if (sum + root.data == k)
            res++;

        // Add those values also which differes
        // by the current sum and root data by k
        res += p.get(sum + root.data - k) == null ?
            0 : p.get(sum + root.data - k);

        // Insert the sum + root value in the map
        if (!p.has(sum + root.data)) {
            p.set(sum + root.data, 0);
        }
        p.set(sum + root.data, p.get(sum + root.data) + 1);

        // Move to left and right trees
        k_paths(root.left, k, p,
            sum + root.data);
        k_paths(root.right, k, p,
            sum + root.data);

        // Remove the sum + root.data value
        // from the map if they are n not
        // required further or they do no
        // sum up to k in any way
        p.set(sum + root.data, p.get(sum + root.data) - 1);
    }
}

// Function to print the count
// of paths with sum equals to k
function printCount(root, k) {

    // To store the sum
    let p = new Map();

    // Function call
    k_paths(root, k, p, 0);

    // Return the required answer
    return res;
}

// Driver code
res = 0;
let root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(1);
root.left.right = new Node(2);
root.right = new Node(-1);
root.right.left = new Node(3);
root.right.left.left = new Node(2);
root.right.left.right = new Node(5);

let k = 3;
document.write("No of paths with sum " +
    "equals to " + k + " are: " +
    printCount(root, k));

// This code is contributed by divyeshrabadiya07


