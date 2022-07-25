var lengthOfLongestSubstring = function(s) {
  let charset = new Set();
  let left = 0;
  let res = 0;
  
  for (let i = 0; i < s.length; i++) {
    while (charset.has(s[i])) {
      charset.delete(s[left]);
      left++;
    }
    charset.add(s[i]);
    res = Math.max(res, i - left + 1);
  }
  
  return res;
};