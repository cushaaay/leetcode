var longestPalindrome = function(s) {
  let res = '';
  
  for (let i = 0; i < s.length; i++) {
    extendPalindrome(i, i);
    extendPalindrome(i, i + 1);
  }
  
  function extendPalindrome(l, r) {
    while(l >= 0 && r < s.length && s[l] === s[r]) {
      if ((r - l + 1) > res.length) {
        res = s.slice(l, r + 1);
      }
      l--;
      r++;
    }
  }
  
  return res;
};