const BinaryTree = require("./BinaryTree");
const TreeNode = require("./TreeNode");

function BinarySearchTree(root, printer) {
  BinaryTree.call(this, root, printer);
}

BinarySearchTree.prototype = new BinaryTree();
BinarySearchTree.prototype.constructor = BinarySearchTree;

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

// recursive
BinarySearchTree.prototype.add = function (value) {
  if (!this.root) return;

  this.append(this.root, value);
};

// iteration
BinarySearchTree.prototype.insert = function (value) {
  if (!value) return

  if (!this.root) {
    this.root = new TreeNode(value);
  }

  let node = this.root;

  while (node) {
    if (value >= node.value) {
      if (node.right) {
        node = node.right
      } else {
        node.right = new TreeNode(value);
        return;
      }
    } else {
      if (node.left) {
        node = node.left
      } else {
        node.left = new TreeNode(value);
        return;
      }
    }
  }

};

BinarySearchTree.prototype.find = function (value) {
  let node = this.root;

  if (!node || !value) return

  while (node) {
    if (value > node.value) {
      node = node.right;
    } else if (value < node.value) {
      node = node.left;
    } else {
      return true;
    }
  }

  return false
}



module.exports = BinarySearchTree;
