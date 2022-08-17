var thirdMax = function(nums) {
  let max1 = null;
  let max2 = null;
  let max3 = null;

  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];
    
    if (max1 === item || max2 === item || max3 === item) continue;
    if (max1 === null || item > max1) {
      [max3, max2, max1] = [max2, max1, item]
    } else if (max2 === null || item > max2) {
      [max3, max2] = [max2, item]
    } else if (max3 === null || item > max3) {
      max3 = item;
    }
  }
  
  return max3 === null ? max1 : max3;
};