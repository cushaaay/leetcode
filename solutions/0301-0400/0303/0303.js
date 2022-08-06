var NumArray = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1]
  }
  
  this.nums = nums;
};

NumArray.prototype.sumRange = function(left, right) {
  if (left === 0) return this.nums[right];
  
  return this.nums[right] - this.nums[left - 1];
};