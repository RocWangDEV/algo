function check(s) {
  if (s.length === 0) return 0;
  let maxLength = 1; // Initialize the maxLength to 1, as a single character is a palindrome
  const n = s.length;

  // Create a 2D array to store the palindrome truth table
  const dp = Array.from(Array(n), () => Array(n).fill(false));

  // All substrings of length 1 are palindromes
  for (let i = 0; i < n; i++) {
    dp[i][0] = true;
  }

  // Check for substrings of length 2
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      maxLength = 2;
    }
  }

  // Check for substrings of length greater than 2
  for (let length = 3; length <= n; length++) {
    for (let i = 0; i < n - length + 1; i++) {
      const j = i + length - 1;
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        maxLength = length;
      }
    }
  }

  return maxLength;
}

console.log(check("aabaacddc"));
