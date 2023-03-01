var calPoints = function(operations) {
  let stack = [];

  operations.forEach((el) => {
    switch(el) {
      case "+":
        stack.push(stack.at(-2) + stack.at(-1));
        break;
      case "D":
        stack.push(2 * stack.at(-1));
        break;
      case "C":
        stack.pop();
        break;
      default:
        stack.push(+el);
    }
  });

  return stack.reduce((a, b) => a + b, 0);
};