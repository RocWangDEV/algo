/*
 * @lc app=leetcode.cn id=2765 lang=javascript
 *
 * [2765] 最长交替子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function (nums) {
  let max = -1;
  const stack = new Array();
  for (let i = 0; i < nums.length; i++) {
    if (!stack.length) {
      stack.push(nums[i]);
    } else if (
      ((stack.length & 1) !== 0 && stack[stack.length - 1] + 1 === nums[i]) ||
      ((stack.length & 1) === 0 && stack[stack.length - 1] - 1 === nums[i])
    ) {
      stack.push(nums[i]);
      if (stack.length > max) {
        max = stack.length;
      }
    } else {
      let last = null;
      while (stack.length) {
        const cur = stack.pop();
        if (last === null) {
          last = cur;
        }
      }
      if (last + 1 === nums[i]) {
        stack.push(last);
      }
      stack.push(nums[i]);
    }
  }
  return max;
};
// @lc code=end
