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