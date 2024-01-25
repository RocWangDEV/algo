/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

// [7,1,5,3,6,4]

var maxProfit = function (prices) {
  if (prices.length < 2) return 0;
  let current = prices[0];
  const dp = [0];

  for (let i = 1; i < prices.length; i++) {
    const cur = prices[i];
    current = Math.min(cur, current);
    dp[i] = Math.max(dp[i - 1], cur - current);
  }
  
  return dp[prices.length - 1];
};
// @lc code=end
