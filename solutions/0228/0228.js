var summaryRanges = function(nums) {
  let res = [];
  
  for (let i = 0; i < nums.length; i++) {
    let start = nums[i];
    
    while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) i++;
    
    if (start !== nums[i]) {
      res.push(`${start}->${nums[i]}`);
    } else {
      res.push(`${start}`);
    }
  }
  
  return res;
};