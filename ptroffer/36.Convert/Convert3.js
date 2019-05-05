// 题目描述
// 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。
// 要求不能创建任何新的结点，只能调整树中结点指针的指向。

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

//思路：中序遍历
function Convert(pRootOfTree) { 
    if (pRootOfTree == null) {
        return null;
    }
    let pre = null;

    convertNode(pRootOfTree, pre);

    let res = pRootOfTree;
    while (res.left) {
        res = res.left;
    }
    
    return res;
}

function convertNode(curr, pre) {
    if (curr == null) {
        return;
    }
    convertNode(curr.left, pre);

    curr.left = pre;
    if (pre) {
        pre.right = curr;
    }
    pre = curr;

    convertNode(cuur.right, pre);
}