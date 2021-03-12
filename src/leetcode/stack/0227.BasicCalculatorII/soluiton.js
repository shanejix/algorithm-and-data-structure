// Given a string s which represents an expression, evaluate this expression and return its value. 

// The integer division should truncate toward zero.

//  

// Example 1:

// Input: s = "3+2*2"
// Output: 7
// Example 2:

// Input: s = " 3/2 "
// Output: 1
// Example 3:

// Input: s = " 3+5 / 2 "
// Output: 5
//  

// Constraints:

// 1 <= s.length <= 3 * 105
// s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
// s represents a valid expression.
// All the integers in the expression are non-negative integers in the range [0, 231 - 1].
// The answer is guaranteed to fit in a 32-bit integer.


// 方法一：无括号+乘除优先+转化为加减运算

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    s = s.trim();

    const stack = [];
    let preSign = '+';

    let continue_num = 0;
    for (let i = 0; i < s.length; i++) {

        if (!isNaN(Number(s[i])) && s[i] !== ' ') {
            continue_num = continue_num * 10 + s[i].charCodeAt() - '0'.charCodeAt();
        }

        // 遍历到 符号+-*/ 或者 最后一个字符时 视为结束 
        if (isNaN(Number(s[i])) || i === s.length - 1) {
            switch (preSign) {
                case '+':
                    stack.push(continue_num);
                    break;
                case '-':
                    stack.push(-continue_num);
                    break;
                case '*':
                    stack.push(stack.pop() * continue_num);
                    break;
                default:
                    stack.push(parseInt(stack.pop() / continue_num))
                    break;
            }

            preSign = s[i]
            continue_num = 0;
        }
    }

    let res = 0;
    while (stack.length) {
        res += stack.pop()
    }

    return res
};