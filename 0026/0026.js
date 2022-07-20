var removeDuplicates = function(nums) {
  let count = nums.length > 0 ? 1 : 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i-1]) {
      nums[count++] = nums[i];
    }
  }

  return count;
};
