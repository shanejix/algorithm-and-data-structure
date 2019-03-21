// 题目描述
// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
// 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
// 例如输入前序遍历序列{ 1, 2, 4, 7, 3, 5, 6, 8 }
// 和中序遍历序列{ 4, 7, 2, 1, 5, 3, 8, 6 } ，
// 则重建二叉树并返回。


//思路：

//前序遍历的第一个节点就是根节点

//遍历中序遍历，根节点的前的节点是左子树，根节点的后的所有节点是右子树

//递归遍历，左子树和右子树


function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 

function reConstructBinaryTree(pre, vin)
{
    // write code here

    let result = new TreeNode(null);

    if (pre.length > 1) {
        let root = pre[0];
        let idx = vin.indexOf(root);
        let vinleft = vin.slice(0, idx);
        let vinright = vin.slice(idx + 1);
        pre.shift();
        let preleft = pre.slice(0, vinleft.length);
        let preright = pre.slice(vinleft.length);
        result.val = root;
        result.left = reConstructBinaryTree(preleft, vinleft);
        result.right = reConstructBinaryTree(preright, vinright);
    } else if (pre.length == 1) {
        result.val = pre[0];
        result.left = null;
        result.right = null;
    }

    return result;
}