// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

//  

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
//  

// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/merge-intervals
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


// 🎨 方法一：排序

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
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