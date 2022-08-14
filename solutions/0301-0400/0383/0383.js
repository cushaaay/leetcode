var canConstruct = function(ransomNote, magazine) {
  let hash = {};
  
  for (let i = 0; i < magazine.length; i++) {
    if (!hash[magazine[i]]) {
      hash[magazine[i]] = 1;
    } else {
      hash[magazine[i]] += 1;
    }
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (hash[ransomNote[i]] > 0) {
      hash[ransomNote[i]] -= 1;
    } else {
      return false;
    }
  }
  
  return true;
};