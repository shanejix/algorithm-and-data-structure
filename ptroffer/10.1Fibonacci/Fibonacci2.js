// 题目描述
// 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。


//思路一：递归实现：大量重复运算，栈溢出

//思路二:考虑将重复的运算存起来，

//思路三：循环实现：从下向上计算，f(0)+f(1) =f(3)--以此类推

function Fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        let f0 = 0;
        let f1 = 1;
        let f2 = null;
        for (let i = 2; i <= n; i++){
            f2 = f0 + f1;
            f0 = f1;
            f1 = f2;
        }
        return f2;
    }
}
