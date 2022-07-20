var mySqrt = function(x) {
  if (x === 0) return 0;

  let start = 1;
  let end = x;
  while (start < end) {
    let middle = Math.floor(start + (end - start) / 2);
    if (middle <= x / middle && (middle + 1) > x / (middle + 1)) {
      return middle;
    } else if (middle > x / middle) {
      end = middle;
    } else {
      start = middle + 1;
    }
  }
    
  return start;
};
