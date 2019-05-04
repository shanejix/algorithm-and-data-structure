// 题目描述
// 输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
// 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
// (注意: 在返回值的list中，数组长度大的数组靠前)

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

//思路：

//根节点到叶节点——前序遍历；（深度优先）

//用栈保存路径，用sum保存求和

function FindPath(root, expectNumber) {
    if (!root) {
        return null;
    }

    let stack = [];
    let path = [];
    let sum = 0;

    dfs(root, expectNumber);

    if (path.length !== 0) {
        path.forEach(ele => {
            console.log(ele);
        })
    } else {
        return null
    }
}

function dfs(root, expectNumber) {

    sum += root.val;
    stack.push(root.val);
    if (sum == expectNumber && !root.left && !root.right) {
        path.push(stack);
    }

    if (root.left) dfs(root.left);


    if (root.right) dfs(root.right);

    sum -= root.val;
    stack.pop();

}