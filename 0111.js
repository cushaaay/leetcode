var minDepth = function(root) {
  if (!root) return 0;
  
  let left = minDepth(root.left);
  let right = minDepth(root.right);
  
  return (Math.min(left, right) || Math.max(left, right)) + 1;
};
