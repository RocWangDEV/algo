/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = new Array();
  let n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    const x = nums[i];
    if (i > 0 && x === nums[i - 1]) continue; // 跳过重复数字
    if (x + nums[i + 1] + nums[i + 2] > 0) break; // 当前数字往后的和全都是 > 0的了，再往后遍历也没有意义
    if (x + nums[n - 2] + nums[n - 1] < 0) continue; // 优化二
    let j = i + 1,
      k = n - 1;
    while (j < k) {
      const s = x + nums[j] + nums[k];
      if (s > 0) k--;
      else if (s < 0) j++;
      else {
        result.push([x, nums[j], nums[k]]);
        for (j++; j < k && nums[j] === nums[j - 1]; j++); // 跳过重复数字
        for (k--; k > j && nums[k] === nums[k + 1]; k--); // 跳过重复数字
      }
    }
  }
  return result;
};

// console.log(threeSum([3,0,-2,-1,1,2]));
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
// - 2, -1, -1, 0, 1, 2, 3

// @lc code=end
