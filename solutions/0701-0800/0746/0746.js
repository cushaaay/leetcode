var minCostClimbingStairs = function(cost) {
  let first = cost[0];
  let second = cost[1];

  if (cost.length <= 2) Math.min(first, second);
  
  for (let i = 2; i < cost.length; i++) {
    let curr = cost[i] + Math.min(first, second);

    first = second;
    second = curr;
  }

  return Math.min(first, second);
};