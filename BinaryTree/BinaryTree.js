function BinaryTree(root, printer) {
  this.root = root;
  this.printer = printer ? printer : this.innerPrinter;
}

BinaryTree.prototype.innerPrinter = function (value) {
  console.log(value);
};

BinaryTree.prototype.preorderTraversal = function (node) {
  if (node === null) return;

  this.printer(node.val);
  this.preorderTraversal(node.left);
  this.preorderTraversal(node.right);
};

BinaryTree.prototype.inorderTraversal = function (node) {
  if (node === null) return;

  this.inorderTraversal(node.left);
  this.printer(node.val);
  this.inorderTraversal(node.right);
};

BinaryTree.prototype.postorderTraversal = function (node) {
  if (node === null) return;

  this.postorderTraversal(node.left);
  this.postorderTraversal(node.right);
  this.printer(node.val);
};

BinaryTree.prototype.levelOrderTraversal = function (node) {
  if (node === null) return;

  const queue = [];
  queue.push(node);

  while (queue.length) {
    const currNode = queue.shift();

    this.printer(currNode.val);

    if (currNode.left) {
      queue.push(currNode.left);
    }

    if (currNode.right) {
      queue.push(currNode.right);
    }
  }
};

module.exports = BinaryTree;
