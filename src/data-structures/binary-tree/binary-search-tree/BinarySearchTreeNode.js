import BinaryTreeNode from "../BinaryTreeNode";

export default class BinarySearchTreeNode extends BinaryTreeNode {
  /**
   * @param {*} value
   * @param {function} compareFunction
   * @return {*}
   */
  constructor(value, compareFunction) {
    super(value, compareFunction);

    this.compareFunction = compareFunction;
  }

  /**
   * @param {*} value
   * @return {BinarySearchTreeNode}
   */
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
      const newNode = new BinarySearchTreeNode(value, this.compareFunction);
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
      const newNode = new BinarySearchTreeNode(value, this.compareFunction);
      this.setLeft(newNode);

      return newNode;
    }

    // curr.node.value === value
    return this;
  }

  /**
   * @param {*} value
   * @return {boolean}
   */
  find(value) {
    if (this.nodeValueComparator.equal(this.value, value)) {
      return this
    }

    if (this.nodeValueComparator.lessThan(this.value, value) && this.right) {
      return this.right.find(value)
    }

    if (this.nodeValueComparator.greaterThan(this.value, value) && this.left) {
      return this.left.find(value)
    }

    return null
  }

  /**
   * @param {*} value
   * @return {boolean | Error}
   */
  remove(value) {
    const nodeToRemove = this.find(value)

    if (!nodeToRemove) {
      throw new Error('item not exit in this tree')
    }

    const parent = nodeToRemove.parent;

    // degree === 0 node is a leaf and has no child
    if (!nodeToRemove.left && !nodeToRemove.right) {
      if (parent) {
        parent.removeChild(nodeToRemove)
      } else {
        nodeToRemove.setValue(null)
      }
    }
    // degree === 2 has tew children
    else if (nodeToRemove.left && nodeToRemove.right) {
      const nextBiggerNode = nodeToRemove.right.findMin();

      if (!this.nodeComparator.equal(nextBiggerNode, nodeToRemove.right)) {
        this.remove(nextBiggerNode.value);
        nodeToRemove.setValue(nextBiggerNode.value)
      } else {
        nodeToRemove.setValue(nodeToRemove.right.value);
        nodeToRemove.setRight(nodeToRemove.right.right);
      }
    }
    // degree === 1 has only one child
    else {
      const childNode = nodeToRemove.left || nodeToRemove.right;

      if (parent) {
        parent.replaceChild(nodeToRemove, childNode)
        // childNode.parent = parent
      } else {
        BinaryTreeNode.coypNode(childNode, nodeToRemove)
      }
    }

    nodeToRemove.parent = null;

    return true;
  }

  /**
   * @param {*} value
   * @return {boolean}
   */
  contains(value) {
    return !!this.find(value)
  }

  /**
   * @return {BinarySearchTreeNode}
   */
  findMin() {
    if (!this.left) {
      return this
    }

    return this.left.findMin();
  }
}
