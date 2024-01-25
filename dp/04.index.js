// function maxValue(w, v, bag) {
//   const map = new Array(w.length + 1).fill(-1);
//   if (!w || !v || w.length !== v.length || w.length === 0) return 0;
//   const res = process(w, v, 0, bag, map);
//   return res;
// }

// function process(w, v, index, bag, map) {
//   if (map[index] !== -1) {
//     console.log(map[index], map, index, 111);
//     return map[index];
//   };
//   if (bag < 0) return -1;
//   if (index === w.length) return 0;
//   const p1 = process(w, v, index + 1, bag, map);
//   map[index] = p1;
//   let p2 = 0;
//   const next = process(w, v, index + 1, bag - w[index], map);
//   if (next !== -1) {
//     p2 = v[index] + next;
//   }
//   const result = Math.max(p1, p2);
//   return result;
// }

// const w = [3, 2, 4, 7, 3, 1, 7];
// const v = [5, 6, 3, 19, 12, 4, 2];
// const bag = 15;
// console.log(maxValue(w, v, bag));

// index 0 -> n
// rest 15

function maxValue(w, v, bag) {
  const n = w.length;
  // [n + 1][bag + 1]
  const dp = new Array(n + 1).fill(new Array(bag + 1));
  return dp[0][bag];
}