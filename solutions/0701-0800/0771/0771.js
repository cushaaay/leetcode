var numJewelsInStones = function(jewels, stones) {
  let res = 0;
  let set = new Set();

  Array.from(jewels).forEach((el) => {
    set.add(el);
  });
  Array.from(stones).forEach((el) => {
    if (set.has(el)) return res++;
  });

  return res;
};