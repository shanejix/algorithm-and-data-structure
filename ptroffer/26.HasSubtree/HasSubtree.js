// 题目描述
// 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 

//思路：递归；理由短路特性；

function HasSubtree(pRoot1, pRoot2)
{
    if (pRoot1 == null || pRoot2 == null) {
        return false;
    }

    return isSubtree(pRoot1, pRoot2) || isSubtree(pRoot1.left, pRoot2) || isSubtree(pRoot1.right, pRoot2);
}

function isSubtree(pRootA,pRootB) {
    if (pRootB == null) {
        return true;
    }

    if (pRootA == null) {
        return false;
    }

    if (pRootA.val == pRootB.val) {
        return isSubtree(pRootA.left, pRootB.left) && isSubtree(pRootA.right,pRootB.right);
    } else {
        return false;
    }
}