/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  let max = 0;
  const frontN = cardPoints.slice(0, k);
  const backN = cardPoints.slice(-k);
  const result = backN.concat(frontN);

  console.log(result.length);

  for (let i = 0; i < result.length - k + 1; i++) {
    const sub = result.slice(i, i + k).reduce((acc, val) => acc + val, 0);
    if (sub > max) {
      max = sub;
    }
  }
  return max;
};

console.log(maxScore([96, 90, 41, 82, 39, 74, 64, 50, 30], 8));