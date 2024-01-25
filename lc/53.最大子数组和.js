/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// [-2,1,-3,4,-1,2,1,-5,4]

var maxSubArray = function (nums) {
  if (nums.length < 2) return nums[0];

  let current = nums[0];
  const dp = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];
    current = Math.max(cur, cur + current);
    dp[i] = Math.max(dp[i - 1], current);
  }

  return dp[nums.length - 1];
};
// @lc code=end
