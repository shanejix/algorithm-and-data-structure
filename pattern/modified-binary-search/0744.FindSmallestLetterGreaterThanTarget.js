// Given a characters array letters that is sorted in non-decreasing order and a character target, return the smallest character in the array that is larger than target.

// Note that the letters wrap around.

// For example, if target == 'z' and letters == ['a', 'b'], the answer is 'a'.
//  

// Example 1:

// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
// Example 2:

// Input: letters = ["c","f","j"], target = "c"
// Output: "f"
// Example 3:

// Input: letters = ["c","f","j"], target = "d"
// Output: "f"
// Example 4:

// Input: letters = ["c","f","j"], target = "g"
// Output: "j"
// Example 5:

// Input: letters = ["c","f","j"], target = "j"
// Output: "c"
//  

// Constraints:

// 2 <= letters.length <= 104
// letters[i] is a lowercase English letter.
// letters is sorted in non-decreasing order.
// letters contains at least two different characters.
// target is a lowercase English letter.

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/find-smallest-letter-greater-than-target
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


// 🎨 方法一：直接遍历

// 📝 思路：有序

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    for (let letter of letters) {
        if (letter.charCodeAt() > target.charCodeAt()) {
            return letter
        }
    }

    return letters[0]

};

// 🎨 方法一：二分查找

// 📝 思路：如果存在比target大的最小值，那么位置应该在 left；三种情形，target不在letters范围，target在letters范围但不在letters中，target在letters中

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    let left = 0;
    let right = letters.length - 1;

    while (left <= right) {
        let mid = left + ((right - left) >> 2);

        if (letters[mid] > target) {
            right = mid - 1
        } else {
            // <= 合并为一种情况
            left = mid + 1
        }
    }

    // return left === letters.length ? letters[0] : letters[left]

    return letters[left % letters.length] // 🔥
};