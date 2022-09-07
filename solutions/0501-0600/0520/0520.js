var detectCapitalUse = function(word) {
  let n = word.length;
  
  if (n === 1) return true;
  
  if (isUpper(word[0]) && isUpper(word[1])) {
    for (let i = 2; i < n; i++) {
      if (!isUpper(word[i])) return false;
    }
  } else {
    for (let i = 1; i < n; i++) {
      if (isUpper(word[i])) {
        return false;
      }
    }
  }
  
  return true;
};
  
function isUpper(x) {
  x = String(x);
  return x === x.toUpperCase();
}