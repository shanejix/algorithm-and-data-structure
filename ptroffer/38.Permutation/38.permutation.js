// 题目描述
// 输入一个字符串, 按字典序打印出该字符串中字符的所有排列。
// 例如输入字符串abc, 则打印出由字符a, b, c所能排列出来的所有字符串abc, acb, bac, bca, cab和cba。

function Permutation(str) {
    if (str.length == 0) return '';
    let str_arr = str.split('');
    str_arr.sort();
    let res = [];
    for (let i = 0; i < str_arr.length; i++) {
        if (i > 0 && str_arr[i] === str_arr[i - 1]) continue;
        let front = str_arr.slice(0, i);
        let end = str_arr.slice(i + 1);
        PermutationHelp(res, str_arr[i], front.concat(end));
    }
    return res;

}
function PermutationHelp(res, temp, arr) {
    if (arr.length === 0) {
        res.push(temp);
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (i > 0 && arr[i] === arr[i - 1]) continue;
            let front = arr.slice(0, i);
            let end = arr.slice(i + 1);
            PermutationHelp(res, temp + arr[i], front.concat(end));
        }
    }
}