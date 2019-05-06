// 题目描述
// 请实现两个函数，分别用来序列化和反序列化二叉树

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

let arr = [];

function Serialize(pRoot) {
    if (!pRoot) {
        arr.push('$');
    }
    else {
        arr.push(pRoot.val);
        Serialize(pRoot.left);
        Serialize(pRoot.right);
    }
}
function Deserialize(s) {
    let node = null;
    if (arr.length < 1) {
        return null;
    }

    let num = arr.shift();
    if (typeof num === 'number') {
        node = new TreeNode(num);
        node.left = Deserialize(arr);
        node.right = Deserialize(arr);
    }
    return node;
}