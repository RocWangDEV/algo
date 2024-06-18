/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// var wordBreak = function(s, wordDict) {
//     const realDict = new Set(wordDict);
//     const n = s.length;
//     const dp = new Array(n).fill(false);
//     if (n <= 1) {
//         return realDict.has(s);
//     }
//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j >= 1; j--) {
//             const currentStr = s.substring(j - 1, i);
//             console.log(currentStr, i, j);
//             if (realDict.has(currentStr)) {
//                 dp[j] = i - 1 < 0 ? true : dp[i - 1];
//             }
//         }
//     }
//     return dp[n - 1];
// };

function wordBreak(s, wordDict) {
    const ss = new Set(wordDict)
    const n = s.length
    const f = new Array(n + 10).fill(false)
    f[0] = true
    for (let i = 1; i <= n; i++) {
        for (let j = i; j >= 1 && !f[i]; j--) {
            const sub = s.substring(j - 1, i);
            console.log(sub, '<== sub');
            if (ss.has(sub)) f[i] = f[j - 1]
        }
    }
    return f[n]
}

const s = 'leetcode';
const wordDict = ['leet', 'code'];
// const s = 'catsandog';
// const wordDict = ["cats","dog","sand","and","cat"];
console.log(wordBreak(s, wordDict));
