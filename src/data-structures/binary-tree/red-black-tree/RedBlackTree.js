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
    this.balance();

    return insertedNode;
  }

  balance(node) {

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
