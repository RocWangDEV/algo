/**
 * @param {string} s
 * @return {string}
 */
var smallestString = function (s) {
  const ans = s.split("");
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (s[i] !== "a") {
      for (; i < n && s[i] !== "a"; i++) {
        ans[i] = String.fromCharCode(s[i].charCodeAt(0) - 1);
      }
      return ans.join("");
    }
  }
  ans[n - 1] = "z";
  return ans.join("");
};

console.log(smallestString("aab"));
// smallestString("acbabbbbbbbca"); // abaabbbbbbbca
// smallestString("leetcode");
