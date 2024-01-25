/*
 * @lc app=leetcode.cn id=2799 lang=javascript
 *
 * [2799] 统计完全子数组的数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function (nums) {
  const index = new Set();
  for (let i = 0; i < nums.length; i++) {
    index.add(nums[i]);
  }
  let left = 0,
    right = index.size - 1,
    result = 0;
  const cur = new Set();
  while (right <= nums.length - 1) {
    for (let i = left; i < right + 1; i++) {
      cur.add(nums[i]);
    }
    if (cur.size === index.size) {
      result++;
    }
    cur.clear();
    right++;
  }
  right--;
  left++;
  const cur2 = new Set();
  while (left <= nums.length - index.size) {
    for (let i = left; i < right + 1; i++) {
      cur2.add(nums[i]);
    }
    if (cur2.size === index.size) {
      result++;
    }
    cur2.clear();
    left++;
  }
  if (index.size === 1) return nums.length * (nums.length + 1) >> 1;
  return result;
};

console.log(countCompleteSubarrays([459, 459, 962, 1579, 1436, 756, 1872, 1597]));

// nums = [1,3,1,2,2] 2 5
// [5, 5, 5, 5]
/**
 * [5]
 * [5, 5]
 * [5, 5, 5]
 * [5, 5, 5, 5]
 * [5, 5, 5]
 * [5, 5]
 * [5]
 * [5, 5]
 * [5]
 * [5]
 */

// @lc code=end
