// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

//  

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
//  

// Constraints:

// 0 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    function hasCommonFix(strs, letter, idx) {
        let flag = true;
        for (let s of strs) {
            if (idx > s.length || s[idx] !== letter) {
                flag = false
            }
        }
        return flag
    }

    if (strs.length === 0) return '';

    if (strs.length === 1) return strs[0];

    let res = '';

    for (let i = 0; i < strs[0].length; i++) {
        let letter = strs[0][i];
        if (hasCommonFix(strs, letter, i)) {
            res += letter
        } else {
            break
        }
    }

    return res;
};