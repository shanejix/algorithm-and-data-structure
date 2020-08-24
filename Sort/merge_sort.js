function mergeSort(arr, p, q) {
  if (p >= q) return [arr[q]];

  let mid = Math.floor((p + q) / 2);

  return merge(mergeSort(arr, p, mid), mergeSort(arr, mid + 1, q));
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    // 升序
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }

  if (left.length) {
    result.push(...left);
  }

  if (right.length) {
    result.push(...right);
  }

  return result;
}

function sort(arr) {
  if (!arr) return;

  return mergeSort(arr, 0, arr.length - 1);
}

let testArr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(sort(testArr));
