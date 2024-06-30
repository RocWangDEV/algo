const nums = [1, 1, 1, 1, 1],
  target = 3;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function findTargetSumWays(nums, target) {
  let ans = 0;
  const n = nums.length;
  function dfs(i, sub) {
    if (i === n) {
      if (sub === target) {
        ans++;
      }
      return;
    } else {
      dfs(i + 1, sub + nums[i]);
      dfs(i + 1, sub - nums[i]);
    }
  }
  dfs(0, 0);
  return ans;
}
