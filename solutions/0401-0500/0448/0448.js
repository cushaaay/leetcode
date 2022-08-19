var findDisappearedNumbers = function(nums) {
  let res = [];
  
  for (let i = 0; i < nums.length; i++) {
    let temp = Math.abs(nums[i]) - 1;
    
    if (nums[temp] > 0) nums[temp] *= -1;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res.push(i + 1);
    }
  }
  
  return res;
};