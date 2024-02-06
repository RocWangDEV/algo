/*
 * @lc app=leetcode.cn id=2670 lang=javascript
 *
 * [2670] 找出不同元素数目差数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function (nums) {
  const index = new Array(nums.length).fill(0);
  const content = new Set;
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    content.add(current);
    index[i] = content.size;
  }
  content.clear();
  for (let i = nums.length - 1; i >= 0; i--) {
    const current = nums[i];
    if (i === nums.length - 1) {
      content.add(current);
      continue;
    }
    index[i] = index[i] - content.size;
    content.add(current);
  }
  return index;
};

// distinctDifferenceArray([3, 2, 3, 4, 2]);

// @lc code=end
