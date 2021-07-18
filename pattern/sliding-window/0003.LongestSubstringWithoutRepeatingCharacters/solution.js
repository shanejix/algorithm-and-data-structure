// Given a string s, find the length of the longest substring without repeating characters.

//  

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0
//  

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 方法一：暴力法

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    let len = s.length;

    if (len === 0) {
        return 0
    }

    let ans = 0;
    let set = new Set();

    for (let i = 0; i < len; i++) {
        // 尝试枚举所有 i 的子串
        for (let j = i; j < len; j++) {
            if (set.has(s[j])) {
                ans = Math.max(ans, j - i);
                break;
            } else if (j + 1 === len) {
                ans = Math.max(ans, j - i + 1);
            } else {
                set.add(s[j])
            }
        }
        set.clear()
    }

    return ans
};