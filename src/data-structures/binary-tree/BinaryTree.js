function BinaryTree(root, printer) {
  this.root = root;
  this.size = root ? 1 : 0;
  this.printer = printer ? printer : this.innerPrinter;
}

BinaryTree.prototype.sizing = function () {
  return this.size;
};

BinaryTree.prototype.innerPrinter = function (value) {
  console.log(value);
};

BinaryTree.prototype.preorderTraversal = function (node, printer) {
  if (node === null) return;

  printer ? printer(node.value) : this.printer(node.value);
  this.preorderTraversal(node.left, printer);
  this.preorderTraversal(node.right, printer);
};

BinaryTree.prototype.inorderTraversal = function (node, printer) {
  if (node === null) return;

  printer ? printer(node.value) : this.inorderTraversal(node.left);
  this.printer(node.value, printer);
  this.inorderTraversal(node.right, printer);
};

BinaryTree.prototype.postorderTraversal = function (node, printer) {
  if (node === null) return;

  this.postorderTraversal(node.left, printer);
  this.postorderTraversal(node.right, printer);
  printer ? printer(node.value) : this.printer(node.value);
};

BinaryTree.prototype.levelOrderTraversal = function (node, printer) {
  if (node === null) return;

  const queue = [];
  queue.push(node);

  while (queue.length) {
    const currNode = queue.shift();

    printer ? printer(node.value) : this.printer(currNode.value);

    if (currNode.left) {
      queue.push(currNode.left);
    }

    if (currNode.right) {
      queue.push(currNode.right);
    }
  }
};

module.exports = BinaryTree;
