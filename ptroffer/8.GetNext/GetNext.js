// 题目描述
// 给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。
// 注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。

/**
 * 
 * 思路：
 * 
 * 1.如果该节点有右子树，则找右子树的最左节点
 * 
 * 2.没右子树，则找第一个当前节点是父节点有左孩子的节点
 * 
 * 3.否则就是根节点（尾结点），仍没找到，则返回null
 * 
 */
function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}
function GetNext(pNode)
{
    if (pNode == null) {
        return null;
    } else if (pNode.right !== null) {//如果有右子树，则找右子树的最左节点
        let root = pNode.right;
        while (root.left) {
            root = root.left;
        }
        return root;
    }
    //没右子树，则找第一个当前节点是父节点有左孩子的节点
    while(pNode.next!==null){
        if(pNode.next.left===pNode)
            return pNode.next;
        pNode = pNode.next;
    }

    return null;
}