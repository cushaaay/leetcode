var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let middle = left + Math.floor((right - left + 1) / 2);

    if (nums[middle] > target) {
      right = middle - 1;
    } else {
      left = middle;
    }
  }

  return nums[left] === target ? left : -1;
};