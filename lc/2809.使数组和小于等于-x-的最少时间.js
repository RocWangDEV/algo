/*
 * @lc app=leetcode.cn id=2809 lang=javascript
 *
 * [2809] 使数组和小于等于 x 的最少时间
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} x
 * @return {number}
 */
var minimumTime = function(nums1, nums2, x) {
  let index = 0;
  while (true) {
    const realIndex = index % nums1.length;
    let result = 0;
    for (let i = 0; i < nums1.length; i++) {
      const current = realIndex !== i ? nums1[i] + nums2[i] : 0;
      nums1[i] = current;
      result += current;
    }
    index++;
    if (result === x) break;
    result = 0;
    if (index > 999) {
      index = -1;
      break;
    };
  }
  return index;
};

console.log(minimumTime([4,4,9,10], [4,4,1,3], 16));

// 0 8 10 13
// 4 0 10 13

// @lc code=end

