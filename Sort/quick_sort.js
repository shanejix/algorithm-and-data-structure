function sort(arr) {
  if (!arr) return;
  quickSort(arr, 0, arr.length - 1);
}

function quickSort(arr, left, right) {
  if (left >= right) return;

  let p = partition(arr, left, right);

  quickSort(arr, left, p - 1);
  quickSort(arr, p + 1, right);
}

function partition(arr, left, right) {
  let pivot = arr[right];
  let i = left;
  for (let j = left; j < right; j++) {
    // 升序
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i, right);
  return i;
}

function swap(arr, p, q) {
  let tem = arr[p];
  arr[p] = arr[q];
  arr[q] = tem;
}

let testArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];
sort(testArray);
console.log(testArray);
