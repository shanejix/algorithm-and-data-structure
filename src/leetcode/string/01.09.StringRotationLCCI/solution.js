// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 (e.g.,"waterbottle" is a rotation of"erbottlewat"). Can you use only one call to the method that checks if one word is a substring of another?

// Example 1:

// Input: s1 = "waterbottle", s2 = "erbottlewat"
// Output: True
// Example 2:

// Input: s1 = "aa", s2 = "aba"
// Output: False
//  

// Note:

// 0 <= s1.length, s2.length <= 100000

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function (s1, s2) {
    if (s1 === null || s2 === null || s1 === undefined || s2 === undefined) return false;

    if (s1.length !== s2.length) return false

    return (s1 + s1).includes(s2)
};


for (var i = 0; i < arrary.length; i++) {

    let sequential = arrary[i];
    let reverse = arrary[arrary.length - 1 - i];
}