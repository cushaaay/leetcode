var reverseWords = function(s) {
  let lastSpaceIndex = -1;
  let chArray = s.split('');
  for (let strIndex = 0; strIndex <= s.length; strIndex++) {
    if (strIndex === s.length || chArray[strIndex] === ' ') {
      let startIndex = lastSpaceIndex + 1;
      let endIndex = strIndex - 1;
      
      while (startIndex < endIndex) {
        let temp = chArray[startIndex];
        chArray[startIndex] = chArray[endIndex];
        chArray[endIndex] = temp;
        startIndex++;
        endIndex--;
      }
      lastSpaceIndex = strIndex;
    }
  }
  
  return chArray.join('');
};