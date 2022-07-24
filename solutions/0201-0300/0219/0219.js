var containsNearbyDuplicate = function(nums, k) {
  let hashset = new Set();
  
  for (let i = 0; i < nums.length; i++) {
    if (i > k) hashset.delete(nums[i-k-1]);
    if (hashset.has(nums[i])) {
      return true;
    } else {
      hashset.add(nums[i]);
    }
  }
  
  return false;
};