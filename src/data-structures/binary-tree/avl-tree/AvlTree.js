import BinarySearchTree from "../binary-search-tree/BinarySearchTree";

export default class AvlTree extends BinarySearchTree {
  /**
   * @param {*} value
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
   */
  remove(value) {
    // BinarySearchTree.remove
    super.remove(value);

    //
    this.balance(this.root);
  }

  /**
   * @param {BinarySearchTreeNode} node
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

  /**
   * @param {BinarySearchTreeNode} rootNode
   */
  rotateLeftLeft(rootNode) {
    const leftNode = rootNode.left;
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

  /**
   * @param {BinarySearchTreeNode} rootNode
   */
  rotateLeftRight(rootNode) {
    const leftNode = rootNode.left;
    rootNode.setLeft(null);

    const leftRightNode = leftNode.right;
    leftNode.setRight(null);

    if (leftRightNode.left) {
      leftNode.setRight(leftRightNode.left);
      leftRightNode.setRight(null);
    }

    rootNode.setleft(leftRightNode);

    leftRighNode.setRight(leftNode);

    this.rotateLeftLeft(rootNode);
  }

  /**
   * @param {BinarySearchTreeNode} rootNode
   */
  rotateRightRight(rootNode) {
    const rightNode = rootNode.right;
    rootNode.setRight(null);

    const rightLeftNode = rightNode.left;
    rightNode.setLeft(null);

    if (rightLeftNode.right) {
      rightNode.setLeft(rightLeftNode.right);
      rightLeftNode.setRight(null);
    }

    rootNode.setRight(rightLeftNode);

    rightLeftNode.setRight(rightNode);

    this.rotateRightRight(rootNode);
  }

  /**
   * @param {BinarySearchTreeNode} rootNode
   */
  rotateRightLeft(rootNode) {
    const rightNode = rootNode.right;
    rootNode.setRight(null);

    if (rootNode.parent) {
      rootNode.parent.setRight(rightNode);
    } else if (rootNode.parent === this.root) {
      this.root = rightNode;
    }

    if (rightNode.left) {
      root.setRight(rightNode.left);
    }

    rightNode.setLeft(rootNode);
  }
}
