import BinarySearchTree from "../01-binary-search-tree/BinarySearchTree";

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
        this.rotateLeftRight(node);
      }
    } else if (node.balanceFactor < -1) {
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
   *
   * @param {BinarySearchTreeNode} rootNode
   */
  rotateLeftRight(rootNode) {
    const leftNode = rootNode.left;
    rootNode.setLeft(null);

    const leftRightNode = leftNode.right;
    leftNode.setRight(null);

    if (leftRightNode.left) {
      leftNode.setRight(leftRightNode.left);
      leftRightNode.setLeft(null);
    }

    rootNode.setLeft(leftRightNode);

    leftRightNode.setLeft(leftNode);

    this.rotateLeftLeft(rootNode);
  }

  /**
   * @param {BinarySearchTreeNode} rootNode
   */
  rotateRightRight(rootNode) {
    const rightNode = rootNode.right;
    rootNode.setRight(null);

    if (rootNode.parent) {
      rootNode.parent.setRight(rightNode);
    } else if (rootNode === this.root) {
      this.root = rightNode;
    }

    if (rightNode.left) {
      rootNode.setRight(rightNode.left);
    }

    rightNode.setLeft(rootNode);
  }

  /**
   * @param {BinarySearchTreeNode} rootNode
   */
  rotateRightLeft(rootNode) {
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
   *
   *
   * @param {*} grand
   * @returns {*}
   */
  balance2(grand) {
    const parent = grand.tallerChild();
    const child = parent.tallerChild();

    if (parent.isLeftChild(grand)) {
      // left
      if (child.isLeftChild(parent)) {
        // left-left
        rotateRight(grand);
      } else {
        // left-right
        rotateLeft(parent);
        rotateRight(grand);
      }
    } else {
      // right
      if (child.isRightChild(parent)) {
        // right-right
        rotateLeft(grand);
      } else {
        // right-left
        rotateRight(parent);
        rotateLeft(grand);
      }
    }
  }

  /**
   *
   *
   * @param {*} rootNode
   */
  rotateLeft(rootNode) {
    const rightNode = rootNode.right;
    rootNode.setRight(null);

    if (rootNode.parent) {
      rootNode.parent.setRight(rightNode);
    } else if (rootNode === this.root) {
      this.root = rightNode;
    }

    if (rightNode.left) {
      rootNode.setRight(rightNode.left);
    }

    rightNode.setLeft(rootNode);
  }

  /**
   *
   *
   * @param {*} rootNode
   */
  rotateRight(rootNode) {
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
   *
   *
   * @param {*} grand
   * @returns {*}
   */
  balance3(grand) {
    const parent = grand.tallerChild();
    const child = parent.tallerChild();

    if (parent.isLeftChild(grand)) {
      // left
      if (child.isLeftChild(parent)) {
        // left-left
        rotate(grand, node, node.right, parent, parent.right, grand);
      } else {
        // left-right
        rotate(grand, parent, node.left, node, node.right, grand);
      }
    } else {
      // right
      if (child.isRightChild(parent)) {
        // right-right
        rotate(grand, grand, parent.left, parent, node.left, node);
      } else {
        // right-left
        rotate(grand, grand, node.left, node, node.right, parent);
      }
    }
  }

  /**
   *
   *
   * @param {*} r
   * @param {*} a
   * @param {*} b
   * @param {*} c
   * @param {*} d
   * @param {*} e
   * @param {*} f
   */
  rotate(r, a, b, c, d, e, f) {
    // d
    d.parent = r.parent;
    if (r.isLeftChild()) {
      r.parent.setLeft(d);
    } else if (r.isRightChild()) {
      r.parent.setRight(d);
    } else {
      this.root = d;
    }

    //b-c
    b.setRight(c);

    // e-f
    f.setLeft(e);

    // b-d-f
    d.setLeft(b);
    d.setRight(f);
  }
}
