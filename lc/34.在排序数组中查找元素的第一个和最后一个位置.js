/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {};

function binarySearch(list, target) {
  let l = 0,
    r = list.length - 1,
    result = list.length;
  while (l <= r) {
    const middle = (l + r) >> 1;
    if (list[middle] > target || list[middle] >= target) {
      r = middle - 1;
      console.log(middle, l, r, 123);
      result = middle;
    } else {
      l = middle + 1;
    }
  }
  return result;
}

// searchRange([5, 7, 7, 8, 8, 10], 8);
console.log(binarySearch([5, 7, 7, 8, 8, 10], 8));
// @lc code=end
