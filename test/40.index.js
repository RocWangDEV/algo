function consoleStack(stack) {
  const result = stack.shift();
  if (!stack.length) {
    return result;
  } else {
    const last = consoleStack(stack);
    stack.push(result);
    return last;
  }
}

function reverse(stack) {
  if (!stack.length) return;
  const i = consoleStack(stack);
  reverse(stack);
  stack.push(i);
}

const res = [1, 2, 3];
reverse(res);
console.log(res);
