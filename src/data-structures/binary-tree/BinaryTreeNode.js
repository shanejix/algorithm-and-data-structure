import TreeNode from "./TreeNode";

export default class BinaryTreeNode extends TreeNode {


  /**
   * Creates an instance of BinaryTreeNode.
   * @param {*} [value=null]
   * @param {*} compareFunction
   */
  constructor(value = null, compareFunction) {
    super(value, compareFunction);
    this.parent = null;
  }

  /**
   * @returns {number}  
   */
  get leftHeight() {
    if (!this.left) {
      return 0;
    }

    return this.left.height + 1;
  }

  /**
   * @returns {number}  
   */
  get rightHeight() {
    if (!this.right) {
      return 0;
    }

    return this.right.height + 1;
  }

  /**
   * @returns {number}  
   */
  get height() {
    return Math.max(this.leftHeight, this.rightHeight)
  }

  /**
   * @returns {number}  
   */
  get balanceFactor() {
    return this.leftHeight - this.rightHeight
  }


  /**
   *
   *
   * @returns {BinaryTreeNode}
   */
  get uncle() {
    if (!this.parent) {
      return undefined;
    }

    if (!this.parent.parent) {
      return undefined
    }

    if (!this.parent.parent.left || !this.parent.parent.right) {
      return undefined;
    }

    if (this.nodeComparator.equal(this.parent, this.parent.parent.left)) {
      return this.parent.parent.right
    }

    return this.parent.parent.left
  }

  /**
   * @param {*} node
   * @returns {*}  
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
