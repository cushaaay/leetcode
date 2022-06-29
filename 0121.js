var maxProfit = function(prices) {
  let left = 0;
  let right = 1;
  let maxPrice = 0;
  
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      maxPrice = Math.max(maxPrice, profit);
    } else {
     left = right; 
    }
    right += 1;
  }
  
  return maxPrice;
};
