/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const ans = [];
  const path = new Array(n).fill(0);

  function valid(r, c) {
    for (let i = 0; i < r; i++) {
      const current = path[i];
      if (c === current || r + c === i + current || r - c === i - current) {
        return false;
      }
    }
    return true;
  }

  function dfs(current) {
    if (current === n) {
      ans.push(path.map((c) => ".".repeat(c) + "Q" + ".".repeat(n - 1 - c)));
      return;
    }
    for (let c = 0; c < n; c++) {
      if (valid(current, c)) {
        path[current] = c;
        dfs(current + 1);
      }
    }
  }

  dfs(0);
  return ans;
};

console.log(solveNQueens(3));
