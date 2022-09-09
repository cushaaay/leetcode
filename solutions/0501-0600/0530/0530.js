var getMinimumDifference = function(root) {
  let prev = null;
  let min = Number.MAX_SAFE_INTEGER;
  
  function inorderTraverse(root) {
    if (root === null) return min;
  
    inorderTraverse(root.left);
    
    if (prev !== null) {
      min = Math.min(min, root.val - prev);
    }
    prev = root.val;
    
    inorderTraverse(root.right);

    return min;
  };
  
  return inorderTraverse(root);
};