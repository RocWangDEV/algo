const nums = [1, 2, 3];
// return [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  const ans = [];
  const path = new Array(nums.length);
  const record = new Array(nums.length).fill(false);
  function dfs(i) {
    if (i === nums.length) {
      // path 路径 长度肯定是 === nums.length
      ans.push(JSON.parse(JSON.stringify(path)));
    }
    for (let j = 0; j < nums.length; j++) {
      if (!record[j]) {
        const current = nums[j];
        path[i] = current;
        // 如果选择了 此轮路径就不能再选了
        record[j] = true;
        dfs(i + 1);
        // 解锁
        record[j] = false;
      }
    }
  }
  dfs(0);
  return ans;
}

const ans = permute(nums);
console.log(ans);

/**
 * 健忘详解：
 * 默认可以选的 0 1 2
 */
