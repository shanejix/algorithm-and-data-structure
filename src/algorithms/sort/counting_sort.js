function countinSort(arr) {
  if (!arr) return;

  let n = arr.length;

  if (n <= 1) return;

  // 确定数组范围（max）
  let maxValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  // 创建计数数组c,下标范围[0,maxValue]
  let count = Array.from({ length: maxValue + 1 }).fill(0);

  // 计算每个元素个数，并且放入count中
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  // 依次累加count
  for (let i = 1; i <= maxValue; i++) {
    count[i] = count[i - 1] + count[i];
  }

  // 创建数组res，存储排序之后的结果
  let res = new Array(n);

  // 反向填充数组目标数组res
  for (let i = n - 1; i >= 0; i--) {
    let index = count[arr[i]] - 1;

    res[index] = arr[i];
    count[arr[i]]--;
  }

  // 将结果复制给arr
  for (let i = 0; i < n; i++) {
    arr[i] = res[i];
  }
}

let testArr = [4, 3, 2, 1, 9, 9, 9, 9, 8, 7, 6, 5];

countinSort(testArr);

console.log(testArr);
