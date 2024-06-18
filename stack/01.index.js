const currentStack = [5, 4, 3, 2, 1];

function getAndRemoveLastElement(stack) {
  const current = stack.pop();
  if (stack.length === 0) {
    return current;
  }
  const pre = getAndRemoveLastElement(stack);
  stack.push(current);
  return pre;
}

function reverse(stack) {
  if (stack.length === 0) {
    return;
  }
  const i = getAndRemoveLastElement(stack);
  console.log(i, stack);
  reverse(stack);
  stack.push(i);
}

reverse(currentStack);
