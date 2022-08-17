var sumOfLeftLeaves = function(root) {
  if (!root) return 0;
  
  let res = 0;
  
  if (root.left) {
    if (!root.left.left && !root.left.right) {
      res += root.left.val;
    } else {
      res += sumOfLeftLeaves(root.left);
    }
  }
  res += sumOfLeftLeaves(root.right);
  
  return res;
};