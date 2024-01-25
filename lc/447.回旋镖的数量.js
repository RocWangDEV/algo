/*
 * @lc app=leetcode.cn id=447 lang=javascript
 *
 * [447] 回旋镖的数量
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  let result = 0;
  const index = new Map;
  for (const [x, y] of points) {
    index.clear();
    for (const [kx, ky] of index) {
      const d = Math.pow(kx - x, 2) + Math.pow(ky - y, 2);
      const b = index.get(d) ?? 0;
      result += b * 2;
      index.set(d, b + 1);
    }
  }
  return result;
};
// @lc code=end

numberOfBoomerangs([[0,0],[1,0],[-1,0],[0,1],[0,-1]]);