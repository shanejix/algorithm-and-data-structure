import BinarySearchTreeNode from './BinarySearchTreeNode'

export default class BinarySearchTree {
    /**
     * @param {function} nodeValueCompareFunction
     * @return {*}
     */
    constructor(nodeValueCompareFunction) {
        this.root = new BinarySearchTreeNode(null, nodeValueCompareFunction);
    }

    /**
     * @param {*} value
     * @return {BinarySearchTreeNode}
     */
    insert(value) {
        return this.root.insert(value);
    }

    /**
     * @param {*} value
     * @return {boolean}
     */
    contains(value) {
        return this.root.contains(value);
    }

    /**
     * @param {*} value
     * @return {boolean | Error}
     */
    remove(value) {
        return this.root.remove(value)
    }

    /**
     * @param {*} value
     * @return {BinarySearchTreeNode}
     */
    find(value) {
        return this.root.find(value);
    }

    /**
     * @return {string}
     */
    toString() {
        return this.root.toString();
    }
}