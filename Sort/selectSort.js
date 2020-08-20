function selectSort(arr) {
  if (!arr) return;

  //循环的轮次
  for (let i = 0; i < arr.length; i++) {
    // 升序
    // 已排序区间待定最小值
    let currentMix = arr[i];
    // 每一轮选择出未排序区间最小值
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < currentMix) {
        currentMix = arr[j];
        arr[j] = arr[i];
        arr[i] = currentMix;
      }
    }
  }

  return arr;
}

let testArr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(selectSort(testArr));
