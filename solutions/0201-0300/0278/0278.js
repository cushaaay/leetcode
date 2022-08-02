var solution = function(isBadVersion) {
  return function(n) {
    let start = 1;
    let end = n;
    
    while (start < end) {
      let mid = start + Math.floor((end - start) / 2);
      if (!isBadVersion(mid)) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }
    
    return start;
  };
};