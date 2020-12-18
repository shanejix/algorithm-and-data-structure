const BinaryTree = require("./BinaryTree");
const TreeNode = require("./TreeNode");

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

const tree = new BinaryTree(root);

// const tree = new BinaryTree(root, function (value) {
//   console.log("(", value, ")");
// });

console.log("tree--------------------------------");
console.log(tree);
console.log("pre --------------------------------");
tree.preorderTraversal(tree.root, function (value) {
  console.log("xxx", value);
});
console.log("in  --------------------------------");
tree.inorderTraversal(tree.root);
console.log("post--------------------------------");
tree.postorderTraversal(tree.root);
console.log("leve--------------------------------");
tree.levelOrderTraversal(tree.root);
