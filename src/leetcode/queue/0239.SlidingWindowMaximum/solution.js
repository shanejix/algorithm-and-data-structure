// Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.

// Follow up:
// Could you solve it in linear time?

// Example:

// Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
// Output: [3,3,5,5,6,7] 
// Explanation: 

// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7


// Constraints:

// 1 <= nums.length <= 10^5
// -10^4 <= nums[i] <= 10^4
// 1 <= k <= nums.length

// 方法一： 暴力破解，（超出时间限制）

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {

    // if(!nums) return [];

    let len = nums.length;
    let result = [];

    let curr = 0;

    while (curr !== len - k + 1) {
        let prev = curr;
        let last = prev + k - 1;
        // last - prev = k-1;

        let max = -Infinity;
        while (prev !== last + 1) {
            console.log(nums[prev], max)
            if (nums[prev] > max) {
                max = nums[prev];
            }
            prev++;
        }

        console.log('----')

        result.push(max);

        curr++;
    }

    return result;
};