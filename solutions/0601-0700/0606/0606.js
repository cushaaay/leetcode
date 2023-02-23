var tree2str = function(root) {
  if (!root) return "";

  let result = String(root.val);

  let left = tree2str(root.left);
  let right = tree2str(root.right);

  if (left === "" && right === "") return result;
  if (left === "") return `${result}()(${right})`;
  if (right === "") return `${result}(${left})`;

  return `${result}(${left})(${right})`;
};