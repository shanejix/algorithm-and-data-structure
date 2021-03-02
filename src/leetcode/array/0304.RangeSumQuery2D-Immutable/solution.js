// Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).


// The above rectangle (with the red border) is defined by (row1, col1) = (2, 1) and (row2, col2) = (4, 3), which contains sum = 8.

// Example:
// Given matrix = [
//   [3, 0, 1, 4, 2],
//   [5, 6, 3, 2, 1],
//   [1, 2, 0, 1, 5],
//   [4, 1, 0, 1, 7],
//   [1, 0, 3, 0, 5]
// ]

// sumRegion(2, 1, 4, 3) -> 8
// sumRegion(1, 1, 2, 2) -> 11
// sumRegion(1, 2, 2, 4) -> 12
// Note:
// You may assume that the matrix does not change.
// There are many calls to sumRegion function.
// You may assume that row1 ≤ row2 and col1 ≤ col2.


// 方法一：暴力循环

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    this.matrix = matrix;

    this.matrixSum = [];

    for (let i = 0; i < matrix.length; i++) {
        let raw = matrix[i];
        let rawSum = new Array(raw.length).fill(0);

        rawSum[0] = raw[0];
        for (let j = 1; j < raw.length; j++) {
            rawSum[j] = rawSum[j - 1] + raw[j]
        }

        this.matrixSum.push(rawSum)
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {

    console.log(this.matrix)

    let sum = 0;

    for (let i = row1; i <= row2; i++) {
        if (this.matrixSum.length >= 1) {
            sum += this.matrixSum[i][col2] - this.matrixSum[i][col1 - 1];
        } else {
            sum += this.matrixSum[i][0]
        }
    }

    return sum;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
