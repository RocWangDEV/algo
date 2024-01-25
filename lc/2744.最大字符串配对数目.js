/*
 * @lc app=leetcode.cn id=2744 lang=javascript
 *
 * [2744] 最大字符串配对数目
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  let result = 0;
  const map = new Map();
  for (let i = 0; i < words.length; i++) {
    const cur = words[i].split("");
    const isEql = cur.every((i) => i === cur[0]);
    if (!isEql) {
      map.set(words[i], 1);
    }
    const curReverse = words[i].split("").reverse().join("");
    if (map.get(curReverse) === 1) {
      map.set(curReverse, map.get(curReverse) + 1);
      result++;
    }
  }
  return result;
};

// @lc code=end
