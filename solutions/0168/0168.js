var convertToTitle = function(columnNumber) {
  let capitals = [];
  let result = [];
  
  for (let i = 'A'.charCodeAt(); i < 'Z'.charCodeAt() + 1; i++) {
    capitals.push(String.fromCharCode(i));
  }
  
  while (columnNumber > 0) {
    result.unshift(capitals[(columnNumber - 1) % 26]);
    columnNumber = Math.floor((columnNumber - 1) / 26);
  }
  
  return result.join('');
};
