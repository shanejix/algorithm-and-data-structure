// Given a string s, sort it in decreasing order based on the frequency of characters, and return the sorted string.

//  

// Example 1:

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input: s = "Aabb"
// Output: "bbAa"
// Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.
//  

// Constraints:

// 1 <= s.length <= 5 * 105
// s consists of English letters and digits.

// 方法一：出现频率排序

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {

    let freq = new Map();
    for (let c of s) {
        freq.set(c, (freq.get(c) || 0) + 1)
    }


    let list = [...freq.keys()];
    list.sort((a, b) => freq.get(b) - freq.get(a))

    const ans = [];
    for (let k of list) {

        let count = freq.get(k);

        while (count) {
            ans.push(k)
            count--
        }
    }


    return ans.join('');


};
