// Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.

// A subarray is a contiguous part of the array.

//  

// Example 1:

// Input: nums = [1,0,1,0,1], goal = 2
// Output: 4
// Explanation: The 4 subarrays are bolded and underlined below:
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// Example 2:

// Input: nums = [0,0,0,0,0], goal = 0
// Output: 15
//  

// Constraints:

// 1 <= nums.length <= 3 * 104
// nums[i] is either 0 or 1.
// 0 <= goal <= nums.length

/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {

    // 前缀和
    let sum = 0;
    // 记录每一种前缀和出现的次数
    const count = new Map();

    let ans = 0

    for (const num of nums) {
        // 枚举到当前数字 num

        count.set(sum, (count.get(sum) || 0) + 1);
        sum = sum + num;
        ans = ans + count.get(sum - goal) || 0;
    }

    return ans
};