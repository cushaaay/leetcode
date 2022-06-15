var addBinary = function(a, b) {
  let string = '';
    
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;
  while (i >= 0 || j >= 0 || carry === 1) {
    carry += i >= 0 ? +a[i--] : 0;
    carry += j >= 0 ? +b[j--] : 0;
    string = Math.floor(carry % 2) + string;
    carry = Math.floor(carry / 2);
  }
    
  return string;
};
