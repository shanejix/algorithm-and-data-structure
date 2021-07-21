// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

//  

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000
//  

// Constraints:

// n == nums.length
// 1 <= k <= n <= 105
// -104 <= nums[i] <= 104

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/maximum-average-subarray-i
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 方法一：滑动窗口 - 超时

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {

    let len = nums.length;
    let ans = 0;

    // 滑动窗口 右侧下标
    let end = 0;

    while (end < len) {
        // 当前窗口的和
        let sum = 0;
        // 滑动窗口左侧下标
        let start = end - k + 1;

        if (start < 0) {
            continue
        }

        // 求当前窗口的和
        for (let i = start; i < end; i++) {
            sum += nums[i]
        }

        ans = Math.max(ans, sum)

        end++
    }

    return ans / k
};

// 🎨 方法一：滑动窗口 - 优化:直接维护窗口的和

// 📝 思路：用 end 遍历数组，过程中更新 [end -k,end] 固定窗口长度为 k 的区间和，并更新 ans

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {

    let len = nums.length;

    // 维护滑动窗口的和
    let sum = 0;
    // 滑动窗口的右侧下标
    let end = 0
    for (; end < k; end++) {
        sum += nums[end]
    }

    let maxSum = sum;

    // 窗口右移
    while (end < len) {
        // 随着 end 下标右移，不断更新 滑动窗口的和 sum
        sum = sum + nums[end] - nums[end - k]
        maxSum = Math.max(maxSum, sum)
        end++
    }

    return maxSum / k
};

// 🎨 方法二：前缀和

// 📝 思路：用前缀和求区间和

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {

    let len = nums.length;

    // 求前缀和 preSum[i] 表示 nums 的前 i 个数的和
    let preSum = new Array(len + 1).fill(0);
    for (let i = 1; i <= len; i++) {
        preSum[i] = preSum[i - 1] + nums[i - 1]
    }

    let maxSum = preSum[k];

    // end 表示遍历 nums 的个数
    let end = k + 1;
    while (end <= len) {
        let start = end - k
        // 区间和 <- 前缀和
        let sum = preSum[end] - preSum[start];
        maxSum = Math.max(maxSum, sum)
        end++
    }

    return maxSum / k
};