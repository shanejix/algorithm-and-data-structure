import TreeNode from "./TreeNode";
import Comparator from "../../utils/Comparator";

export default class BinaryTreeNode extends TreeNode {
  constructor(value = null, compareFunction) {
    super(value, compareFunction);
    this.parent = null;
  }

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

  static coypNode(sourceNode, targetNode) {
    targetNode.setValue(sourceNode.value);
    targetNode.setLeft(sourceNode.left);
    targetNode.setRight(sourceNode.right);
  }
}
