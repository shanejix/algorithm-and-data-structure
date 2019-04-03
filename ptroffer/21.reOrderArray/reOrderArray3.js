// 题目描述
// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
// 使得所有的奇数位于数组的前半部分，
// 所有的偶数位于数组的后半部分，并保证奇数和奇数，
// 偶数和偶数之间的相对位置不变。

//思路一：双指针法；第一个指针初始化为数组的第一个元素，并且只向后移动

//第二个指针初始化为数组的的最后一个元素，并且只向前移动

//当一个指针的指向的值为偶数并且第二个指针指向的值为奇数时——交换

function reOrderArray(array) {
    if (!array || array.length == 0) {
        return 0;
    }

    let podd = 0;
    let peven = array.length - 1;

    while (podd < peven) {
        while (podd < peven && array[podd] & 0x1 !== 0) {
            podd++;
        }
        while (podd < peven && array[peven] & 0x1 == 0) {
            peven--;
        }
        if (podd < peven) {
            [array[podd], arrya[peven]] = [array[peven], arrya[podd]];
        }
    }
}

//拓展：负数在非负数前面？？能被3整除的数在不能被3整除的数的前面？？

//----解决系列问题的通用办法——可扩展性——单独的函数来判断是否符合标准

//函数解耦成两部分：1.判断的标准2.拆分数组

function reOrderArray(array,fn) {
    if (!array || array.length == 0) {
        return 0;
    }

    let podd = 0;
    let peven = array.length - 1;

    while (podd < peven) {
        while (podd < peven && fn) {
            podd++;
        }
        while (podd < peven && fn) {
            peven--;
        }
        if (podd < peven) {
            [array[podd], arrya[peven]] = [array[peven], arrya[podd]];
        }
    }
}