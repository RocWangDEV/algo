/*
 * @lc app=leetcode.cn id=2748 lang=javascript
 *
 * [2748] 美丽下标对的数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function gcd(a, b) {
  while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
  }
  return a;
}

var countBeautifulPairs = function(nums) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const first = parseInt(nums[i].toString().charAt(0));
      const lastStr = nums[j].toString();
      const last = parseInt(lastStr.charAt(lastStr.length - 1));
      if (gcd(first, last) === 1) ans++;
    }
  }
  return ans;
};
// @lc code=end

