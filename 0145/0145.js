var postorderTraversal = function(root) {
  let ret = [];
  let stack = [root];
  
  while (stack.length > 0) {
    let node = stack.pop();
    
    if (node) {
      ret.push(node.val);
      stack.push(node.left);
      stack.push(node.right);
    }
  }
  
  return ret.reverse();
};
