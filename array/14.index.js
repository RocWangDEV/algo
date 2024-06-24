var nextGreaterElements = function (nums) {
  const n = nums.length;
  const stack = [];
  const ans = new Array(n).fill(-1);
  for (let i = 0; i < 2 * n; i++) {
    const current = nums[i % n];
    while (stack.length && current > nums[stack[stack.length - 1]]) {
      const index = stack.pop();
      ans[index] = current;
    }
    if (i < n) {
      stack.push(i);
    }
  }
  return ans;
};

console.log(nextGreaterElements([5, 6, 1, 4, 8, 9]));
