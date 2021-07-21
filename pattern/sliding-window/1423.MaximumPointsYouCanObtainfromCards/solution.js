// There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints.

// In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

// Your score is the sum of the points of the cards you have taken.

// Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

//  

// Example 1:

// Input: cardPoints = [1,2,3,4,5,6,1], k = 3
// Output: 12
// Explanation: After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.
// Example 2:

// Input: cardPoints = [2,2,2], k = 2
// Output: 4
// Explanation: Regardless of which two cards you take, your score will always be 4.
// Example 3:

// Input: cardPoints = [9,7,7,9,7,7,9], k = 7
// Output: 55
// Explanation: You have to take all the cards. Your score is the sum of points of all cards.
// Example 4:

// Input: cardPoints = [1,1000,1], k = 1
// Output: 1
// Explanation: You cannot take the card in the middle. Your best score is 1. 
// Example 5:

// Input: cardPoints = [1,79,80,1,1,1,200,1], k = 3
// Output: 202
//  

// Constraints:

// 1 <= cardPoints.length <= 105
// 1 <= cardPoints[i] <= 104
// 1 <= k <= cardPoints.length

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/maximum-points-you-can-obtain-from-cards
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 🎨 方法一：滑动窗口 

// 📝 思路： 转化为利用滑动窗口求固定长度序列之和的最小值

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
    let len = cardPoints.length;

    // 滑动窗口宽度
    let width = len - k;

    // 滑动窗口右侧指针
    let end = 0;
    // 维护滑动窗口的和
    let sum = 0
    for (; end < width; end++) {
        sum += cardPoints[end];
    }

    let minSum = sum;

    // end === width
    while (end < len) {
        sum = sum + cardPoints[end] - cardPoints[end - width]
        minSum = Math.min(minSum, sum)
        end++
    }

    const total = cardPoints.reduce((acc, card) => acc += card, 0);

    return total - minSum;
};