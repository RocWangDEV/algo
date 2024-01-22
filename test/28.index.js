/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function(heights) {
  const result = new Array(heights.length).fill(0);
  const stack = new Array();
  for (let i = heights.length - 1; i >= 0; i--) {
    while (stack.length && heights[i] > stack[stack.length - 1]) {
      stack.pop();
      result[i]++;
    }
    if (stack.length) {
      result[i]++;
    }
    stack.push(heights[i]);
  }
  return result;
};

console.log(canSeePersonsCount([10,6,8,5,11,9]));

// [10,6,8,5,11,9]
// [3,1,2,1,1,0]
