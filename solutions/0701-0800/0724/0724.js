var pivotIndex = function(nums) {
  let sum = nums.reduce((a, b) => a + b, 0);
  let leftsum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (leftsum === sum - leftsum - nums[i]) return i;
    leftsum += nums[i];
  }

  return -1;
};