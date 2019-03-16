// 题目描述
// 输入一个字符串, 按字典序打印出该字符串中字符的所有排列。
// 例如输入字符串abc, 则打印出由字符a, b, c所能排列出来的所有字符串abc, acb, bac, bca, cab和cba。

function Permutation(str) {
    let res = [];
    if (str.length <= 0) return res;
    arr = str.split(''); // 将字符串转化为字符数组
    res = permutate2(arr, 0, res);
    res = [...new Set(res)]; // 去重
    res.sort(); // 排序
    return res;
}
function permutate2(arr, index, res) {
    if (arr.length === index) {
        let s = '';
        for (let i = 0; i < arr.length; i++) {
            s += arr[i];
        }
        return res.push(s);
    }
    for (let i = index; i < arr.length; i++) {
        [arr[index], arr[i]] = [arr[i], arr[index]]; // 交换
        permutate2(arr, index + 1, res);
        [arr[index], arr[i]] = [arr[i], arr[index]]; // 交换
    }

    return res;
}