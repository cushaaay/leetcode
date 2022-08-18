var arrangeCoins = function(n) {
  let left = 0;
  let right = n;
  
  while (left <= right) {
    let middle = Math.floor((right + left) / 2);
    let curr = Math.floor((middle * (middle + 1)) / 2);
    
    if (curr === n) {
      return middle
    }
    if (n < curr) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  
  return right;
};