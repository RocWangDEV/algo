/*
 * @lc app=leetcode.cn id=2808 lang=javascript
 *
 * [2808] 使循环数组所有元素相等的最少秒数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSeconds = function (nums) {
  const index = new Map();
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const current = nums[i];
    if (!index.has(current)) {
      index.set(current, []);
    }
    index.get(current).push(i);
  }

  console.log(index);

  let ans = n + 1;

  for (const [, idx] of index) {
    idx.push(idx[0] + n);
    let need = 0;

    for (let i = 1; i < idx.length; i++) {
      need = Math.max(need, (idx[i] - idx[i - 1]) >> 1);
    }

    ans = Math.min(ans, need);
  }

  console.log(index, ans);

  return ans;
};

minimumSeconds([1, 2, 1, 3, 4, 5, 6, 2]);

// [0, 4, 5] [2, 3, 7]
// 2 1 1 2

// [1, 2, 1, 2];
// [2, 2, 2, 2, 2, 2];

// 0, 5 - 2, 4

// @lc code=end
