var licenseKeyFormatting = function(s, k) {
 let str = '';
  
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== '-') {
      str += str.length % (k + 1) === k ? '-' : '';
      str += s[i];
    }
  }
  
  return str.split('').reverse().join('').toUpperCase();
};