var checkPerfectNumber = function(num) {
  if (num <= 0) return false;
  
  let sum = 0;
  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      sum += i;
      if (i * i !== num) {
        sum += Math.floor(num / i);
      }
    }
  }
  
  return sum - num === num;
};