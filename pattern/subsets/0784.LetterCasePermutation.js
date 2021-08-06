// Given a string s, we can transform every letter individually to be lowercase or uppercase to create another string.

// Return a list of all possible strings we could create. You can return the output in any order.

//  

// Example 1:

// Input: s = "a1b2"
// Output: ["a1b2","a1B2","A1b2","A1B2"]
// Example 2:

// Input: s = "3z4"
// Output: ["3z4","3Z4"]
// Example 3:

// Input: s = "12345"
// Output: ["12345"]
// Example 4:

// Input: s = "0"
// Output: ["0"]
//  

// Constraints:

// s will be a string with length between 1 and 12.
// s will consist only of letters or digits.

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/letter-case-permutation
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


// 🎨 方法一：回溯

// 📝 思路：有bug

/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {

    const ans = [];

    const dfs = (letters, deep, target) => {

        if (target.length === letters.length) {
            ans.push(target.slice().join(''));
            return
        }

        for (let i = deep; i < letters.length; i++) {
            const currLetter = letters[i];

            if (isFinite(currLetter)) {
                target.push(currLetter)
                dfs(letters, deep + 1, target);
                target.pop();
            } else {
                target.push(currLetter.toUpperCase())
                dfs(letters, deep + 1, target);
                target.pop();

                target.push(currLetter.toLowerCase());
                dfs(letters, deep + 1, target);
                target.pop();
            }

        }
    }

    dfs(s, 0, []);

    return ans;

};