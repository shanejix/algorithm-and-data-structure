// 题目描述
// 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。

function Power(base, exponent)
{
    let g_invalidinput = false;
    let absExponet;

    if (base == 0 && exponent <= 0) {
        g_invalidinput = true;
        return 0;
    }
    if (exponent < 0) {
        absExponet = Math.abs(exponent);
    }
    let res = PowerWithExponet(base, absExponet);

    if (exponent < 0) {
        return 1.0 / res;
    }
    return res;
}

function PowerWithExponet(abs, absExponet) {
    if (absExponet == 0) {
        return 0;
    }
    if (absExponent == 1) {
        return base;
    }

    let res = PowerWithExponet(base, absExponet >> 2);
    res *= res;
    
    if (exponent & 0x1 == 1) {
        res *= res;
    }
    return res;
}