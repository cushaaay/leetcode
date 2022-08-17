var addStrings = function(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let str = [];

  while (i >= 0 || j >= 0 || carry) {
    let sum = 0;
    let x = i < 0 ? 0 : +num1[i--];
    let y = j < 0 ? 0 : +num2[j--];
    
    sum = x + y + carry;
    carry = Math.floor(sum / 10);
    str.unshift(sum % 10);
  }
  
  return str.join('');
};