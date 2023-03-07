var selfDividingNumbers = function(left, right) {
  const ans = [];

  for (let i = left; i <= right; i++) {
    if (selfDividing(i)) ans.push(i);
  }

  function selfDividing(n) {
    let str = String(n);

    for (let i = 0; i < str.length; i++) {
      if (str[i] === '0' || n % str[i] > 0) return false;
    }

    return true;
  }

  return ans;
};