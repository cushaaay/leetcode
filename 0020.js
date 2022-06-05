var isValid = function(s) {
  const stack = [];
  const dict = {')':'(', ']':'[', '}':'{'};
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else if (stack.pop() !== dict[s[i]]) {
      return false;
    }
  }
  return stack.length === 0;
};
