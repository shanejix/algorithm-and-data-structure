function insertSort(arr) {
  if (!arr) return;

  // 循环轮次
  for (let i = 1; i < arr.length; i++) {
    // 待插数据
    let value = arr[i];
    // 每一轮从待排序区间向已排序区间插入
    for (let j = i; j > 0; j--) {
      // 升序
      if (arr[j - 1] > value) {
        arr[j] = arr[j - 1];
        // 待优化
        arr[j - 1] = value;
      } else {
        break;
      }
    }
  }

  return arr;
}

let testArr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(insertSort(testArr));
