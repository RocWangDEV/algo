const candidates = [2, 3, 6, 7],
  target = 7;

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
  const ans = [];
  const n = candidates.length;
  let path = [];
  function dfs(last, rest) {
    if (rest < 0) return;
    if (rest === 0) {
      ans.push(JSON.parse(JSON.stringify(path)));
      return;
    }
    for (let j = 0; j < n; j++) {
      const current = candidates[j];
      if (j >= last) {
        path.push(current);
        dfs(j, rest - current);
        path.pop();
      }
    }
  }
  dfs(-1, target);
  return ans;
}

console.log(combinationSum(candidates, target));
