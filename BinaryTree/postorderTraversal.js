// postoder traversal
const postorderTraversal = function (node) {
  if (!node) return;

  postorderTraversal(node.left);
  postorderTraversal(node.right);
  console.log(node.val);
};

module.exports = postorderTraversal;
