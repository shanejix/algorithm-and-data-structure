// 题目描述
// 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。
// 要求不能创建任何新的结点，只能调整树中结点指针的指向。

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

// 改进递归版
// 解题思路：
// 思路与方法二中的递归版一致，新增一个全局变量记录左子树的最后一个节点。
// 记录子树链表的最后一个节点，终结点只可能为只含左子树的非叶节点与叶节点

let  leftLast = null;
function Convert(root) {
        if(root==null)
            return null;
        if(root.left==null&&root.right==null){
            leftLast = root;// 最后的一个节点可能为最右侧的叶节点
            return root;
        }
        //将左子树构造成双链表，并返回链表头节点
    
        let left = Convert(root.left);
        //如果左子树链表不为空的话，将当前root追加到左子树链表
        if(left!=null){
            leftLast.right = root;
            root.left = leftLast;
        }
        leftLast = root;// 当根节点只含左子树时，则该根节点为最后一个节点
        //将右子树构造成双链表，并返回链表头节点
        let right = Convert(root.right);
        //如果右子树链表不为空的话，将该链表追加到root节点之后
        if(right!=null){
            right.left = root;
            root.right = right;
        }
        return left!=null?left:root;       
    }