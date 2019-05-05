// 题目描述
// 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。
// 要求不能创建任何新的结点，只能调整树中结点指针的指向。

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

//思路：

//二叉搜索树和双向链表的共同特点：

//每个节点都有两个指针——当前节点在二叉树中的左（右）子树对应当前节点在双向链表中的前（后）一个节点

//二叉搜索树的中序遍历序列——吻合双向链表中的序列

function Convert(pRootOfTree) {
    if (pRootOfTree == null) {
        return null;
    }
    if (pRootOfTree.right == null && pRootOfTree.left == null) {
        return pRootOfTree;
    }

    //将左子树构造成双链表，返回链表表头

    var left = Convert(pRootOfTree.left);
    var p = left;
    //定位至左子树双链表最后一个节点
    while (p != null && p.right != null) {
        p = p.right;
    }
    //左子树链表不为空，将当前节点追加到左子树链表
    if (left != null) {
        p.right = pRootOfTree;
        pRootOfTree.left = p;
    }
    
    //将右子树构造成双链表，并返回链表头结点

    var right = Convert(pRootOfTree.right);
    //右子树链表不为空，将该链表加到当前节点之后
    if (right) {
        right.left = pRootOfTree;
        pRootOfTree.right = right;
    }
    
    return left !== null ? left : pRootOfTree;
}