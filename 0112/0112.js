var hasPathSum = function(root, targetSum) {
  function dfs(node, curSum) {
    if (!node) return false;
    
    curSum += node.val;
    if (!node.left && !node.right) {
      return curSum === targetSum;
    }
    
    return (dfs(node.left, curSum) || dfs(node.right, curSum));
  }
  
  return dfs(root, 0);
};
