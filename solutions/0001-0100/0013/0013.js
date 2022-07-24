var romanToInt = function(s) {
  let abc = {'M':1000,'D':500,'C':100,'L':50,'X':10,'V':5,'I':1};
  let num = abc[s[s.length-1]];
  for (let i = 0; i < s.length - 1; i++) {
    if (abc[s[i]] < abc[s[i+1]]) {
      num -= abc[s[i]];
    } else {
      num += abc[s[i]];
    }
  }
  return num;
};
