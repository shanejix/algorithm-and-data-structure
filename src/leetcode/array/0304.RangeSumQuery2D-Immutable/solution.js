// Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner(row1, col1) and lower right corner(row2, col2).


// The above rectangle(with the red border) is defined by(row1, col1) = (2, 1) and(row2, col2) = (4, 3), which contains sum = 8.

// Example:
// Given matrix = [
//     [3, 0, 1, 4, 2],
//     [5, 6, 3, 2, 1],
//     [1, 2, 0, 1, 5],
//     [4, 1, 0, 1, 7],
//     [1, 0, 3, 0, 5]
// ]

// sumRegion(2, 1, 4, 3) -> 8
// sumRegion(1, 1, 2, 2) -> 11
// sumRegion(1, 2, 2, 4) -> 12
// Note:
// You may assume that the matrix does not change.
// There are many calls to sumRegion function.
// You may assume that row1 ≤ row2 and col1 ≤ col2.

// 方法一：暴力循环法

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    this.matrix = matrix;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {

    let sum = 0;
    for (let i = row1; i <= row2; i++) {
        let arr = this.matrix[i];

        for (let j = col1; j <= col2; j++) {
            sum += arr[j];
        }
    }

    return sum;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */