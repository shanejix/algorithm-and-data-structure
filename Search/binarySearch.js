function binarySearch(arr, target) {
  if (!arr) return;

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] > target) {
      right = mid - 1;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    }
  }

  return -1;
}

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log(binarySearch(testArray, 10));
console.log(binarySearch(testArray, 13));
