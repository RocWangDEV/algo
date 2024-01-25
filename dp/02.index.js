var maxSubArray = function(nums) {
  function dp(list, left, right) {
    if (left === right) return list[left];
    const middle = (left + right) >> 1;
    const leftMax = dp(list, left, middle);
    const rightMax = dp(list, middle + 1, right);
    const crossMax = findCrossMax(list, left, middle, right);
    return Math.max(leftMax, rightMax, crossMax);
  }
  return dp(nums, 0, nums.length - 1);
};

function findCrossMax(list, left, middle, right) {
  let leftSum = -Infinity, rightSum = -Infinity;
  let sum = 0;
  for (let i = middle; i >= left; i--) {
    sum += list[i];
    leftSum = Math.max(leftSum, sum);
  }
  sum = 0;
  for (let i = middle + 1; i <= right; i++) {
    sum += list[i];
    rightSum = Math.max(rightSum, sum);
  }
  return leftSum + rightSum;
}

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([2, -7, 6, -2, 8, -2, 9, 6, -1, -2]));