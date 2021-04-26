// 1011. Capacity To Ship Packages Within D Days
// A conveyor belt has packages that must be shipped from one port to another within D days.

// The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.

// Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within D days.



// Example 1:

// Input: weights = [1,2,3,4,5,6,7,8,9,10], D = 5
// Output: 15
// Explanation: A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
// 1st day: 1, 2, 3, 4, 5
// 2nd day: 6, 7
// 3rd day: 8
// 4th day: 9
// 5th day: 10

// Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed.
// Example 2:

// Input: weights = [3,2,2,4,1,4], D = 3
// Output: 6
// Explanation: A ship capacity of 6 is the minimum to ship all the packages in 3 days like this:
// 1st day: 3, 2
// 2nd day: 2, 4
// 3rd day: 1, 4
// Example 3:

// Input: weights = [1,2,3,1,1], D = 4
// Output: 3
// Explanation:
// 1st day: 1
// 2nd day: 2
// 3rd day: 3
// 4th day: 1, 1


// Constraints:

// 1 <= D <= weights.length <= 5 * 104
// 1 <= weights[i] <= 500

// 方法一：二分查找

// 二分查找转化为判定问题

/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function (weights, D) {
    // 确定二分查找的边界

    // 最低运力：确保所有货物能够运送，包括最大的包裹max，此时最低运力为max（weights中的最大值）
    let left = Math.max(...weights);
    // 最高运力：所有货物一天时间（最短）内完成，此时最低运力为sum（weights数组的和）
    let right = weights.reduce((a, c) => a + c);

    while (left < right) {
        let mid = left + right >> 1;

        if (check(weights, mid, D)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return right;

};

/**
 * 判定问题: 当前运力是否满足 <= D 天
 * @param {*} weights 
 * @param {*} mid 
 * @param {*} d 
 */
function check(weights, mid, d) {
    let cnt = 1;

    let sum = weights[0];

    for (let i = 1; i < weights.length; cnt++, sum = 0) {

        while (i < weights.length && sum + weights[i] <= mid) {
            sum += weights[i];
            i++;
        }
    }

    return cnt - 1 <= d;
}