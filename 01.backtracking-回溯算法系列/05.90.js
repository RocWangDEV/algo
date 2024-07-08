const nums = [1, 2, 2];

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const ans = [];
  const path = [];
  function dfs(i) {
    ans.push(JSON.parse(JSON.stringify(path)));
    for (let j = i; j < n; j++) {
      if (j > i && nums[j] === nums[j - 1]) {
        continue;
      }
      path.push(nums[j]);
      dfs(j + 1);
      path.pop();
    }
  }
  dfs(0);
  return ans;
};

console.log(subsetsWithDup(nums));
