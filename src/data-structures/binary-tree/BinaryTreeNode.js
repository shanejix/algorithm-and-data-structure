import TreeNode from "./TreeNode";

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
}
