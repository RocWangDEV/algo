/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countCompleteSubstrings = function (word, k) {
  let arrayCount = new Array(26).fill(0);
  let time = 0;
  for (let i = 0; i < word.length; i++) {
    const index = word.charCodeAt(i) - 97;
    arrayCount[index]++;
    if (
      arrayCount.every(e => e === 0)
      && arrayCount[index - 1] === 0
      && arrayCount[index - 2] === 0
      && arrayCount[index + 1] === 0
      && arrayCount[index + 2] === 0
    ) {
      arrayCount = new Array(26).fill(0);
    }

    if (
      (arrayCount[index] === k && i + 1 === k)
      || (arrayCount[index] === k
        && ((arrayCount[index - 1] === k || arrayCount[index - 2] === k) || (arrayCount[index + 1] === k || arrayCount[index + 2] === k)))
    ) {
      console.log(word);
      if (arrayCount[index] === k && word.length === k) {
        // console.log(word);
      }
      time++;
    }
    if (
      arrayCount[index] !== k
      && ((arrayCount[index - 1] === k || arrayCount[index - 2] === k) || (arrayCount[index + 1] === k || arrayCount[index + 2] === k))
    ) {
      const newWord = word.substring(i);
      // console.log(newWord);
      const res = countCompleteSubstrings(newWord, k);
      time += res;
    }
  }
  return time;
};

const res = countCompleteSubstrings('aaabbbccc', 3);
console.log(res);