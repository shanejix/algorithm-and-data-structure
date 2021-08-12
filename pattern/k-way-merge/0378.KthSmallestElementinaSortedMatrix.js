// Given an n x n matrix where each of the rows and columns are sorted in ascending order, return the kth smallest element in the matrix.

// Note that it is the kth smallest element in the sorted order, not the kth distinct element.

//  

// Example 1:

// Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
// Output: 13
// Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13
// Example 2:

// Input: matrix = [[-5]], k = 1
// Output: -5
//  

// Constraints:

// n == matrix.length
// n == matrix[i].length
// 1 <= n <= 300
// -109 <= matrix[i][j] <= 109
// All the rows and columns of matrix are guaranteed to be sorted in non-decreasing order.
// 1 <= k <= n2

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/kth-smallest-element-in-a-sorted-matrix
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 🎨 方法一：优先级队列

// 📝 思路：将 n 个排序数组排序后取第 k 个元素 转化为 将 n 个排序数组合并 同 leetcode 0023

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {

    const sorted = [];

    const queue = new MinPriorityQueue();

    for (let list of matrix) {
        if (list) {
            queue.enqueue(list, list[0])
        }
    }

    while (!queue.isEmpty()) {
        const { element: currTopMinList } = queue.dequeue();
        sorted.push(currTopMinList[0]);
        if (currTopMinList.length > 1) {
            queue.enqueue(currTopMinList.slice(1), currTopMinList[1]);
        }
    }

    return sorted[k - 1]

};