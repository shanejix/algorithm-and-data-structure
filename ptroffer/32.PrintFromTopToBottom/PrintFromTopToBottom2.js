// 题目描述
// 从上往下打印出二叉树的每个节点，同层节点从左至右打印。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

//思路：层次遍历

/*

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

*/

//拓展：分行打印二叉树

//二叉树是有向图的特例

//按层遍历有向图（广度搜索）；每一层换行打印显示

//借助两个标识：toBePrint;nextLevel

function PrintFromTopToBottom(root)
{
    if (!root) {
        return
    }
    
    let toBePrint = 0;
    let nextLevel = 0;
    let queue = [];

    queue.push(root);
    toBePrint++;

    while (queue.length) {
        let node = queue.shift();
        console.log(node.val);
        toBePrint--;
        if (toBePrint == 0) {
            console.log('\n');
            toBePrint = nextLevel;
            nextLevel = 0;
        }
        if (node.left) {
            queue.push(node.left);
            nextLevel++;
        }
        if (node.right) {
            queue.push(node.right);
            nextLevel++;
        }
    }
}