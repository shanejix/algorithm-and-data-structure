// Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

//  

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0
//  

// Constraints:

// 1 <= target <= 109
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 105
//  

// Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/minimum-size-subarray-sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


// 🎨 方法一：暴力法

// 📝 思路：固定下标 i 枚举其所有子序列，然后求得最小子序列

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {

    let ans = Infinity;

    for (let i = 0; i < nums.length; i++) {
        // 尝试枚举每个下标 i 的子数组

        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum >= target) {
                ans = Math.min(ans, j - i + 1);
                break;
            }
        }
    }

    return ans === Infinity ? 0 : ans
};


// 🎨 方法二：：前缀和 + 二分搜索

// 📝 思路：前缀和求区间和

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {

    let ans = Infinity;
    let len = nums.length;

    // 前缀和 
    // preSum[i] = nums[0] + ... + nums[i-1]
    // preSum[0] 表示前 0 个元素的前缀和为 0 
    // preSum[1] = num[0] 
    let preSum = new Array(len + 1).fill(0);

    for (let i = 1; i < len; i++) {
        preSum[i] = preSum[i - 1] + nums[i - 1]
    }

    for (let i = 1; i < len; i++) {
        // 前缀和有 preSum[bound] - preSum[i-1] >= target
        // 对于每个下标 i 可找到 bound 下标
        let sum = target + preSum[i - 1];
        // 前缀和单调递增(均为正数)，可使用二分查找
        let bound = binarySearch(preSum, sum);

        if (bound < 0) {
            bound = - bound - 1;
        }

        if (bound < len) {
            ans = Math.min(ans, bound - (i - 1))
        }

    }

    return ans === Infinity ? 0 : ans

};

// 🎨 方法二：滑动窗口 

// 📝 思路：构建区间 [start,end] 的窗口，并且用sum记录窗口中下标对应元素的和，end遍历数组时，更新追加end对应元素的sum中，不满足条件则右移start直到满足，过程后中不断更新ans

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {

    let ans = Infinity;
    let len = nums.length;

    let start = 0;
    let end = 0;

    let sum = 0;

    while (end < len) {
        sum = sum + nums[end];
        while (sum >= target) {
            ans = Math.min(ans, end - start + 1);
            sum = sum - nums[start];
            start++
        }
        end++
    }

    return ans === Infinity ? 0 : ans
};