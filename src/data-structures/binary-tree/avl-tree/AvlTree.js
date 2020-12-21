import BinarySearchTree from '../binary-search-tree/BinarySearchTree';

export default class AvlTree extends BinarySearchTree{
  /**
   * @param {*} value
   * @return {*}
   */
  insert(value){
    // BinarySearchTree.insert
    super.insert(value);

    // move up from current node to root to check balance factors
    let currentNode = this.root.find(value);
    while (currentNode){
      this.balance(currentNode);
      currentNode = currentNode.parent;
    }
  }

  /**
   * @param {*} value
   * @return {*}
   */
  remove(value){
    // BinarySearchTree.remove
    super.remove(value);

    // 
    this.balance(this.root)

  }

  /**
   * @param {*} node
   * @return {*}
   */
  balance(node){

  }

}