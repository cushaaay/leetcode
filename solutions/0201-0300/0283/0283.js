var moveZeroes = function(nums) {
  let cur = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (cur !== i) {
        nums[cur] = nums[i];
        nums[i] = 0;
      }
      cur++;
    }
  }
  
  return nums;
};