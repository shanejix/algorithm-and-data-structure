const BinaryTree = require("./BinaryTree");
const TreeNode = require("./TreeNode");

function BinarySearchTree(root, printer) {
  BinaryTree.call(this, root, printer);
}

BinarySearchTree.prototype = new BinaryTree();
BinarySearchTree.prototype.constructor = BinarySearchTree;

BinarySearchTree.prototype.add = function (value) {
  if (!this.root) return;

  this.append(this.root, value);
};

BinarySearchTree.prototype.append = function (currNode, value) {
  if (value >= currNode.value) {
    if (currNode.right) {
      this.append(currNode.right, value);
    } else {
      let node = new TreeNode(value);
      currNode.right = node;
      this.size++;
    }
  } else {
    if (currNode.left) {
      this.append(currNode.left, value);
    } else {
      let node = new TreeNode(value);
      currNode.left = node;
      this.size++;
    }
  }
};

module.exports = BinarySearchTree;
