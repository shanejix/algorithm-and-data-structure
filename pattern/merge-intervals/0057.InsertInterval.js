// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

// You may assume that the intervals were initially sorted according to their start times.

//  

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
// Example 3:

// Input: intervals = [], newInterval = [5,7]
// Output: [[5,7]]
// Example 4:

// Input: intervals = [[1,5]], newInterval = [2,3]
// Output: [[1,5]]
// Example 5:

// Input: intervals = [[1,5]], newInterval = [2,7]
// Output: [[1,7]]
//  

// Constraints:

// 0 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= intervals[i][0] <= intervals[i][1] <= 105
// intervals is sorted by intervals[i][0] in ascending order.
// newInterval.length == 2
// 0 <= newInterval[0] <= newInterval[1] <= 105

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/insert-interval
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 🎨 方法一：排序

// 📝 思路：追加到数组末尾 思路同0056.MergeIntervals

// 
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    intervals.push(newInterval);

    return merge(intervals);
};

var merge = function (intervals) {

    return intervals.sort((a, b) => a[0] - b[0]).reduce((acc, interval) => {
        // console.log(acc, interval)

        let top = acc.pop();

        if (top) {
            if (top[0] === interval[0]) {
                if (top[1] < interval[1]) {
                    acc.push([top[0], interval[1]])
                } else {
                    acc.push([top[0], top[1]])
                }
            } else {
                if (top[1] < interval[0]) {
                    acc.push(top, interval)
                } else {
                    let right = Math.max(top[1], interval[1]);
                    acc.push([top[0], right]);
                }
            }
        } else {
            acc.push(interval)
        }

        return acc

    }, [])

};