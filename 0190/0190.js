var reverseBits = function(n) {  
  let res = 0;
  
  for (let i = 0; i < 32; i++) {
    res <<= 1;
    if ((n & 1) == 1) res++;
    n >>= 1;
  }
  
  return res >>> 0;
};
