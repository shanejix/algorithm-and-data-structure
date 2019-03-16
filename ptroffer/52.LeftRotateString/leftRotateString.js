// 题目：
// 汇编语言中有一种移位指令叫做循环左移（ROL），
// 现在有个简单的任务，就是用字符串模拟这个指令的运算结果。
// 对于一个给定的字符序列S，请你把其循环左移K位后的序列输出。
// 例如，字符序列S =”abcXYZdef”, 要求输出循环左移3位后的结果，即“XYZdefabc”。
// 是不是很简单？OK，搞定它！

function LeftRotateString(str, n){
    //负面测试
    //str == null || str.length == 0  undefine
    if(!str){
        return "";
    }
    //n可能越界
    n = n % str.length;
    //功能代码,常用API
    var left = str.slice(0,n);
    var right = str.slice(n);

    return right + left;
}