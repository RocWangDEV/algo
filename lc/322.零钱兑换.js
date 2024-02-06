/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  coins.sort((a, b) => a - b);
  let i = coins.length - 1,
    times = 0;
  while (amount > 0) {
    if (i < 0) break;
    const current = coins[i];
    if (current > amount) {
      i--;
      continue;
    }
    amount -= current;
    times++;
  }
  console.log(coins, times, amount);
  return amount === 0 ? times : -1;
};

console.log(coinChange([186, 419, 83, 408], 6249));

// @lc code=end
