var findErrorNums = function(nums) {
  const n = nums.length;
  let duplicate = 0;
  let missing = 0;
  let sum = 0;
  let expectedSum = (n + 1) * (n / 2);

  for (let i = 0; i < n; i++) {
    sum += nums[i];
    if (nums.indexOf(nums[i]) !== i) {
      duplicate = nums[i];
    }
  }

  missing = expectedSum - (sum - duplicate);

  return [duplicate, missing];
};