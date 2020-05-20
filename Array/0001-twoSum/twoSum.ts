const twoSum = function (nums: number[], target: number): number[] {
  for (let idx = 0; idx < nums.length; idx++) {
    const map = new Map();
    const diff = target - nums[idx];
    if (map.has(diff)) {
      return [map.get(diff), idx];
    }
    map.set(nums[idx], idx);
  }
};