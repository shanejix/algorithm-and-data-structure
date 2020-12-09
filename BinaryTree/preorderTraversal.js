// preoder traversal
const preorderTraversal = function (node) {
  if (!node) return;

  console.log(node.val);
  preorderTraversal(node.left);
  preorderTraversal(node.right);
};

module.exports = preorderTraversal;
