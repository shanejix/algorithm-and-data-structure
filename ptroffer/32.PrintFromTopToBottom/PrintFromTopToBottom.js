// 题目描述
// 从上往下打印出二叉树的每个节点，同层节点从左至右打印。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

//思路：层次遍历

function PrintFromTopToBottom(root)
{
    if (!root) {
        return
    }
    
    let queue = [];
    queue.push(root);

    while (queue.length) {
        let node = queue.shift();
        console.log(node.val);
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
}