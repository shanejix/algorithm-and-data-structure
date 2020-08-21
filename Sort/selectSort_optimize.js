function selectSort(arr) {
  if (!arr) return;

  //循环的轮次
  for (let i = 0; i < arr.length; i++) {
    // 升序
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j + 1]) {
        // 交换
        let tem = arr[j + 1];
        arr[j + 1] = arr[i];
        arr[i] = tem;
      }
    }
  }

  return arr;
}

let testArr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(selectSort(testArr));
