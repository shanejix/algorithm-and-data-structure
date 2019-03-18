/** 
 * 
 * 递归：
 * 
 * 
 * 思路：两两组合，直到n==1；
 * 
 * 
 * 伪代码：
 * 
*/

var ans, tmp;

function dfs(str, idx, digits) {
    if (idx === digits.length) {
        ans.push(str);
        return;
    }

    var num = Number(digits[idx]);
    if (num <= 1)
        dfs(str, idx + 1, digits);
    else {
        for (var i = 0, len = tmp[num].length; i < len; i++)
            dfs(str + tmp[num][i], idx + 1, digits);
    }
}

var letterCombinations = function (digits) {
    if (!digits.length)
        return [];

    tmp = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'],
        ans = [];

    dfs('', 0, digits);
    return ans;
};


// var letterCombinations = function(digits) {
//     let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
//     let arr = digits.split('');
//     let temp = [];

//     arr.forEach((ele) => {
//         temp.push(map[ele]);
//     })

//     function combination(arr) {
//         let temparr = [];
//         for (let i = 0, il = arr[0].length; i < il; i++){
//             for (let j = 0, jl = arr[1].length; j < jl; j++) {
//                 temparr.push(`${arr[0][i]}${arr[1][j]}`);
//             }
//         }
//         arr.splice(0, 2, temparr);

//         if (arr.length > 1) {
//             combination(arr);
//         } else {
//             return temparr;
//         }
//         return arr[0]
//     }
//     return combination(temp);
// };

// export default letterCombinations;