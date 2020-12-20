import BinaryTreeNode from "../BinaryTreeNode";

export default class BinarySearchTreeNode {
  constructor(value, compareFunction) {
    super(value, compareFunction);
    this.compareFunction = compareFunction;
  }

  insert(value) {
    // curr.node.value === null
    if (this.nodeValueComparator.equal(this.value, null)) {
      this.value = value;
      return this;
    }

    // curr.node.value < value
    if (this.nodeValueComparator.lessThan(this.value, value)) {
      // curr.node !== null
      if (this.right) {
        return this.right.insert(value);
      }

      // curr.node.right === null
      const newNode = new BinaryTreeNode(value, this.compareFunction);
      this.setRight(newNode);

      return newNode;
    }

    // curr.node.value > value
    if (this.nodeValueComparator.greaterThan(this.value, value)) {
      // curr.node.left !== null
      if (this.left) {
        return this.left.insert(value);
      }

      // curr.node.left === null
      const newNode = new BinaryTreeNode(value, this, compareFunction);
      this.setLeft(newNode);

      return newNode;
    }

    // curr.node.value === value
    return this;
  }

  find(value) {
    if (this.nodeValueComparator.equal(this.value, null)) {
      return null
    }

    if (this.nodeValueComparator.equal(this.value, value)) {
      return this
    }

    if (this.nodeValueComparator.lessThan(this.value, value)) {
      if (this.right) {
        this.right.find(value)
      }
      return null
    }

    if (this.nodeValueComparator.greaterThan(this.value, value)) {
      if (this, left) {
        this.left.find(value)
      }
      return null
    }
  }

  delete(value) { }

  add(value) { }
}
