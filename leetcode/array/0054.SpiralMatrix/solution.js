// Given an m x n matrix, return all elements of the matrix in spiral order.

//  

// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:


// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
//  

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

// 方法一：按层模拟

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (!matrix.length || !matrix[0].length) return [];

    const rows = matrix.length;
    const cols = matrix[0].length;

    let left = 0;
    let right = cols - 1;
    let top = 0;
    let bottom = rows - 1;

    const order = [];

    while (left <= right && top <= bottom) {
        for (let col = left; col <= right; col++) {
            order.push(matrix[top][col]);
        }

        for (let row = top + 1; row <= bottom; row++) {
            order.push(matrix[row][right])
        }

        if (left < right && top < bottom) {
            for (let col = right - 1; col > left; col--) {
                order.push(matrix[bottom][col])
            }

            for (let row = bottom; row > top; row--) {
                order.push(matrix[row][left])
            }
        }

        [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1]
    }

    return order
};