import BinarySearchTreeNode from './BinarySearchTreeNode'


export default class BinarySearchTree {
    constructor(nodeValueCompareFunction) {
        this.root = new BinarySearchTreeNode(null, nodeValueCompareFunction);
    }

    insert(value) {
        return this.root.insert(value);
    }

    contains(value) {
        return this.root.contains(value);
    }

    remove(value) {
        return this.root.remove(value)
    }

    find(value) {
        return this.root.find(value);
    }

    toString() {
        return this.root.toString();
    }
}