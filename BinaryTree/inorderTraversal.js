// inoder traversal
const inorderTraversal = function (node) {
  if (!node) return;

  inorderTraversal(node.left);
  console.log(node.val);
  inorderTraversal(node.right);
};

module.exports = inorderTraversal;
