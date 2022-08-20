var findMaxConsecutiveOnes = function(nums) {
  let max = 0;
  let count = 0;
  
  for (let i = 0; i < nums.length; i++) {
    count = nums[i] === 0 ? 0 : count + 1;
    max = Math.max(max, count);
  }
  
  return max;
};