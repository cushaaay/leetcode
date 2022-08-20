var findComplement = function(num) {
  let mask = ~0;
  
  while (num & mask) mask <<= 1;
  
  return ~mask & ~num;
};