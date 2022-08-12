var intersect = function(nums1, nums2) {
  let count = {};
  let res = [];
  
  for (let i = 0; i < nums1.length; i++) {
    count[nums1[i]] = count[nums1[i]] ? count[nums1[i]] += 1 : 1;
  }
  for (let i = 0; i < nums2.length; i++) {
    if (count[nums2[i]] && count[nums2[i]] > 0) {
      res.push(nums2[i]);
      count[nums2[i]] -= 1;
    } 
  }

  return res;
};