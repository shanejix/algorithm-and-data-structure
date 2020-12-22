import BinarySearchTree from '../binary-search-tree/BinarySearchTree';

export default class AvlTree extends BinarySearchTree {
  /**
   * @param {*} value
   * @return {*}
   */
  insert(value) {
    // BinarySearchTree.insert
    super.insert(value);

    // move up from current node to root to check balance factors
    let currentNode = this.root.find(value);
    while (currentNode) {
      this.balance(currentNode);
      currentNode = currentNode.parent;
    }
  }

  /**
   * @param {*} value
   * @return {*}
   */
  remove(value) {
    // BinarySearchTree.remove
    super.remove(value);

    // 
    this.balance(this.root)

  }

  /**
   * @param {BinarySearchTreeNode} node
   * @return {*}
   */
  balance(node) {
    // balance factor is not ok
    if (node.balanceFactor > 1) {
      // left rotate
      if (node.left.balanceFactor > 0) {
        // left-left rotate
        this.rotateLeftLeft(node);
      } else if (node.left.balanceFactor < 0) {
        // left-right rotate
        this.rotateLefRight(node);
      }
    } else if (node.balanceFactor > -1) {
      // right rotate
      if (node.right.balanceFactor < 0) {
        // right-right rotate
        this.rotateRightRight(node);
      } else if (node.right.balanceFactor > 0) {
        // right-left rotate
        this.rotateRightLeft(node);
      }
    }
  }

  rotateLeftLeft(rootNode) {
    const leftNode = rootNode.left
    rootNode.setLeft(null);

    if (rootNode.parent) {
      rootNode.parent.setLeft(leftNode);
    } else if (rootNode === this.root) {
      this.root = leftNode;
    }

    if (leftNode.right) {
      rootNode.setLeft(leftNode.right);
    }

    leftNode.setRight(rootNode);
  }

  rotateLeftRight(rootNode) { }

  rotateRightRight(rootNode) { }

  rotateRightLeft(rootNode) { }

}