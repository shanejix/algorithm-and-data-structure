// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

//  

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []
//  

// Constraints:

// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/3sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


// 🎨 方法一：排序 + 双指针

// 📝 思路：利用升序数组，在固定一个数字（下标i），求剩余两数之和在 i 右侧区间等于指定和（将三数之和转化为两数之和 => 双指针求升序数组两数之和等于指定和）

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b)

    let len = nums.length;

    let ans = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < len; i++) {
        // 确定 i 时，遍历其右侧

        // 跳过重复元素
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue
        }

        // 区间左侧指针
        let j = i + 1;
        // 区间右侧指针
        let k = len - 1;

        while (j < k) {
            // 跳过重复元素
            if (j > i + 1 && j < len && nums[j] === nums[j - 1]) {
                j++
                continue
            }

            if (j > k) {
                break;
            }

            let sum = nums[i] + nums[j] + nums[k];

            ans = Math.abs(sum - target) < Math.abs(ans - target) ? sum : ans

            if (sum === target) {
                return sum;
            } else if (sum < target) {
                j++
            } else if (sum > target) {
                k--
            }
        }
    }

    return ans
};