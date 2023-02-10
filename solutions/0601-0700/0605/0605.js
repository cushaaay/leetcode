var canPlaceFlowers = function(flowerbed, n) {
  let count = 0;

  for (let i = 0; i < flowerbed.length && count < n; i++) {
    let prev, next;

    if (flowerbed[i] === 0) {
      prev = (i === 0) ? 0 : flowerbed[i - 1];
      next = (i === flowerbed.length - 1) ? 0 : flowerbed[i + 1];

      if (prev === 0 && next === 0) {
        flowerbed[i] = 1;
        count++;
      }
    }
  }

  return count === n;
};