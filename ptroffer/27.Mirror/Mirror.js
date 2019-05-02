// 题目描述
// 操作给定的二叉树，将其变换为源二叉树的镜像。
// 输入描述:
// 二叉树的镜像定义：源二叉树 
//     	    8
//     	   /  \
//     	  6   10
//     	 / \  / \
//     	5  7 9 11
//     	镜像二叉树
//     	    8
//     	   /  \
//     	  10   6
//     	 / \  / \
//     	11 9 7  5

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 

//思路：前序遍历；非叶节点则交换左右子树

//递归实现

function Mirror(root)
{
    if(root === null) {
        return;
    }
    
    var temp = root.left;
    root.left = root.right;
    root.right = temp;

    Mirror(root.left);
    Mirror(root.right);
}