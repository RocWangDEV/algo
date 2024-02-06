/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  if (n === 2) return 1;
  if (n === 3) return 2;
  let ans = 1;
  while (n > 4) {
    ans *= 3;
    n -= 3;
  }
  ans *= n;
  return ans % 1000000007;
};

console.log(integerBreak(120));
