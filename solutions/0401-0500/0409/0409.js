var longestPalindrome = function(s) {
  if (s.length === 0) return 0;
  
  let hashset = new Set();
  let count = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (hashset.has(s[i])) {
      hashset.delete(s[i]);
      count++;
    } else {
      hashset.add(s[i]);
    }
  }
  
  if (hashset.size !== 0) return (count * 2) + 1;
  
  return count * 2;
};