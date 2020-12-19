import Comparator from "../../utils/Comparator";

export default class BinaryTreeNode {
  constructor(value = null) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.value = value;

    // used to compare binary tress nodes with each other
    this.nodeComparator = new Comparator();
  }

  setValue(value) {
    this.value = value;
    return this;
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
