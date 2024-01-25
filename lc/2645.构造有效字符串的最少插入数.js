/*
 * @lc app=leetcode.cn id=2645 lang=javascript
 *
 * [2645] 构造有效字符串的最少插入数
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */
var addMinimum = function (word) {
  let result = 0;
  const stack = new Array();
  for (const info of word) {
    if (!stack.length) {
      stack.push(info);
    } else if (
      stack.length &&
      (info.charCodeAt() === stack[stack.length - 1].charCodeAt() + 1 ||
        info.charCodeAt() === stack[stack.length - 1].charCodeAt() + 2)
    ) {
      stack.push(info);
    } else {
      result += 3 - stack.length;
      while (stack.length) {
        stack.pop();
      }
      stack.push(info);
    }
  }
  return result + 3 - stack.length;
};

console.log(addMinimum("abba"));

// @lc code=end
