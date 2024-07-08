// [1,2,3,1]

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length;
  const dp = new Array(n).fill(0);
  dp[0] = nums[0];
  dp[1] = nums[0] > nums[1] ? nums[0] : nums[1];
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[n - 1];
};

// [3, 4, 2];
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const n = nums.length;
  const dp = new Array(n).fill(0);
  const list = Array.from(new Set(nums.sort((a, b) => a - b)));
  dp[0] = list[0];
  dp[1] = list[0] > list[1] ? list[0] : list[1];

  console.log(list);

  for (let i = 2; i < list.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + list[i]);
  }
  return dp[list.length - 1];
};

console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]));

// 3 3 1 1     011

/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function (low, high, zero, one) {
  const dp = new Array(high + 1).fill(0);
  const MOD = 1_000_000_007;
  dp[0] = 1;
  let ans = 0;
  for (let i = 1; i <= high; i++) {
    if (i >= zero) {
      dp[i] = (dp[i] + dp[i - zero]) % MOD;
    }
    if (i >= one) {
      dp[i] = (dp[i] + dp[i - one]) % MOD;
    }
    if (i >= low) {
      ans = (ans + dp[i]) % MOD;
    }
  }
  return ans;
};

function dfs(n) {
  if (n < 0) return 0;
  if (n === 0) return 1;
  if (dp[n]) return dp[n];
  let ans = 0;
  ans += dfs(n - zero);
  ans += dfs(n - one);
  dp[n] = ans;
  return ans;
}

console.log(countGoodStrings(3, 3, 1, 1));
