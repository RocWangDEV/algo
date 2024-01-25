/*
 * @lc app=leetcode.cn id=670 lang=javascript
 *
 * [670] 最大交换
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  const list = Array.from(String(num), Number);
  for (let i = 0; i < list.length; i++) {
    const cur = list[i];
    let maxIndex = null;
    for (let j = i + 1; j < list.length; j++) {
      if (!maxIndex || list[j] >= list[maxIndex]) {
        maxIndex = j;
      }
    }
    if (list[maxIndex] > cur) {
      swap(list, i, maxIndex);
      break;
    }
  }
  return Number(list.join(''));
};

function swap(list, l, r) {
  [list[l], list[r]] = [list[r], list[l]];
}
// @lc code=end

