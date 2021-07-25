// A good meal is a meal that contains exactly two different food items with a sum of deliciousness equal to a power of two.

// You can pick any two different foods to make a good meal.

// Given an array of integers deliciousness where deliciousness[i] is the deliciousness of the i​​​​​​th​​​​​​​​ item of food, return the number of different good meals you can make from this list modulo 109 + 7.

// Note that items with different indices are considered different even if they have the same deliciousness value.

//  

// Example 1:

// Input: deliciousness = [1,3,5,7,9]
// Output: 4
// Explanation: The good meals are (1,3), (1,7), (3,5) and, (7,9).
// Their respective sums are 4, 8, 8, and 16, all of which are powers of 2.
// Example 2:

// Input: deliciousness = [1,1,1,3,3,3,7]
// Output: 15
// Explanation: The good meals are (1,1) with 3 ways, (1,3) with 9 ways, and (1,7) with 3 ways.
//  

// Constraints:

// 1 <= deliciousness.length <= 10

/**
 * @param {number[]} deliciousness
 * @return {number}
 */
var countPairs = function (deliciousness) {

    const mod = 1000000007;

    let maxVal = 0;
    for (let deliciousnes of deliciousness) {
        maxVal = Math.max(maxVal, deliciousnes)
    }

    // 任意两个数之和都不会超过 maxVal * 2
    const maxSum = maxVal * 2
    let pairs = 0;
    const map = new Map();
    // 遍历到数组 deliciousness 中的某个元素时，在哈希表中寻找与当前元素的和等于 2 的幂的元素个数
    for (let deliciousnes of deliciousness) {
        // 任意一顿大餐的美味程度之和为不超过 maxSum 的某个 2 的幂
        for (let sum = 1; sum <= maxSum; sum = sum << 1) {
            // 与当前元素的和等于 2 的幂的元素
            const count = map.get(sum - deliciousnes) || 0;
            pairs = (pairs + count) % mod
        }
        // 用当前元素更新哈希表
        map.set(deliciousnes, (map.get(deliciousnes) || 0) + 1)
    }

    return pairs;
};