function babbleSort(arr) {
  if (!arr) return;

  // 循环的轮次i
  for (let i = 0; i < arr.length - 1; i++) {
    // 升序，一轮减少一个有序度
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // 一次比较交换，三次赋值
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

let testArr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(babbleSort(testArr));
