var reverseVowels = function(s) {
  let word = s.split('');
  let vowels = 'aeiouAEIOU';
  let left = 0;
  let right = s.length - 1;
  
  while (left < right) {
    while (left < right && !vowels.includes(word[left])) left++;
    while (left < right && !vowels.includes(word[right])) right--;
    
    let temp = word[left];
    word[left] = word[right];
    word[right] = temp;
    left++;
    right--;
  }
  
  return word.join('');
};