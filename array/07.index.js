/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function (nums, k) {
  let i = 0,
    ans = nums[0];
  const res = new Array();
  while (i < nums.length) {
    let max = null;
    for (let j = i + 1; j < Math.min(nums.length - 1, i + k + 1); j++) {
      if (max === null || nums[j] > nums[max]) {
        console.log(nums[j], nums[max], j, max);
        max = j;
      }
    }
    i = max;
    ans += nums[max];
    res.push(nums[max]);
  }
  console.log(res, 123);
  return ans;
};

maxResult([1, -1, -2, 4, -7, 3], 2);
