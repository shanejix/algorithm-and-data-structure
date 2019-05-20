// 题目描述
// 在一个字符串(0 <= 字符串长度 <= 10000，全部由字母组成)中找到第一个只出现一次的字符,
// 并返回它的位置, 如果没有则返回 - 1（需要区分大小写）.



//剑指offer思路，第一次遍历记录元素的次数和idx

//第二次遍历，校验是否存在
// function FirstNotRepeatingChar(str)
// {
//     let obj = {};
//     let index = null;
//     str.split('').forEach((ele, idx) => {
//         for (let key in obj) {
//             if (ele == key) {
//                 obj[ele]++;
//             } else {
//                 obj[ele] = 1;
//                 index = idx;
//             }
//         }
//     })

//     for (let key in obj) {
//         if (obj[key] == 1) {
//             return index;
//         }
//         return -1;
//     }
// }


//理由lastIndexOf和indexOf两头遍历，位置相同则是出现一次的元素

function FirstNotRepeatingChar(str) {
    var length = str.length;
    for (var i = 0; i < length; i++) {
        if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {
            return i;
            break;
        }

    }

    return -1;
}


