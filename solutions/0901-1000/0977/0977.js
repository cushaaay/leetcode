var sortedSquares = function(nums) {
  let res = [];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left]**2 > nums[right]**2) {
      res.push(nums[left]**2);
      left++;
    } else {
      res.push(nums[right]**2);
      right--;
    }
  }

  return res.reverse();
};