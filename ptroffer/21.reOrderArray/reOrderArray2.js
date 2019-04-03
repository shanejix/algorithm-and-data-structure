// 题目描述
// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
// 使得所有的奇数位于数组的前半部分，
// 所有的偶数位于数组的后半部分，并保证奇数和奇数，
// 偶数和偶数之间的相对位置不变。

//思路一：双指针法；第一个指针初始化为数组的第一个元素，并且只向后移动

//第二个指针初始化为数组的的最后一个元素，并且只向前移动

//当一个指针的指向的值为偶数并且第二个指针指向的值为奇数时——交换


//思路二：双数组法；不推荐

function reOrderArray(array) {
    var odd = [];
    var even = [];
    for (var i = 0; i < array.length; i++) {
        if ((array[i] % 2) === 0) {
            even.push(array[i]);
        } else {
            odd.push(array[i])
        }
    }
    return odd.concat(even);
}