var diameterOfBinaryTree = function(root) {
  let res = 0;
  
  function dfs(root) {
    if (!root) return 0;
    
    let left = dfs(root.left);
    let right = dfs(root.right);
    
    res = Math.max(res, left + right);
    
    return 1 + Math.max(left, right);
  }
  
  dfs(root);
  return res;
};