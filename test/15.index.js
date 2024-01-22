/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  function getIndex(left, right) {
    const index = left + right >> 1;
    if (
      nums[index + 1]
      && nums[index - 1]
      && nums[index] > nums[index + 1]
      && nums[index - 1] < nums[index]
    ) {
      return index;
    }
    if (nums[index + 1] && nums[index] < nums[index + 1]) {
      return getIndex(index + 1, nums.length - 1);
    }
    if (nums[index - 1] && nums[index] < nums[index - 1]) {
      return getIndex(0, index - 1);
    }
    return 0;
  }
  return getIndex(0, nums.length - 1);
};

const res = [1, 2, 1, 3, 5, 6, 4];
console.log(findPeakElement(res));