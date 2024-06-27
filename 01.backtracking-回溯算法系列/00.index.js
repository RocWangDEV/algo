/**
 * 回溯3问
 * 1. 已经作出的选择
 * 2. 当前可以做出的选择
 * 3. 边界条件
 *
 * github.com/labuladong/fucking-algorithm/blob/master/%E7%AE%97%E6%B3%95%E6%80%9D%E7%BB%B4%E7%B3%BB%E5%88%97/%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95%E8%AF%A6%E8%A7%A3%E4%BF%AE%E8%AE%A2%E7%89%88.md
 */

https: function backtracking(nums) {
  const ans = [];
  function dfs(i) {
    // 边界条件
    if (i === nums.length) {
      // 添加路径
    }
    for (let j = 0; j < nums.length; j++) {
      // 做选择
      dfs();
      // 撤销选择
    }
  }
  dfs(0);
  return ans;
}
