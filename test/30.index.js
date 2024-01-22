/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
// var minExtraChar = function(s, dictionary) {
//   for (const info of dictionary) {
//     console.log(info);
//     for (let i = 0; i < info.length; i++) {
//       console.log(info[i]);

//     }
//   }
// };

var minExtraChar = function(s, dictionary) {
  // dp[i] 表示到 s[0]...s[i] 的字符串采取最优策略分割方案，剩下的字符数。
  const dp = new Array(s.length + 1).fill(0)
  for (let i = 0; i < s.length; i ++) {
      const cur = s.slice(0, i + 1)
      console.log(cur, 'cur');
      // 默认是在 s[0]...s[i - 1] 的基础上增加 s[i]
      dp[i + 1] = dp[i] + 1
      for (const word of dictionary) {
          // 如果存在满足情况的单词，取最优解
          if (cur.endsWith(word)) {
              dp[i + 1] = Math.min(dp[i + 1], dp[i - word.length + 1]);
              console.log(dp[i + 1], dp[i - word.length + 1]);
          }
      }
  }
  return dp[s.length]
};

minExtraChar('leetscode', ["leet","code","leetcode"]);