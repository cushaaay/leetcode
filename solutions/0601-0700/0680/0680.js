var validPalindrome = function(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      let one = s.slice(left, right);
      let two = s.slice(left + 1, right + 1);

      return one === [...one].reverse().join('') || two === [...two].reverse().join('');
    }

    left++;
    right--;
  }

  return true;
};