var hammingDistance = function(x, y) {
  let dist = 0;
  let n = x ^ y;
  
  while(n) {
    dist++;
    n = n & (n - 1);
  }
  
  return dist;
};