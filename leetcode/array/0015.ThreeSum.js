// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// solution1: sort , three pointer

function threeSum(nums) {
  let result = [];

  if (nums && nums.length) {
    // increace sort
    let incSorted = nums.sort((a, b) => a - b);

    // loop index pa = 0;
    for (let pa = 0; pa < incSorted.length - 2; pa++) {
      // transform to two nums sum
      let target = 0 - incSorted[pa];
      // pre pointer pb
      let pb = pa + 1;
      // end pointer pc
      let pc = incSorted.length - 1;
      // skip positive value
      if (incSorted[pa] > 0) break;
      // skip same vlue
      if (pa > 0 && incSorted[pa] === incSorted[pa - 1]) continue;

      // while loop
      while (pb < pc) {
        if (incSorted[pb] + incSorted[pc] === target) {
          result.push([incSorted[pa], incSorted[pb], incSorted[pc]]);
          pb++;
          pc--;
          // skip same value
          while (pb < pc && incSorted[pb] === incSorted[pb - 1]) pb++;
          while (pb < pc && incSorted[pc] === incSorted[pc + 1]) pc--;
        } else if (incSorted[pb] + incSorted[pc] < target) {
          pb++;
        } else if (incSorted[pb] + incSorted[pc] > target) {
          pc--;
        }
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
