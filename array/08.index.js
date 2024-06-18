// const mat = [
//   [3,3,1,1],
//   [2,2,1,2],
//   [1,1,1,2]
// ];
// const mat = [[37,98,82,45,42]];
const mat = [[75,21,13,24,8],[24,100,40,49,62]];
/**
 * 00 01 02 03
 * 10 11 12 13
 * 20 21 22 23
 *
 * 0 1 2 3
 * -1 0 1 2
 * -2 -1 0 1
 */

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    // const width = mat[0].length - 1;
    // const height = mat.length - 1;
    // if (height === 0) return mat;
    // const start = 0 - height, end = width - 0;
    // for (let i = start; i <= end; i += 1) {
    //     const left = Math.max(i, 0);
    //     const right = Math.min(i + width + 1, end);
    //     console.log(left, right, '<==');
    //     const ans = [];
    //     for (let j = left; j < right; j++) {
    //         ans.push(mat[j][j - i]);
    //     }
    //     ans.sort((a, b) => a - b);
    //     for (let j = left; j < right; j++) {
    //         mat[j][j - i] = ans[j - left];
    //     }
    // }
    // return mat;
    const m = mat.length;
    const n = mat[0].length;
    for (let k = 1 - n; k < m; k++) { // k = i - j
        const left_i = Math.max(k, 0);
        const right_i = Math.min(k + n, m);
        console.log(left_i, right_i, '<==');
        const a = [];
        for (let i = left_i; i < right_i; i++) {
            a.push(mat[i][i - k]);
        }
        a.sort((a, b) => a - b);
        for (let i = left_i; i < right_i; i++) {
            mat[i][i - k] = a[i - left_i];
        }
    }
    return mat;
};

// console.log(diagonalSort(mat));

/**
 * @param {number} n
 * @return {string}
 */
var baseNeg2 = function(n) {

};

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    const n = s.length;
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
    for (let i = n - 1; i >= 0; i--) {
        dp[i][i] = 1;
        for (let j = i + 1; j < n; j++) {
            if (s[i] === s[j]) dp[i][j] = dp[i + 1][j - 1] + 2;
            else dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
        }
    }
    return dp[0][n - 1];
};

const str = 'cbbd';
// const str = 'bbbab';
// console.log(longestPalindromeSubseq(str));

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const n = word1.length, m = word2.length;
    function dfs(i, j) {
        if (i < 0) return j + 1;
        if (j < 0) return i + 1;
        if (word1[i] === word2[j]) return dfs(i - 1, j - 1);
        return Math.min(dfs(i - 1, j), dfs(i, j - 1), dfs(i - 1, j - 1)) + 1;
    }
    return dfs(n - 1, m - 1);
};

console.log(minDistance('horse', 'ros'));
