var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  
  let countS = {};
  let countT = {};
  for (let i = 0; i < s.length; i++) {
    countS[s[i]] = countS[s[i]] ? countS[s[i]] + 1 : 1;
    countT[t[i]] = countT[t[i]] ? countT[t[i]] + 1 : 1; 
  }
  for (let i = 0; i < s.length; i++) {
    if (countS[s[i]] !== countT[s[i]]) return false;
  }
  
  return true;
};