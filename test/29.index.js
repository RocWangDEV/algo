var numberOfBoomerangs = function (points) {
  let ans = 0;
  const cnt = new Map();
  for (const [x1, y1] of points) {
      cnt.clear();
      for (const [x2, y2] of points) {
          const d2 = (x1 - x2) ** 2 + (y1 - y2) ** 2;
          const c = cnt.get(d2) ?? 0;
          ans += c * 2;
          cnt.set(d2, c + 1);
      }
  }
  return ans;
};