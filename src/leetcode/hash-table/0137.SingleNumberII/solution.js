// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

//  

// Example 1:

// Input: nums = [2,2,3,2]
// Output: 3
// Example 2:

// Input: nums = [0,1,0,1,0,1,99]
// Output: 99
//  

// Constraints:

// 1 <= nums.length <= 3 * 104
// -231 <= nums[i] <= 231 - 1
// Each element in nums appears exactly three times except for one element which appears once.
//  

// Follow up: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// 方法一：哈希表

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const hash = new Map();

    for (let num of nums) {
        hash.set(num, (hash.get(num) || 0) + 1)
    }

    let res
    for (let [num, freq] of hash.entries()) {
        if (freq === 1) {
            res = num;
            break;
        }
    }

    return res
};


// 方法二：位运算

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let res = 0;

    // 32位整型
    for (let i = 0; i < 32; i++) {
        let total = 0;
        for (const num of nums) {
            // num的第i位二进制位
            total += (num >> i & 1)
        }

        // 出现三次数字的第i位二进制位的必然使3的倍数 || 没有出现
        if (total % 3 !== 0) {
            res = res | (1 << i)
        }
    }
};