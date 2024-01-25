// 背包

/**
 * 
 * @param {*} w 重量
 * @param {*} v 价值
 * @param {*} bag 背包容量
 * @return 不超重情况下最大价值
 */
function maxValue(w, v, bag) {
  if (!w || !v || w.length !== v.length || w.length === 0) return 0;
  return process(w, v, 0, bag);
}

function process(w, v, index, bag) {
  if (bag < 0) return -1;
  if (index === w.length) return 0;
  const p1 = process(w, v, index + 1, bag);
  let p2 = 0;
  const next = process(w, v, index + 1, bag - w[index]);
  if (next !== -1) {
    p2 = v[index] + next;
  }
  return Math.max(p1, p2);
}

const w = [3, 2, 4, 7, 3, 1, 7];
const v = [5, 6, 3, 19, 12, 4, 2];
const bag = 15;
console.log(maxValue(w, v, bag));

/**
 * process index 4 === w.length
 * process index 3
 * process index 2
 * process index 1
 * process index 0
 * maxValue bag 11
 */

/**
 * next = 0(process index = 4 bag = 4(11 - 7)) p2 = 19 + 0 return 19
 * p1 = 0; p2 = 0;
 * process index 3
 * process index 2
 * process index 1
 * process index 0
 * maxValue bag 11
 */

/**
 * p1 = process index = 4 bag = 7 p2 = process index = 4
 * next = 19(process index = 3 bag = 7(11 - 4)) return 22(Math.max(19, 19 + v[2]))
 * p1 = 19; p2 = 0;
 * process index 2
 * process index 1
 * process index 0
 * maxValue bag 11
 */

/**
 * p1 = 22; p2 = 25;
 * process index 2
 * process index 1
 * process index 0
 * maxValue bag 11
 */