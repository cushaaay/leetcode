var toLowerCase = function(s) {
  let result = '';

  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(charCode + 32);
    } else {
      result += s[i];
    }
  }

  return result;
};