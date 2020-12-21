import Comparator from "../../utils/Comparator";

export default class TreeNode {
  /**
   * @param {*} value
   * @param {function} compareFunction
   * @return {*}
   */
  constructor(value = null, compareFunction = null) {
    this.left = null;
    this.right = null;
    this.value = value;

    // to compare binary tree node
    this.nodeComparator = new Comparator();
    // to compare binary tree node value
    this.nodeValueComparator = new Comparator(compareFunction);
  }

  /**
   * @param {*} value
   * @return {TreeNode}
   */
  setValue(value) {
    this.value = value;
    return this;
  }

  /**
   * @return {[]}
   */
  inorderTraversal() {
    let traversal = [];

    if (this.left) {
      traversal = traversal.concat(this.left.inorderTraversal());
    }

    traversal.push(this.value);

    if (this.right) {
      traversal = traversal.concat(this.right.inorderTraversal());
    }

    return traversal;
  }

  /**
   * @return {string}
   */
  toString() {
    return this.inorderTraversal().toString();
  }
}
