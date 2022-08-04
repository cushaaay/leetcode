var wordPattern = function(pattern, s) {
  let words = s.split(' ');
  if (pattern.length !== words.length) return false;
  
  let charToWord = {};
  let wordToChar = {}
  
  for (let i = 0; i < words.length; i++) {
    let char = pattern[i];
    let word = words[i];
    if (charToWord[char] && charToWord[char] !== word) return false;
    if (wordToChar[word] && wordToChar[word] !== char) return false;
    charToWord[char] = word;
    wordToChar[word] = char;
  }
  
  return true;
};