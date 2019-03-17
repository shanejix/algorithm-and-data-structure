// 题目描述
// 将一个字符串转换成一个整数(实现Integer.valueOf(string)的功能，
// 但是string不符合数字要求时返回0) ，要求不能使用字符串转换整数的库函数。
// 数值为0或者字符串不是一个合法的数值则返回0。

function StrToInt(str) {
    let res = 0,flag = 1;
    const len = str.length;
    if (!len) return 0;
    if (str[0] === '-') {
        flag = -1;
    }
    for (let i = str[0] === '+' || str[0] === '-' ? 1 : 0; i < len; i++) {
        if (!(str[i] >= '0' && str[i] <= '9')) return 0;
        res = (res << 1) + (res << 3) + (str[i] - '0');
    }
    return res * flag;
}