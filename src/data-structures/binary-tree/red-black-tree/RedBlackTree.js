import BinarySearchTree from "../binary-search-tree/BinarySearchTree";

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

  /**
   *
   * @param {*} value
   */
  remove(value) { }

  balance(node) { }

  makeNodeRed(node) { }

  makeNodeBlack(node) { }
}
