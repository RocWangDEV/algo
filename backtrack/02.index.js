/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const ans = [];
    const path = new Array(k);
    function dfs(i) {
        if (i === k) {
            ans.push(JSON.parse(JSON.stringify(path)));
            return;
        }
        for (let j = i + 1; j < n + 1; j++) {
            path[i] = j;
            dfs(i + 1);
        }
    }
    dfs(0);
    return ans;
};

console.log(combine(4, 2));
