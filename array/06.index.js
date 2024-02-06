/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let index = 0,
    times = 0;
  while (index < nums.length) {
    let max = 0;
    const choice = nums[index];
    for (let i = index + 1; i < index + choice + 1; i++) {
      if (nums[i] && nums[i] > max) {
        max = nums[i];
      }
    }
    times++;
    index += max;
  }
  return times;
};

jump([2, 1]);
