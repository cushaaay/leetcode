var twoSum = function(nums, target) {
  let seem = {};

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (seem[diff] !== undefined) {
      return [seem[diff], i]
    }

    seem[nums[i]] = i;
  }

  return [];
};
