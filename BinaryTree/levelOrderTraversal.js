// level oder traversal
const levelOrderTraversal = function (node) {
  if (!node) return;

  const queue = [];

  queue.push(node);

  while (queue.length > 0) {
    const currNode = queue.shift();
    console.log(currNode.val);

    if (currNode.left !== null) {
      queue.push(currNode.left);
    }

    if (currNode.right !== null) {
      queue.push(currNode.right);
    }
  }
};

module.exports = levelOrderTraversal;
