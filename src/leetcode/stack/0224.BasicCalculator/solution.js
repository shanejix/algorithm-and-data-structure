// Given a string s representing an expression, implement a basic calculator to evaluate it.

//  

// Example 1:

// Input: s = "1 + 1"
// Output: 2
// Example 2:

// Input: s = " 2-1 + 2 "
// Output: 3
// Example 3:

// Input: s = "(1+(4+5+2)-3)+(6+8)"
// Output: 23
//  

// Constraints:

// 1 <= s.length <= 3 * 105
// s consists of digits, '+', '-', '(', ')', and ' '.
// s represents a valid expression.


// 方法一： 语言特性

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    return eval(s);
};

// 方法二：双栈法

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {

    // 存放所有数字
    const nums = [];

    // 防止第一个数字为负数，在第一个位置添加一个0
    nums.push(0)

    // 将所有的空格去掉
    s = s.replaceAll(' ', '');

    // 将 (- 替换为 (0-
    s = s.replaceAll('\\(-', '(0-')

    // 存放所有的操作，包括 + -
    const ops = [];

    let n = s.length;

    let cs = s.split('');

    for (let i = 0; i < n; i++) {
        let c = cs[i];

        if (c === '(') {
            ops.push(c);
        } else if (c === ')') {
            // 计算到最后一个左括号为止
            while (ops.length !== 0) {
                let op = ops[ops.length - 1];

                if (op != '(') {
                    calc(nums, ops)
                } else {
                    ops.pop();
                    break;
                }
            }
        } else {
            if (isNum(c)) {
                let u = 0;
                let j = i;

                // 将从i位置开始后面的连续数字整体取出来，加入nums
                while (j < n && isNum(cs[j])) {
                    u = u * 10 + cs[j];
                    j++;
                }

                nums.push(u);

                i = j - 1;
            } else {
                // 新操作符入栈
                while (ops.length !== 0 && ops[ops.length - 1] !== '(') {
                    calc(nums, ops);
                }

                ops.push(c);
            }
        }
    }

    while (!ops.length === 0) {
        calc(nums, ops);
    }

    return nums[nums.length - 1];
};

function calc(nums, ops) {
    if (nums.length === 0 || nums.length < 2) return;
    if (ops.length === 0) return;

    let b = nums.pop, a = nums.pop();
    let op = ops.pop();

    nums.push(op === '+' ? a + b : a - b)
}

function isNum(s) {
    return !!Number(s)
}