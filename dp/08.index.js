/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
    const start = grid[0][0];
    const row = grid.length;
    const col = grid[0].length;
    const dp = Array.from(new Array(row), () => new Array(col).fill(0));
    dp[0][0] = start;
    for (let i = 1; i < col; i++) {
        if (grid[0][i] !== -1) {
            dp[0][i] = dp[0][i - 1] + grid[0][i];
        }
    }
    for (let i = 1; i < row; i++) {
        if (grid[i][0] !== -1) {
            dp[i][0] = dp[i - 1][0] + grid[i][0];
        }
    }
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (grid[i][j] !== -1 && (dp[i - 1][j] !== 0 || dp[i][j - 1] !== 0)) {
                dp[i][j] = Math.max(grid[i][j] + dp[i - 1][j], grid[i][j] + dp[i][j - 1])
            }
        }
    }
    return dp[row - 1][col - 1];
};

// const data = [[0,1,-1],[1,0,-1],[1,1,1]];
const data = [[1,1,-1],[1,-1,1],[-1,1,1]];

console.log(cherryPickup(data));
