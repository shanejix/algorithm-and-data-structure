// There is an integer array perm that is a permutation of the first n positive integers, where n is always odd.

// It was encoded into another integer array encoded of length n - 1, such that encoded[i] = perm[i] XOR perm[i + 1]. For example, if perm = [1,3,2], then encoded = [2,1].

// Given the encoded array, return the original array perm. It is guaranteed that the answer exists and is unique.

//  

// Example 1:

// Input: encoded = [3,1]
// Output: [1,2,3]
// Explanation: If perm = [1,2,3], then encoded = [1 XOR 2,2 XOR 3] = [3,1]
// Example 2:

// Input: encoded = [6,5,4,6]
// Output: [2,4,1,5,3]
//  

// Constraints:

// 3 <= n < 105
// n is odd.
// encoded.length == n - 1

/**
 * @param {number[]} encoded
 * @return {number[]}
 */
var decode = function (encoded) {
    //  encoded[i] = perm[i] ^ perm[i + 1]
    //  encoded[i] ^ perm[i] = perm[i] ^ perm[i] ^ perm[i + 1]
    //  encoded[i] ^ perm[i] = 0 ^ perm[i + 1]
    //  encoded[i] ^ perm[i] = perm[i + 1]


    // ans[] = [ans[0],ans[1],ans[2],...,ans[n−1]] 长度为 n
    // encoded[] = [ans[0]^ans[1],ans[1]^ans[2],ans[2]^ans[3]...,ans[n−3]^ans[n−2],ans[n−2]^ans[n−1]] 长度为 n - 1

    const n = encoded.length + 1;
    const ans = new Array(n).fill(0);

    // 求得 除了 ans[n - 1] 的所有异或结果
    let a = 0;
    for (let i = 0; i < n - 1; i += 2) {
        a ^= encoded[i]
    }

    // a = ans[0]^ans[1]^ans[2]^ans[3]^...^ans[n-2]

    // 求得 ans 的所有异或结果
    let b = 0;
    for (let i = 1; i <= n; i++) {
        b ^= i
    }

    // ans[] 数组是 n 个正整数的排列
    // b = ans[0]^ans[1]^ans[2]^ans[3]^...^ans[n-2]^ans[n-1]

    // 求得 ans[n - 1] 
    ans[n - 1] = a ^ b

    // a ^ b
    // = (ans[0]^ans[1]^ans[2]^ans[3]^...^ans[n-2])^(ans[0]^ans[1]^ans[2]^ans[3]^...^ans[n-2]^ans[n-1])
    // = 0 ^ ans[n-1]
    // = ans[n-1]

    for (let i = n - 2; i >= 0; i--) {
        ans[i] = encoded[i] ^ ans[i + 1]
    }

    return ans
};