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

// 方法二：分治

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

    if (nums.length === 1) {
        return nums[0]
    }

    return maxSublingArray(nums, 0, nums.length);
};

function maxSublingArray(nums, begin, end) {
    if (end - begin < 2) {
        return nums[begin];
    }

    let mid = (end - begin) >> 2;

    let leftMax = -Infinity;
    let leftSum = 0;
    for (let i = mid - 1; i >= 0; i--) {
        leftSum += nums[i]
        if (leftSum > leftMax) {
            leftMax = leftSum;
        }
    }

    let rightMax = -Infinity;
    let rightSum = 0;
    for (let i = mid; i < nums.length; i++) {
        rightSum += nums[i];
        if (rightSum > rightMax) {
            rightMax = rightSum;
        }
    }

    let currMax = leftSum + rightSum;

    return Math.max(currMax, Math.max(maxSublingArray(nums, begin, mid), maxSublingArray(nums, mid, end)))
}


// 方法三：动态规划

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

    const dp = new Array(nums.length);

    dp[0] = nums[0];
    let max = dp[0];

    for (let i = 1; i < nums.length; i++) {
        if (dp[i - 1] <= 0) {
            dp[i] = nums[i];
        } else {
            dp[i] = dp[i - 1] + nums[i];
        }

        if (dp[i] > max) {
            max = dp[i];
        }
    }

    return max;
};


// 方法三：动态规划-优化

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let pre = 0, maxAns = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
};
