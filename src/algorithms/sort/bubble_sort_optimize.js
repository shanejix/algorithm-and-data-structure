function babbleSort(arr) {
  if (!arr) return;

  // 循环的轮次i
  for (let i = 0; i < arr.length - 1; i++) {
    // 是否还有逆序
    let flag = false;
    // 升序，一轮减少一个有序度
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // 一次比较交换，三次赋值
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        flag = true;
      }
    }
    // 没有逆序提前退出
    if (!flag) break;
  }

  return arr;
}

let testArr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(babbleSort(testArr));
