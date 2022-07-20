var inorderTraversal = function(root) {
  let res = [];
  let stack = [];
  let cur = root;
    
  while (cur || stack.length > 0) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    res.push(cur.val);
    cur = cur.right;
  }
  return res;
};
