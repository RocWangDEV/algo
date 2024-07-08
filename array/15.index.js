/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  let ans = 0;
  let current = nums[0];
  const countMap = new Map();
  countMap.set(0, 1); // 初始情况下，前缀和为 0 出现了一次

  for (let num of nums) {
    current &= num;
    let desired = current ^ k;
    if (countMap.has(desired)) {
      ans += countMap.get(desired);
    }
    if (!countMap.has(current)) {
      countMap.set(current, 0);
    }
    countMap.set(current, countMap.get(current) + 1);
  }

  return ans;
};

// 示例用法
const nums = [1, 1, 2];
const k = 1;
console.log(countSubarrays(nums, k)); // 输出应为 6
