// One way to serialize a binary tree is to use pre-order traversal. When we encounter a non-null node, we record the node's value. If it is a null node, we record using a sentinel value such as #.

//      _9_
//     /   \
//    3     2
//   / \   / \
//  4   1  #  6
// / \ / \   / \
// # # # #   # #
// For example, the above binary tree can be serialized to the string "9,3,4,#,#,1,#,#,2,#,6,#,#", where # represents a null node.

// Given a string of comma separated values, verify whether it is a correct preorder traversal serialization of a binary tree. Find an algorithm without reconstructing the tree.

// Each comma separated value in the string must be either an integer or a character '#' representing null pointer.

// You may assume that the input format is always valid, for example it could never contain two consecutive commas such as "1,,3".

// Example 1:

// Input: "9,3,4,#,#,1,#,#,2,#,6,#,#"
// Output: true
// Example 2:

// Input: "1,#"
// Output: false
// Example 3:

// Input: "9,#,#,1"
// Output: false


// 方法一：栈+迭代（递归思路）

/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {

    const stack = [];

    const pre_order = preorder.split(',');

    // console.log(pre_order);

    for (let i = 0; i < pre_order.length; i++) {

        stack.push(pre_order[i]);

        while (stack.length >= 3 && stack[stack.length - 1] === '#' && stack[stack.length - 2] === '#' && stack[stack.length - 3] !== '#') {
            stack.pop();
            stack.pop();
            stack.pop();
            stack.push('#')
        }
    }

    return stack.length === 1 && stack[stack.length - 1] === '#';
};

// 方法二：计算入度出度

/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
    const pre_order = preorder.split(',');

    // 考虑根节点 出度为2 入度为 0  计算结果 diff == 2；此处为了方便根节点计算
    let diff = 1; // diff 其实就是当前槽位

    for (let i = 0; i < pre_order.length; i++) {

        // 入度 - 1
        diff = diff - 1;

        // 槽位 < 0  - 当前槽位不足不合法
        if (diff < 0) {
            return false;
        }

        // 非叶子节点 出度 + 2 
        if (pre_order[i] !== '#') {
            diff = diff + 2;
        }

    }

    // 槽位刚好被填满 - 合法
    return diff === 0;
};


// 方法三：槽位 + 栈

/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
    const pre_order = preorder.split(',');

    const stack = [];

    stack.push(1);

    for (let i = 0; i < pre_order.length; i++) {
        if (stack.length === 0) {
            return false;
        }

        if (pre_order[i] === '#') {
            stack[stack.length - 1] = stack[stack.length - 1] - 1;

            if (stack[stack.length - 1] === 0) {
                stack.pop();
            }
        } else {
            // 不是 # 即为 数字

            stack[stack.length - 1] = stack[stack.length - 1] - 1;

            if (stack[stack.length - 1] === 0) {
                stack.pop();
            }

            stack.push(2);

        }
    }

    return stack.length === 0;
};