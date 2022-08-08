var countBits = function(n) {
  let ans = Array(n + 1).fill(0);
  let offset = 1;
  
  for (let i = 1; i < n + 1; i++) {
    if (offset * 2 === i) offset = i;
    ans[i] = 1 + ans[i - offset];
  }
  
  return ans;
};