// Given an array of integers arr.

const { default: sum } = require("../../../sum");

// We want to select three indices i, j and k where (0 <= i < j <= k < arr.length).

// Let's define a and b as follows:

// a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]
// b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]
// Note that ^ denotes the bitwise-xor operation.

// Return the number of triplets (i, j and k) Where a == b.

//  

// Example 1:

// Input: arr = [2,3,1,6,7]
// Output: 4
// Explanation: The triplets are (0,1,2), (0,2,2), (2,3,4) and (2,4,4)
// Example 2:

// Input: arr = [1,1,1,1,1]
// Output: 10
// Example 3:

// Input: arr = [2,3]
// Output: 0
// Example 4:

// Input: arr = [1,3,5,7,9]
// Output: 3
// Example 5:

// Input: arr = [7,11,12,9,5,2,7,17,22]
// Output: 8
//  

// Constraints:

// 1 <= arr.length <= 300
// 1 <= arr[i] <= 10^8

// 方法一：三层循环

/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {

    const len = arr.length;

    // 定义 s[i] 为 ：数组 arr 的 前 i+1 位异或前缀和
    const s = [0];
    for (let i of arr) {
        s.push(s[s.length - 1] ^ i);
    }

    // 三层循环 
    let ans = 0;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = j; j < len; k++) {
                // a = s[i] ^ s[j]  b= s[j] ^ s[k+1]
                // a === b
                // s[i] ^ s[j] === s[j] ^ s[k+1]
                // s[i] ^ s[j] ^ s[j] === s[j] ^ s[j] ^ s[k+1]
                // s[i] ^ 0 === 0 ^ s[k+1]
                // s[i] === s[k+1]
                if (s[i] === s[k + 1]) {
                    ans++
                }
            }
        }
    }

    return ans
};

// 方法一：两层循环 优化

/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {

    const len = arr.length;

    // 定义 s[i] 为 ：数组 arr 的 前 i+1 位异或前缀和
    const s = [0];
    for (let i of arr) {
        s.push(s[s.length - 1] ^ i);
    }

    // 两层循环 
    let ans = 0;
    for (let i = 0; i < len; i++) {
        for (let k = i + 1; k < len; k++) {
            // 连续的一段区间 [i, k]，并在这一段中找到分割点 j，使得区间内分割点左边的异或结果为 a，分割点右边的异或结果为 b。
            // 并最终让 a 和 b 相等
            // 由 a 与 b 相等，可以推导出 a ⊕ b = 0 再结合 a 和 b 的由来，可以推导出 [i, k] 连续一段的异或结果为 0。
            // 因此，满足的 j 的个数为：k - i
            if (s[i] === s[k + 1]) {
                ans += k - i
            }
        }
    }

    return ans
};

// 方法二：哈希表



/**
* @param {number[]} arr
* @return {number}
*/
var countTriplets = function (arr) {
    const len = arr.length;

    // 定义 s[i] 为 ：数组 arr 的 前 i+1 位异或前缀和
    const s = [0];
    for (let i of arr) {
        s.push(s[s.length - 1] ^ i);
    }

    let ans = 0;

    // 记录出现过的异或结果，存储格式：{ 异或结果 : [下标1, 下标2 ...] }
    const map = new Map();

    for (let k = 0; k <= len; k++) {
        let list = map.get(s[k]) || [];

        for (let [_, idx] of list.entries()) {
            let i = idx + 1;
            ans += k - i
        }

        list.push(k);
        map.set(s[k], list);

    }

    return ans
};
