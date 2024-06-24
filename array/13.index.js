/**
 * @param {number[]} temperatureA
 * @param {number[]} temperatureB
 * @return {number}
 */
var temperatureTrend = function (temperatureA, temperatureB) {
  const n = temperatureA.length;
  const ans = [];
  for (let i = 1; i < n; i++) {
    const currentA = temperatureA[i] - temperatureA[i - 1];
    const currentB = temperatureB[i] - temperatureB[i - 1];
    if (currentA < 0 && currentB < 0) {
      ans.push("decline");
    } else if (currentA === 0 && currentB === 0) {
      ans.push("flat");
    } else if (currentA > 0 && currentB > 0) {
      ans.push("rise");
    } else {
      ans.push("");
    }
  }
  let currentElement = ans[0];
  let currentCount = 1;
  let maxCount = 1;
  let emp = 0;
  for (let i = 1; i < ans.length; i++) {
    if (!ans[i]) {
      emp++;
    }
    if (ans[i] === currentElement) {
      currentCount++;
    } else {
      currentElement = ans[i];
      currentCount = 1;
    }
    if (currentCount > maxCount) {
      maxCount = currentCount;
    }
  }
  if (emp === ans.length - 1) return 0;
  return maxCount + 1;
};

const temperatureA = [1, -15, 3, 14, -1, 4, 35, 36];
const temperatureB = [-15, 32, 20, 9, 33, 4, -1, -5];
console.log(temperatureTrend(temperatureA, temperatureB));
