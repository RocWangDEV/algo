/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let start = 0,
    maxLen = 1;

  const dp = Array.from({ length: s.length }, () =>
    Array(s.length).fill(false)
  );
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true; // 只有一个字符串
  }

  for (let len = 2; len < s.length; len++) {
    for (let i = 0; i <= s.length - len; i++) {
      const j = i + len - 1;
      console.log(i, j);
      dp[i][j] = s[i] === s[j] && (len === 2 || dp[i + 1][j - 1]);

      if (dp[i][j] && len > maxLen) {
        start = i;
        maxLen = len;
      }
    }
  }

  console.log(s.substring(start, start + maxLen));

  return s.length === 2 && s[0] === s[1] ? s : s.substring(start, start + maxLen);
};

longestPalindrome("bb");
// @lc code=end
