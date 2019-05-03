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

/*
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
*/

//拓展：之字形打印二叉树

//保存每一层的节点，根据层数的奇偶性判断打印的顺序

function PrintFromTopToBottom(root) {
    if (!root) {
        return
    }

    let curr = 0;
    let next = 0;
    let level = 1;

    let queue = [];
    let arr = [];

    queue.push(root);
    curr++;

    while (queue.length) {
        let node = queue.pop();
        arr.push(node);
        curr--;

        if (curr == 0) {
            printNode(arr, level);
            console.log('\n');
            curr = next;
            next = 0;
            level;
        }
        if (node.left) {
            queue.push(node.left);
            next++;
        }
        if (node.right) {
            queue.push(node.right);
            next++;
        }
    }
}

function printNode(arr, level) {
    if (level >> 2) {
        for (let i = 0; i < arr.length; i++){
            console.log(arr[i]);
        }
    } else {
        for (let i = arr.length - 1; i >= 0; i--){
            console.log(arr[i]);
        }
    }
}