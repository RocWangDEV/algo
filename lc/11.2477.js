var minimumFuelCost = function (roads, seats) {
  const g = Array(roads.length + 1).fill(null).map(() => []);
  for (const [x, y] of roads) {
    g[x].push(y); // 记录每个点的邻居
    g[y].push(x);
  }

  let ans = 0;
  function dfs(x, fa) {
    let size = 1;
    for (const y of g[x]) {
      if (y !== fa) { // 递归子节点，不能递归父节点
        size += dfs(y, x); // 统计子树大小
      }
    }
    if (x !== 0) { // x 不是根节点
      ans += Math.ceil(size / seats);
    }
    return size;
  }
  dfs(0, -1);
  return ans;
};

const res = minimumFuelCost([[3, 1], [3, 2], [1, 0], [0, 4], [0, 5], [4, 6]], 2);
console.log(res);