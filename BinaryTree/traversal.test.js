const TreeNode = require("./TreeNode");
const preorderTraversal = require("./preorderTraversal");
const inorderTraversal = require("./inorderTraversal");
const postorderTraversal = require("./postorderTraversal");
const levelOrderTraversal = require("./levelOrderTraversal");

// test
let root = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
let node6 = new TreeNode(6);
let node7 = new TreeNode(7);

root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;

console.log(root);
console.log("--------------------------------");
preorderTraversal(root);
console.log("--------------------------------");
inorderTraversal(root);
console.log("--------------------------------");
postorderTraversal(root);
console.log("--------------------------------");
levelOrderTraversal(root);
console.log("--------------------------------");
