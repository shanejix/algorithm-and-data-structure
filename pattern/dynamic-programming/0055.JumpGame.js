// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

//  

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
//  

// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 105

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/jump-game
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 🎨 方法一：动态规划

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let n = nums.length;

    if (n <= 1) {
        return true
    }

    const dp = new Array(n).fill(false);

    dp[0] = true;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && j + nums[j] >= i) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[n - 1]
};