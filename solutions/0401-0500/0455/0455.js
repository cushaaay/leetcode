var findContentChildren = function(g, s) {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);
  
  let count = 0;
  for (let i = 0; count < g.length, i < s.length; i++) {
    if (g[count] <= s[i]) count++;
  }
  
  return count;
};