/*
 * @lc app=leetcode.cn id=2865 lang=javascript
 *
 * [2865] 美丽塔 I
 */

// @lc code=start
/**
 * @param {number[]} maxHeights
 * @return {number}
 */
var maximumSumOfHeights = function (maxHeights) {
  const stackLeft = new Array();
  const preList = new Array(maxHeights.length).fill(0);
  let pre = 0,
    next = 0,
    maxIndex = 0;
  for (let i = 0; i < maxHeights.length; i++) {
    if (maxHeights[maxIndex] < maxHeights[i]) maxIndex = i;
    if (
      !stackLeft.length ||
      maxHeights[i] >= maxHeights[stackLeft[stackLeft.length - 1]]
    ) {
      stackLeft.push(i);
      pre += maxHeights[i];
      preList[i] = pre;
    } else if (maxHeights[i] < maxHeights[stackLeft[stackLeft.length - 1]]) {
      pre = 0;
      while (stackLeft.length) {
        const current = maxHeights[stackLeft.pop()];
        console.log(current, i, maxHeights[i], 123);
        if (current < maxHeights[i]) {
          pre += current;
        } else {
          pre += maxHeights[i];
        }
      }
      console.log(pre, maxHeights[i], 123);
      pre += maxHeights[i];
      stackLeft.push(i);
      preList[i] = pre;
    }
  }
  console.log(preList);
  const stackRight = new Array();
  for (let i = maxIndex + 1; i < maxHeights.length; i++) {
    if (
      !stackRight.length ||
      maxHeights[i] < stackRight[stackRight.length - 1]
    ) {
      next += maxHeights[i];
      stackRight.push(maxHeights[i]);
    } else {
      next += stackRight[stackRight.length - 1];
    }
  }
  return preList[maxIndex] + next;
};

console.log(maximumSumOfHeights([6, 5, 3, 9, 2, 7])); // 2

// [5, 3, 4, 1, 1];

// @lc code=end
