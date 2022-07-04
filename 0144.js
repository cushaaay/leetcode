var preorderTraversal = function(root) {
  let ret = [];
  let stack = [root];
  
  while(stack.length > 0) {
    let node = stack.pop();
    
    if (node) {
      ret.push(node.val);
      stack.push(node.right);
      stack.push(node.left);
    }
  }
  
  return ret;
};
