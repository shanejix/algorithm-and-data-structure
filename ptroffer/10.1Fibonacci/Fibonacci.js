// 题目描述
// 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。


//思路一：递归实现：大量重复运算，栈溢出

function Fibonacci(n)
{
    if (n <= 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }

    return Fibonacci(n - 1) + Fibonacci(n - 2);
}
