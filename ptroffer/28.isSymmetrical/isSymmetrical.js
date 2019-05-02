// 题目描述
// 请实现一个函数，用来判断一颗二叉树是不是对称的。
// 注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

//思路：发现二叉树的遍历：前序，中序，后序遍历都是先遍历左子树然后遍历右子树

//针对，前序遍历定义一种对称前序遍历方法：先遍历根节点，然后遍历右子树，最后遍历左子树

//如果前序遍历的序列和对称前序遍历的的序列相同，则该树对称——特别注意空节点

function isSymmetrical(pRoot)
{
    isSym(pRoot, pRoot);
}

function isSym(root1, root2) {
    if (root1 == null && root2 == null) {
        return true;
    }

    if (root1 == null || root2 == null) {
        return false;
    }

    if (root1.val != root2.val) {
        return false;
    }

    return isSym(root1.left, root2.right) && isSym(root1.right, root2.left);
}