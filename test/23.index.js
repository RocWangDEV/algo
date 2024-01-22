/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let n = nums.length;
  const index = new Array(n).fill(-1);
  function dfs(i) {
    if (i < 0) return 0;
    if (index[i] !== -1) return index[i];
    const result = Math.max(dfs(i - 1), dfs(i - 2) + nums[i]);
    index[i] = result;
    return result;
  }
  return dfs(n - 1);
};

var rob = function(nums) {
  let f0 = f1 = 0;
  for (const info of nums) {
    let new_f = Math.max(f1, f0 + info);
    f0 = f1;
    f1 = new_f;
  }
  return f1;
};

console.log(rob([1,2,3,1]));