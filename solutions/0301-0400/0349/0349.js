var intersection = function(nums1, nums2) {
  let set = new Set();
  let interset = new Set();
  
  for (let i = 0; i < nums1.length; i++) {
    set.add(nums1[i]);
  }
  for (let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i])) {
      interset.add(nums2[i]);
    }
  }

  return [...interset];
};