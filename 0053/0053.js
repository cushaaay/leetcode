var maxSubArray = function(nums) {
  let maxSub = nums[0];
  let curSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (curSum < 0) {
      curSum = 0;
    }
    curSum += nums[i];
    maxSub = Math.max(maxSub, curSum);
  }

  return maxSub;
};
