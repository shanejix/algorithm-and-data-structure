// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



//  

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]
//  

// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {

    const lettersArr = [
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z']
    ]

    const digitsArr = digits.split('');
    const res = [];

    if (digitsArr.length === 0) return res;

    // 存储每一层选择的字母
    const str = new Array(digitsArr.length).fill(-1);

    dfs(0);

    function dfs(idx) {

        // 终止搜索
        if (idx === digitsArr.length) {
            res.push(str.join(''));
            return;
        }

        // 枚举当前层的所有值
        let letters = lettersArr[digitsArr[idx].charCodeAt() - '2'.charCodeAt()];

        for (let letter of letters) {
            // 存储路径上的值
            str[idx] = letter;
            // 深度搜索
            dfs(idx + 1)
        }
    }

    return res;
};



