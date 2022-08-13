var guessNumber = function(n) {
  let left = 0;
  let right = n;
  
  while (left < right) {
    let middle = Math.floor((right + left) / 2);
    
    if (guess(middle) == 1) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  
  return left;
};