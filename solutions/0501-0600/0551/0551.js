var checkRecord = function(s) {
  let a = 0;
  let l = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') a++;
    if (s[i] === 'L') {
      l++;
    } else {
      l = 0;
    }
    
    if (a >= 2 || l > 2) return false;
  }
  
  return true;
};