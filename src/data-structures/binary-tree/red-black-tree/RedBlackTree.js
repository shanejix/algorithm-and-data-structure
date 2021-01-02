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

    if (this.isNodeBlank(node.parent)) {
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
}
