function BinaryTree(root, printer) {
  this.root = root;
  this.printer = printer ? printer : this.innerPrinter;
}

BinaryTree.prototype.innerPrinter = function (value) {
  console.log(value);
};

BinaryTree.prototype.preorderTraversal = function (node, printer) {
  if (node === null) return;

  printer ? printer(node.val) : this.printer(node.val);
  this.preorderTraversal(node.left, printer);
  this.preorderTraversal(node.right, printer);
};

BinaryTree.prototype.inorderTraversal = function (node, printer) {
  if (node === null) return;

  printer ? printer(node.val) : this.inorderTraversal(node.left);
  this.printer(node.val, printer);
  this.inorderTraversal(node.right, printer);
};

BinaryTree.prototype.postorderTraversal = function (node, printer) {
  if (node === null) return;

  this.postorderTraversal(node.left, printer);
  this.postorderTraversal(node.right, printer);
  printer ? printer(node.val) : this.printer(node.val);
};

BinaryTree.prototype.levelOrderTraversal = function (node, printer) {
  if (node === null) return;

  const queue = [];
  queue.push(node);

  while (queue.length) {
    const currNode = queue.shift();

    printer ? printer(node.val) : this.printer(currNode.val);

    if (currNode.left) {
      queue.push(currNode.left);
    }

    if (currNode.right) {
      queue.push(currNode.right);
    }
  }
};

module.exports = BinaryTree;
