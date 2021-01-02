import BinarySearchTree from "../binary-search-tree/BinarySearchTree";

// Color property name in meta information of the nodes.
const COLOR_PROP_NAME = 'color';

// Possible colors of red-black tree nodes.
const RED_BLACK_TREE_COLORS = {
  red: 'red',
  black: 'black',
};

export default class RedBlackTree extends BinarySearchTree {

  /**
   *
   *
   * @param {*} value
   * @returns {*}  
   */
  insert(value) {
    const insertedNode = super.insert(value);

    if (this.nodeComparator.equal(insertedNode, this.rootNode)) {
      // make root always be black
      this.makeNodeBlack(insertedNode);
    } else {
      // make all newly inserted nodes to be red
      this.makeNodeRed(insertedNode);
    }

    // check all conditions and balance the nodes
    this.balance(insertedNode);

    return insertedNode;
  }

  balance(node) {
    if (this.nodeComparator.equal(this.root, node)) {
      return;
    }

    if (this.isNodeBlack(node.parent)) {
      return;
    }

    const grandParent = node.parent.parent;

    if (node.uncle && this.isNodeRed(node.uncle)) {
      this.makeNodeBlack(node.uncle);
      this.makeNodeRed(node.parent);

      if (!this.nodeComparator.equal(this.root, grandParent)) {
        this.makeNodeRed(grandParent);
      } else {
        return;
      }

      this.balance(grandParent);
    } else if (!node.uncle || this.isNodeBlack(node.uncle)) {

      if (grandParent) {
        let newGrandParent;

        if (this.nodeComparator.equal(grandParent.left, node.parent)) {
          // left rotate 
          if (this.nodeComparator.equal(node.parent.left, node)) {
            // left-left rotate
            newGrandParent = this.leftLeftRotate(grandParent)
          } else {
            // left-right rotate
            newGrandParent = this.leftRightRotate(grandParent)
          }
        } else {
          // right rotate
          if (this.nodeComparator.equal(node.parent.right, node)) {
            // right-right rotate
            newGrandParent = this.rightRightRotate(grandParent);
          } else {
            // right-left rotate
            newGrandParent = this.rightLeftRotate(grandParent)
          }
        }

        if (newGrandParent && newGrandParent.parent === null) {
          this.root = newGrandParent;

          this.makeNodeBlack(this.root)
        }

        this.balance(newGrandParent);
      }
    }
  }

  /**
   *
   *
   * @param {*} grandParentNode
   * @returns {*}  
   */
  leftLeftRotate(grandParentNode) {
    const grandGrandParent = grandParentNode.parent;

    let grandParentNodeIsLeft;

    if (grandGrandParent) {
      grandParentNodeIsLeft = this.nodeComparator.equal(grandGrandParent.left, grandParentNode)
    }

    const parentNode = grandParentNode.left;

    const parentRightNode = parentNode.right;

    parentNode.setRight(grandParentNode);

    grandParentNode.setLeft(parentRightNode);

    if (grandGrandParent) {
      if (grandParentNodeIsLeft) {
        grandGrandParent.setLeft(parentNode);
      } else {
        grandGrandParent.setRight(parentNode);
      }
    } else {
      parentNode.parent = null;
    }

    this.swapNodeColors(parentNode, grandParentNode);

    return parentNode;
  }

  /**
   *
   *
   * @param {*} grandParentNode
   * @returns {*}  
   */
  leftRightRotate(grandParentNode) {
    const parentNode = grandParentNode.left;
    const childNode = parentNode.right

    const childLeftNode = childNode.left;

    childNode.setLeft(parentNode);

    parentNode.setRight(childLeftNode);

    grandParentNode.setLeft(childNode);

    return this.leftLeftRotate(grandParentNode);
  }


  /**
   *
   *
   * @param {*} grandParentNode
   * @returns {*}  
   */
  rightRightRotate(grandParentNode) {
    const grandGrandParent = grandParentNode.parent;

    let grandParentIsLeft;
    if (grandGrandParent) {
      grandParentIsLeft = this.nodeComparator.equal(grandGrandParent.left, grandParentNode);
    }

    const parentNode = grandParentNode.right;

    const parentLeftNode = parentNode.left;

    parentNode.setLeft(grandParentNode);

    grandParentNode.setRight(parentLeftNode);

    if (grandGrandParent) {
      if (grandParentIsLeft) {
        grandGrandParent.setLeft(parentNode);
      } else {
        grandGrandParent.setRight(parentNode);
      }
    } else {
      parentNode.parent = null;
    }

    this.swapNodeColors(parentNode, grandParentNode);

    return parentNode;
  }

  /**
   *
   *
   * @param {*} grandParentNode
   * @returns {*}  
   */
  rightLeftRotate(grandParentNode) {

    const parentNode = grandParentNode.right;
    const childNode = parentNode.left;

    const childRightNode = childNode.right;

    childNode.setRight(parentNode);

    parentNode.setLeft(childRightNode);

    grandParentNode.setRight(childNode);


    return this.rightRightRotate(grandParentNode);

  }

  /**
   *
   *
   * @param {*} node
   * @returns {*}  
   */
  makeNodeRed(node) {
    node.meta.set(COLOR_PROP_NAME, RED_BLACK_TREE_COLORS.red);

    return node
  }

  /**
   *
   *
   * @param {*} node
   * @returns {*}  
   */
  makeNodeBlack(node) {
    node.meta.set(COLOR_PROP_NAME, RED_BLACK_TREE_COLORS.black);

    return node
  }

  /**
   *
   *
   * @param {*} node
   * @returns {*}  {boolean}
   */
  isNodeRed(node) {
    return node.meta.get(COLOR_PROP_NAME) === RED_BLACK_TREE_COLORS.red;
  }

  /**
   *
   *
   * @param {*} node
   * @returns {*}  {boolean}
   */
  isNodeBlack(node) {
    return node.meta.get(COLOR_PROP_NAME) === RED_BLACK_TREE_COLORS.black;
  }

  /**
   *
   *
   * @param {*} node
   * @returns {*}  {boolean}
   */
  isNodeColored(node) {
    return this.isNodeRed(node) || this.isNodeBlack(node);
  }

  /**
   *
   *
   * @param {*} firstNode
   * @param {*} secondNode
   */
  swapNodeColors(firstNode, secondNode) {
    const firstColor = firstNode.meta.get(COLOR_PROP_NAME);
    const secondColor = secondNode.meta.get(COLOR_PROP_NAME);

    firstNode.meta.set(COLOR_PROP_NAME, secondColor);
    secondNode.meta.set(COLOR_PROP_NAME, firstColor);
  }
}
