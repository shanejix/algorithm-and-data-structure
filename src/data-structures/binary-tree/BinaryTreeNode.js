import TreeNode from "./TreeNode";

export default class BinaryTreeNode extends TreeNode {
  /**
   * @param {*} value
   * @param {function} compareFunction
   * @return {*}
   */
  constructor(value = null, compareFunction) {
    super(value, compareFunction);
    this.parent = null;
  }

  /**
   * @param {BinaryTreeNode} node
   * @return {BinaryTreeNode}
   */
  setLeft(node) {
    if (this.left) {
      this.left.parent = null;
    }

    this.left = node;

    if (this.left) {
      this.left.parent = this;
    }

    return this;
  }

  /**
   * @param {BinaryTreeNode} node
   * @return {BinaryTreeNode}
   */
  setRight(node) {
    if (this.right) {
      this.right.parent = null;
    }
    this.right = node;

    if (this.right) {
      this.right.parent = this;
    }

    return this;
  }

  /**
   * @param {BinaryTreeNode} nodeToRemove
   * @return {boolean}
   */
  removeChild(nodeToRemove) {
    if (this.left && this.nodeComparator.equal(this.left, nodeToRemove)) {
      // nodeToRemove.parent = null
      this.left = null
      return true
    }
    if (this.right && this.nodeComparator.equal(this.right, nodeToRemove)) {
      // nodeToRemove.parent = null
      this.right = null;
      return true
    }

    return false
  }

  /**
   * @param {BinaryTreeNode} nodeToReplace
   * @param {BinaryTreeNode} replacementNode
   * @return {boolean}
   */
  replaceChild(nodeToReplace, replacementNode) {

    if (!nodeToReplace && !this.replacementNode) {
      return false;
    }

    if (this.left && this.nodeComparator.equal(this.left, nodeToReplace)) {
      this.left = replacementNode
      return true;
    }

    if (this.right && this.nodeComparator.equal(this.right, nodeToReplace)) {
      this.right = replacementNode
      return true
    }

    return false;
  }

  /**
   * @param {BinaryTreeNode} sourceNode
   * @param {BinaryTreeNode} targetNode
   * @return {*}
   */
  static coypNode(sourceNode, targetNode) {
    targetNode.setValue(sourceNode.value);
    targetNode.setLeft(sourceNode.left);
    targetNode.setRight(sourceNode.right);
  }
}
