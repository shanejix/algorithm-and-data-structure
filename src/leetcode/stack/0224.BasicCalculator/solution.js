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