// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

//  

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [0]
// Output: 0
// Example 4:

// Input: nums = [-1]
// Output: -1
// Example 5:

// Input: nums = [-100000]
// Output: -100000
//  

// Constraints:

// 1 <= nums.length <= 3 * 104
// -105 <= nums[i] <= 105
//  

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.


// 方法一：暴力破解

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length === 1) return nums[0];

    let max = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        let prev = last = i;
        let sum = 0;

        while (last < nums.length) {
            sum += nums[last];
            if (sum > max) {
                max = sum
            }
            last++
        }
    }

    return max

};