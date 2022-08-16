var findTheDifference = function(s, t) {
  let charCode = t.charCodeAt(s.length);
  
  for (let i = 0; i < s.length; i++) {
    charCode -= s.charCodeAt(i);
    charCode += t.charCodeAt(i);
  }
  
  return String.fromCharCode(charCode);
};