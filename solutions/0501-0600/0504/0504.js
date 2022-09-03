var convertToBase7 = function(num) {
  let n = Math.abs(num);
  let res = '';
  
  while (n) {
    res = `${Math.floor(n % 7) + res}`;
    n = Math.floor(n / 7);
  }
  
  return (num < 0 ? `-${res}` : res) || '0';
};