const value = [50, 100, 20, 10];
// const value = [7, 4, 16, 15, 1];
// const value = [5, 7, 4, 5, 8, 1, 6, 0, 3, 4, 6, 1, 7];

function win(target) {
  return Math.max(f(target, 0, target.length - 1), g(target, 0, target.length - 1));
}

function f(list, left, right) {
  if (left === right) return list[left];
  return Math.max(list[left] + g(list, left + 1, right), list[right] + g(list, left, right - 1));
}

function g(list, left, right) {
  if (left === right) return 0;
  return Math.min(f(list, left + 1, right), f(list, left, right - 1));
}

// -------------------------------------------------------------------------------------------

function win1(target) {
  const fMap = new Array(target.length).fill(new Array(target.length).fill(-1));
  const gMap = new Array(target.length).fill(new Array(target.length).fill(-1));
  return Math.max(f1(target, 0, target.length - 1, fMap, gMap), g1(target, 0, target.length - 1, fMap, gMap));
}

function f1(list, left, right, fMap, gMap) {
  if (fMap[left][right] !== -1) return fMap[left][right];
  let ans = 0;
  if (left === right) {
    ans = list[left];
  } else {
    const p1 = list[left] + g1(list, left + 1, right, fMap, gMap);
    const p2 = list[right] + g1(list, left, right - 1, fMap, gMap);
    ans = Math.max(p1, p2);
  }
  fMap[left][right] = ans;
  return ans;
}

function g1(list, left, right, fMap, gMap) {
  if (gMap[left][right] !== -1) return gMap[left][right];
  let ans = 0;
  if (left !== right) {
    const p1 = f1(list, left + 1, right, fMap, gMap);
    const p2 = f1(list, left, right - 1, fMap, gMap);
    ans = Math.min(p1, p2);
  }
  gMap[left][right] = ans;
  return ans;
}

console.log(win(value));
console.log(win1(value));