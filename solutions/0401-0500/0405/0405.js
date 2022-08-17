var toHex = function(num) {
  if (num === 0) return '0';
  
  let map = '0123456789abcdef';
  let res = '';
  
  while (num !== 0) {
    res = map[num & 15] + res;
    num >>>= 4;
  }
  
  return res;
};