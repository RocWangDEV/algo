function countCompleteSubstrings(word, k) {
  let n = word.length, i = 0;
  while (i < n) {
    start = i;
    i += 1;
    while (
      i < n
      && Math.abs(word[i] - word[i - 1]) <= k
    ) {
      i += 1;
      const newWord = word.substring(i - 1);
      console.log(newWord);
    }
  }
}

const res = countCompleteSubstrings('aaabbbccc', 3);
