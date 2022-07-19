var isIsomorphic = function(s, t) {
  let m1 = {};
  let m2 = {};
  
  for (let i = 0; i < s.length; i++) {
    if (m1[s[i]] !== m2[t[i]]) return false;
    
    m1[s[i]] = i + 1;
    m2[t[i]] = i + 1;
  }
  
  return true;
};
