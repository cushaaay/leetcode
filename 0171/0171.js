var titleToNumber = function(columnTitle) {
  let res = 0;
  let pos = 0;
  
  for (let i = columnTitle.length - 1; i >= 0 ; i--) {
    let digit = columnTitle[i].charCodeAt() - 64;
    res += digit * 26**pos;
    pos++;
  }
  
  return res;
};
