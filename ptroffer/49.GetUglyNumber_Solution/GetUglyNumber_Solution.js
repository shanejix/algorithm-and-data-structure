// 题目描述
// 把只包含质因子2、3和5的数称作丑数（Ugly Number）。
// 例如6、8都是丑数，但14不是，因为它包含质因子7。 习惯上我们把1当做是第一个丑数。
// 求按从小到大的顺序的第N个丑数。



//剑指offer思路二：

function GetUglyNumber_Solution(index)
{
    let count2 = 0;
    let count3 = 0;
    let count5 = 0;

    let uglyarr = [1];

    if (index <= 0) {
        return null;
    }

    for (let i = 1; i < index; i++){
        uglyarr[i] = Math.floor(uglyarr[count2] * 2, uglyarr[count3] * 3, uglyarr[count5] * 5);
        if (uglyarr[i] == uglyarr[count2] * 2) {
            count2++;
        }
        if (uglyarr[i] == uglyarr[count3] * 3) {
            count3++;
        }
        if (uglyarr[i] == uglyarr[count5] * 5) {
            count5++;
        }
    }
    return uglyarr[index - 1];
}