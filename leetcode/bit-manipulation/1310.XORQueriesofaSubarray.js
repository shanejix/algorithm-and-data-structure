// Given the array arr of positive integers and the array queries where queries[i] = [Li, Ri], for each query i compute the XOR of elements from Li to Ri (that is, arr[Li] xor arr[Li+1] xor ... xor arr[Ri] ). Return an array containing the result for the given queries.
//  

// Example 1:

// Input: arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]
// Output: [2,7,14,8] 
// Explanation: 
// The binary representation of the elements in the array are:
// 1 = 0001 
// 3 = 0011 
// 4 = 0100 
// 8 = 1000 
// The XOR values for queries are:
// [0,1] = 1 xor 3 = 2 
// [1,2] = 3 xor 4 = 7 
// [0,3] = 1 xor 3 xor 4 xor 8 = 14 
// [3,3] = 8
// Example 2:

// Input: arr = [4,8,2,10], queries = [[2,3],[1,3],[0,0],[0,3]]
// Output: [8,0,4,4]
//  

// Constraints:

// 1 <= arr.length <= 3 * 10^4
// 1 <= arr[i] <= 10^9
// 1 <= queries.length <= 3 * 10^4
// queries[i].length == 2
// 0 <= queries[i][0] <= queries[i][1] < arr.length


/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
    const n = arr.length;

    // xors[i]=arr[0]⊕…⊕arr[i−1]
    const xors = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        xors[i + 1] = xors[i] ^ arr[i]
    }

    // 对于查询 [left,right] (left <= right) Q(left,right) 表示该查询的结果

    // Q(left,right)
    //   = arr[left]⊕…⊕arr[right]
    //   = (arr[0]⊕…⊕arr[left−1])⊕(arr[0]⊕…⊕arr[left−1])⊕(arr[left]⊕…⊕arr[right])
    //   = (arr[0]⊕…⊕arr[left−1])⊕(arr[0]⊕…⊕arr[right])
    //   = xors[left]⊕xors[right+1]​

    const m = queries.length;
    const ans = new Array(m).fill(0);

    for (let i = 0; i < m; i++) {
        ans[i] = xors[queries[i][0]] ^ xors[queries[i][1] + 1]
    }

    return ans
};