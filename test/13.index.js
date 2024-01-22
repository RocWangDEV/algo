/**
 * @param {number[]} nums
 * @return {number[]}
 */
var secondGreaterElement = function (nums) {
  const leftStack = [], rightStack = [], value = new Array(nums.length).fill(-1);
  for (let i = nums.length - 1; i >= 0; i--) {
    while (leftStack.length && nums[i] > leftStack[leftStack.length - 1]) {
      const value = leftStack.pop();
      while (value > rightStack[rightStack.length - 1]) {
        rightStack.pop();
      }
      if (!rightStack.length) {
        rightStack.push(value);
      }
    }
    if (leftStack.length || rightStack.length) {
      if (leftStack.length === 2) {
        value[i] = leftStack[0];
      }
      if (leftStack.length === 1 && rightStack.length === 1) {
        value[i] = rightStack[0];
      }
    }
    leftStack.push(nums[i]);
  }
  return value;
};

console.log(secondGreaterElement([2, 4, 0, 9, 6]));