// Given a non negative integer number num.For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

// Example 1:

// Input: 2
// Output: [0, 1, 1]
// Example 2:

// Input: 5
// Output: [0, 1, 1, 2, 1, 2]
// Follow up:

// It is very easy to come up with a solution with run time O(n * sizeof(integer)).But can you do it in linear time O(n) / possibly in a single pass ?
//     Space complexity should be O(n).
// Can you do it like a boss ? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.

// 方法一：暴力循环

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
    let res = [];

    for (let i = 0; i <= num; i++) {
        res.push(getSum(i));
    }

    return res;
};

function getSum(num) {
    let sum = 0;

    while (num) {
        if (num % 2 === 1) {
            sum += num % 2;
        }
        num = parseInt(num / 2);
    }

    return sum;
}


// 方法一：暴力循环-位运算优化

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
    const bits = new Array(num + 1).fill(0);
    for (let i = 0; i <= num; i++) {
        bits[i] = countOnes(i);
    }
    return bits
};

function countOnes(num) {
    if (num === 0) {
        return 0;
    }

    if (num & 1) {
        return countOnes(num - 1) + 1;
    } else {
        return countOnes(num >> 1)
    }
}

// 方法二: 递归

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
    let ones = new Array(num + 1).fill(0);

    for (let i = 0; i <= num; i++) {
        ones[i] = countOnes(i);
    }

    return ones;

};

function countOnes(num) {
    if (num === 0) {
        return 0;
    }

    if (num & 1) {
        return countOnes(num - 1) + 1;
    } else {
        return countOnes(num >> 1)
    }
}

// 方法三：递归 - 记忆化存储

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
    let ones = new Array(num + 1).fill(0);
    let memo = new Array(num + 1).fill(0);

    for (let i = 0; i <= num; i++) {
        ones[i] = countOnes(i, memo);
    }

    return ones;

};

function countOnes(num, memo) {

    if (memo[num] !== 0) {
        return memo[num];
    }

    if (num === 0) {
        return 0;
    }

    if (num & 1) {
        memo[num] = countOnes(num - 1, memo) + 1;
    } else {
        memo[num] = countOnes(num >> 1, memo)
    }

    return memo[num]
}

function countOnes(x) {
    let sum = 0;

    while (x) {
        // x= x&(x-1);
        x &= (x - 1);
        sum++
    }

    return sum
}

// 方法四：动态规划 - 低位有效

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
    let ones = new Array(num + 1).fill(0);

    for (let i = 0; i <= num; i++) {
        if (i === 0) {
            ones[0] = 0;
        } else if (i % 2 === 0) {
            ones[i] = ones[i / 2];
        } else {
            ones[i] = ones[parseInt(i / 2)] + 1;
        }
    }

    return ones;

};

// 方法四：动态规划 - 低位有效- 优化

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
    const bits = new Array(num + 1).fill(0);
    for (let i = 1; i <= num; i++) {
        bits[i] = bits[i >> 1] + (i & 1);
    }
    return bits;
};

