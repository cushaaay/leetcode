var isSymmetric = function(root) {
  if (!root) return true;
    
  let stack = [[root.left, root.right]];
  while (stack.length > 0) {
    let pair = stack.pop();
    let left = pair[0];
    let right = pair[1];
      
    if (!left && !right) continue;
    if (!left || !right) return false;
    if (left.val === right.val) {
      stack.push([left.left, right.right]);
      stack.push([left.right, right.left]);
    } else {
      return false;
    }
  }
  
  return true;
};
