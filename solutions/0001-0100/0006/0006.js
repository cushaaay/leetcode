var convert = function(s, numRows) {
  if (numRows === 1) return s;
  
  let res = '';
  for (let i = 0; i < numRows; i++) {
    let inc = 2 * (numRows - 1);
    
    for (let j = i; j < s.length; j += inc) {
      res += s[j];
      if (i > 0 && i < numRows - 1 && (j + inc - 2 * i) < s.length) {
        res += s[j + inc - 2 * i];
      }
    }
  }
  
  return res;
};