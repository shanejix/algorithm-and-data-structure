// You are given a 2D array of integers envelopes where envelopes[i] = [wi, hi] represents the width and the height of an envelope.

// One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.

// Return the maximum number of envelopes can you Russian doll (i.e., put one inside the other).

// Note: You cannot rotate an envelope.

//  

// Example 1:

// Input: envelopes = [[5,4],[6,4],[6,7],[2,3]]
// Output: 3
// Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
// Example 2:

// Input: envelopes = [[1,1],[1,1],[1,1]]
// Output: 1
//  

// Constraints:

// 1 <= envelopes.length <= 5000
// envelopes[i].length == 2
// 1 <= wi, hi <= 104

// 方法一：升序排列后，求最大套娃数（最后求解部分有问题）

// [[2,100],[3,200],[4,300],[5,500],[5,400],[5,250],[6,370],[6,360],[7,380]] 用例没过

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
    let increase = mergeSort(envelopes, 0, envelopes.length - 1);

    console.log(increase);

    let max = 1;
    let pre = 0;

    for (let i = 1; i < increase.length; i++) {
        let last = increase[i];

        if (last[0] > increase[pre][0] && last[1] > increase[pre][1]) {
            console.log(increase[pre], last)
            pre = i;
            max++
        }

    }

    return max;
};

function mergeSort(envelopes, l, r) {

    if (r === l) {
        // console.log(l,envelopes[l])
        return [envelopes[l]];
    }

    let mid = (l + r) >> 1;

    return merge(mergeSort(envelopes, l, mid), mergeSort(envelopes, mid + 1, r));
}

function merge(l1, l2) {
    let res = [];

    while (l1 && l2 && l1.length > 0 && l2.length > 0) {
        let a1 = l1[0];
        let a2 = l2[0];

        // console.log(l1,l2,a1,a2)

        if (a1[0] < a2[0]) {
            res.push(a1);
            l1.shift();
        } else if (a1[0] === a2[0]) {
            if (a1[1] <= a2[1]) {
                res.push(a1)
                l1.shift();
            } else {
                res.push(a2);
                l2.shift();
            }
        } else {
            res.push(a2);
            l2.shift();
        }
    }

    if (l1) {
        res.push(...l1)
    }

    if (l2) {
        res.push(...l2)
    }

    return res;
}


// 方法一：升序排列后，求最大套娃数- 逆序后依然不行

// [[46,89],[50,53],[52,68],[72,45],[77,81]] 用例不通过

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
    let increase = mergeSort(envelopes, 0, envelopes.length - 1);

    console.log(increase);

    // let max = 1;
    // let pre = 0;

    // for (let i = 1; i < increase.length; i++) {
    //     let last = increase[i];

    //     if (last[0] > increase[pre][0] && last[1] > increase[pre][1]) {
    //         console.log(increase[pre], last)
    //         pre = i;
    //         max++
    //     }

    // }

    // return max;

    let max = 1;
    let p = increase.length - 1;

    for (let i = increase.length - 2; i >= 0; i--) {
        let last = increase[p];
        let curr = increase[i];

        if (curr[0] === last[0]) {
            continue;
        }

        if (curr[0] < last[0] && curr[1] < last[1]) {
            p = i;
            max++;
        }
    }

    return max;
};

function mergeSort(envelopes, l, r) {

    if (r === l) {
        // console.log(l,envelopes[l])
        return [envelopes[l]];
    }

    let mid = (l + r) >> 1;

    return merge(mergeSort(envelopes, l, mid), mergeSort(envelopes, mid + 1, r));
}

function merge(l1, l2) {
    let res = [];

    while (l1 && l2 && l1.length > 0 && l2.length > 0) {
        let a1 = l1[0];
        let a2 = l2[0];

        // console.log(l1,l2,a1,a2)

        if (a1[0] < a2[0]) {
            res.push(a1);
            l1.shift();
        } else if (a1[0] === a2[0]) {
            if (a1[1] <= a2[1]) {
                res.push(a1)
                l1.shift();
            } else {
                res.push(a2);
                l2.shift();
            }
        } else {
            res.push(a2);
            l2.shift();
        }
    }

    if (l1) {
        res.push(...l1)
    }

    if (l2) {
        res.push(...l2)
    }

    return res;
}


// 方法一：真正的解决方案，动态规划

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
    if (envelopes.length === 0) {
        return 0
    }

    let len = envelopes.length

    // 按照第一个值 W 升序，如果第一个值 W 相等，按照第二个值 H 降序，
    // [(1,1),(1,2),(1,3),(1,4)] 对于每一种 w 值，我们最多只能选择 1 个信封
    envelopes.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0]
        } else {
            return b[1] - a[1]
        }
    })

    // 将二维度转化为一维度，在 W 值 严格单调递增时 => 求最大上升子序列问题
    let dp = new Array(len).fill(1);
    let max = dp[0];

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (envelopes[i][1] > envelopes[j][1]) {
                dp[i] = Math.max(dp[j] + 1, dp[i])
            }

            max = Math.max(max, dp[i])
        }
    }

    return max;

};