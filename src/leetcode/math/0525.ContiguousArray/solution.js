// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

//  

// Example 1:

// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
// Example 2:

// Input: nums = [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
//  

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {

    //「0 和 1 的数量相同」等价于「1 的数量减去 0 的数量等于 0」
    // 可以将数组中得 0 视为 -1
    // 原问题转化为：「求最长的连续子数组，其元素和为 0 」

    // 设数组 nums 的长度为 n
    // 将数组 nums 进行转换得到长度相等的新数组 newNums
    // 对于 0 <= i <= n，当 nums[i] = 1 时 newNums[i] = 1，当 nums[i]=0 时 newNums[i] = −1

    // 用 prefixSums[i] 表示 newNums 从下标 0 到下标 i 的前缀和
    // 则 newNums 从下标 j + 1 到下标 k（其中 j < k）的子数组的元素和为 prefixSums[k] − prefixSums[j]，该子数组的长度为 k − j
    // 当 prefixSums[k]-prefixSums[j] = 0 时，即得到 newNums 的一个长度为 k − j 的子数组元素和为 0 
    // 对应 nums 的一个长度为 k−j 的子数组中有相同数量的 0 和 1

    // 实现方面，不需要创建数组 newNums 和 prefixSums，只需要维护一个变量 counter 存储 newNums 的前缀和即可
    let counter = 0;

    // 使用哈希表存储每个前缀和第一次出现的下标
    const map = new Map();

    let maxLength = 0;

    // 规定空的前缀的结束下标为 −1，由于空的前缀的元素和为 0，因此在遍历之前，首先在哈希表中存入键值对 (0,−1)
    map.set(counter, -1)

    const len = nums.length;

    for (let i = 0; i < len; i++) {
        const num = nums[i];

        // 前缀和
        if (num === 1) {
            counter++
        } else {
            counter--
        }

        if (map.has(counter)) {
            const prevIndex = map.get(counter);
            maxLength = Math.max(maxLength, i - prevIndex)
        } else {
            map.set(counter, i)
        }
    }

    return maxLength;
};