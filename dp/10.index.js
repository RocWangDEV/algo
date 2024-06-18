/**
 * @param {number} n
 * @return {number}
 */
var minDays = function(n) {
    const dp = new Array(n + 1).fill(0);
    function dfs(rest) {
        if (rest <= 1) {
            return rest;
        } else if (dp[rest]) {
            return dp[rest];
        } else if (rest % 3 === 0) {
            dp[rest] = Math.min(dfs(rest - 2 * Math.floor((rest / 3))), dfs(rest - 1)) + 1;
            return dp[rest];
        } else if (rest % 2 === 0) {
            dp[rest] = Math.min(dfs(rest - Math.floor(rest / 2)), dfs(rest - 1)) + 1;
            return dp[rest];
        } else {
            return dfs(rest - 1) + 1;
        }
    }
    return dfs(n);
};

console.log(minDays(9209408))
