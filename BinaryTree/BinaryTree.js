function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function BinaryTree(root) {
  this.root = root;
}

BinaryTree.prototype.preorderTraversal = function (node) {
  if (node === null) return;

  console.log(node.val);
  this.preorderTraversal(node.left);
  this.preorderTraversal(node.right);
};

BinaryTree.prototype.inorderTraversal = function (node) {
  if (node === null) return;

  this.inorderTraversal(node.left);
  console.log(node.val);
  this.inorderTraversal(node.right);
};

BinaryTree.prototype.postorderTraversal = function (node) {
  if (node === null) return;

  this.postorderTraversal(node.left);
  this.postorderTraversal(node.right);
  console.log(node.val);
};

BinaryTree.prototype.levelOrderTraversal = function (node) {
  if (node === null) return;

  const queue = [];
  queue.push(node);

  while (queue.length) {
    const currNode = queue.shift();
    console.log(currNode.val);

    if (currNode.left) {
      queue.push(currNode.left);
    }

    if (currNode.right) {
      queue.push(currNode.right);
    }
  }
};

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

console.log("tree--------------------------------");
console.log(tree);
console.log("pre --------------------------------");
tree.preorderTraversal(tree.root);
console.log("in  --------------------------------");
tree.inorderTraversal(tree.root);
console.log("post--------------------------------");
tree.postorderTraversal(tree.root);
console.log("leve--------------------------------");
tree.levelOrderTraversal(tree.root);
