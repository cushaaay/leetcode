var binaryTreePaths = function(root) {
  if (!root) return [];
  
  let res = [];
  
  dfs(root, "", res);
  
  return res;
};

var dfs = function(root, str, res) {
  if (!root.left && !root.right) {
    res.push(`${str}${root.val}`);
  }
  if (root.left) {
    dfs(root.left, `${str}${root.val}->`, res);
  }
  if (root.right) {
    dfs(root.right, `${str}${root.val}->`, res);
  }
}