var isAlienSorted = function(words, order) {
  const orderInd = {};
  for (let i = 0; i < order.length; i++) {
    orderInd[order[i]] = i;
  }

  for (let i = 0; i < words.length - 1; i++) {
    let w1 = words[i];
    let w2 = words[i + 1];

    for (let j = 0; j < w1.length; j++) {
      if (j === w2.length) return false;

      if (w1[j] !== w2[j]) {
        if (orderInd[w2[j]] < orderInd[w1[j]]) return false;
        break;
      }
    }
  }

  return true;
};