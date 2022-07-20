var isPalindrome = function(s) {
  let left = 0;
  let right = s.length - 1;
  
  while (left < right) {
    while (left < right && !alphabetNumber(s[left])) {
      left++;
    }
    while (left < right && !alphabetNumber(s[right])) {
      right--;
    }
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left++;
    right--;
  }

  function alphabetNumber(char) {
    return (('A'.charCodeAt() <= char.charCodeAt() && char.charCodeAt() <= 'Z'.charCodeAt()) ||
            ('a'.charCodeAt() <= char.charCodeAt() && char.charCodeAt()  <= 'z'.charCodeAt()) ||
            ('0'.charCodeAt() <= char.charCodeAt() && char.charCodeAt()  <= '9'.charCodeAt()))
  }
  
  return true;
};
