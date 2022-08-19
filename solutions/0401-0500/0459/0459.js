var repeatedSubstringPattern = function(s) {
  let ss = (s + s);
  ss = ss.slice(1, ss.length - 1);
  return ss.indexOf(s) !== -1;
};