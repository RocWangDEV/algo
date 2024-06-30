/*
 * @lc app=leetcode.cn id=2734 lang=javascript
 *
 * [2734] 执行子串操作后的字典序最小字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var smallestString = function (s) {
  const n = s.length;
  const stack = [];
  let maxIndex = 0;
  let max = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "a") {
      stack.push(i);
    }
  }
  for (let i = 1; i < stack.length; i++) {
    const current = stack[i] - stack[i - 1];
    if (current > max) {
      max = current;
      maxIndex = stack[i - 1];
    }
  }
  console.log(stack.length, max, maxIndex);
};

smallestString("cbabc");
// smallestString("acbabbbbbbbca"); // abaabbbbbbbca
// smallestString("leetcode");

// @lc code=end
