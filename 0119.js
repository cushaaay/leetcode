var getRow = function(rowIndex) {
  let res = [[1]];
  for (let i = 0; i < rowIndex; i++) {
    let last = res.length - 1;
    let temp = [0, ...res[last], 0];
    let row = [];
    for (let j = 0; j < res[last].length + 1; j++) {
      row.push(temp[j] + temp[j + 1]);
    }
    res.push(row);
  } 
  
  return res[res.length - 1];
};
