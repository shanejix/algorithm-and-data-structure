// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given an integer array nums, return the sum of Hamming distances between all the pairs of the integers in nums.

//  

// Example 1:

// Input: nums = [4,14,2]
// Output: 6
// Explanation: In binary representation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just
// showing the four bits relevant in this case).
// The answer will be:
// HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.
// Example 2:

// Input: nums = [4,14,4]
// Output: 4
//  

// Constraints:

// 1 <= nums.length <= 105
// 0 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
    let ans = 0;
    let len = nums.length;

    // 10^9 < 2^30
    for (let i = 0; i < 30; i++) {

        let count = 0;

        for (let num of nums) {
            count += (num >> i) & 1
        }
        // 若长度为 n 的数组 nums 的所有元素二进制的第 i 位共有 c 个 1，n−c 个 0，则些元素在二进制的第 i 位上的汉明距离之和为 c⋅(n−c)
        ans += count * (len - count)
    }

    return ans
};