var majorityElement = function(nums) {
  let res = 0;
  let count = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) res = nums[i];
    count += (nums[i] === res ? 1 : -1);
  }
  
  return res;
};
