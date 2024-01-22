/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const path = new Array(), result = new Array();
  function dfs (i) {
      const current = JSON.parse(JSON.stringify(path));
      result.push(current);
      if (i === nums.length) {
          return;
      }
      for (let j = i; j < nums.length; j++) {
          path.push(nums[j]);
          dfs(j + 1);
          console.log(path, i);
          path.pop();
      }
  }
  dfs(0);
  return result;
};

console.log(subsets([1, 2, 3]));