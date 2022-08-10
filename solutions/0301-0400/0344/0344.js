var reverseString = function(s) {
 let word = s;
  
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    let temp = word[i];
    word[i] = word[j];
    word[j] = temp;
    i++;
    j--
  }
  
  return word;
};