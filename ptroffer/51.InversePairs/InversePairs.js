// 题目描述
// 在数组中的两个数字，如果前面一个数字大于后面的数字，
// 则这两个数字组成一个逆序对。输入一个数组, 求出这个数组中的逆序对的总数P。
// 并将P对1000000007取模的结果输出。 即输出P % 1000000007

// 输入描述:
// 题目保证输入的数组中没有的相同的数字

// 数据范围：

// 	对于%50的数据,size<=10^4

// 	对于%75的数据,size<=10^5

// 	对于%100的数据,size<=2*10^5




function InversePairs(data) {
    if (!data || data.length < 2) return 0;

    var copy = data.slice(),
        count = 0;
    count = mergeSort(data, copy, 0, data.length - 1);
    return count % 1000000007;
}

function mergeSort(data, copy, start, end) {
    if (end === start) return 0;
    var mid = (end - start) >> 1,
        left = mergeSort(copy, data, start, start + mid),
        right = mergeSort(copy, data, start + mid + 1, end),
        count = 0,
        p = start + mid,//前一个数组的最后一个下标
        q = end,//后一个数组的下标
        copyIndex = end;//辅助数组下标，从最后一个算起

    while (p >= start && q >= start + mid + 1) {
        if (data[p] > data[q]) {
            count += q - start - mid;
            copy[copyIndex--] = data[p--];
        } else {
            copy[copyIndex--] = data[q--];
        }
    }

    while (p >= start) {
        copy[copyIndex--] = data[p--];
    }

    while (q >= start + mid + 1) {
        copy[copyIndex--] = data[q--];
    }
    return left + right + count;
}