// 题目描述
// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
// 例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
// 则依次打印出数字1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10.


//思路：

//1.按圈打印，假设起始（0，0），终止的条件（start，start）=> start*2>col&&start*2>raw

//2.按圈依次从左向右，从上向下，从右向左，从下向上打印

function printMatrix(matrix)
{
    matrix = matrix || [[]];

    let raw = matrix.lengtn;
    let col = matrix[0].lengtn;

    let start = 0;

    while (start * 2 > col && start > raw) {
        printMatrixInCircle(matrix,raw,col,start);
        start++;
    }
}

function printMatrixInCircle(matrix,raw,col,start) {
    let endX = raw - start - 1;
    let endY = col - start - 1;

    for (let i = start; i <= endX; i++){
        let num = matrix[start][i];
        console.log(num);
    }

    if (start < endY) {
        for (let i = start + 1; i <= endY; i++){
            let num = matrix[i][ennX];
            console.log(num);
        }
    }

    if (start < endX && start < endY) {
        for (let i = endX - 1; i >= start; i--){
            let num = matrix[endY][i];
            console.log(num);
        }
    }

    if (start < endY && start < endY - 1) {
        for (let i = endY - 1; i >= start + 1; --i){
            let num = matrix[i][start];
            console.log(num);
        }
    }
}