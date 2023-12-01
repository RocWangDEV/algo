/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (!word1.length && !word2.length) return true;
  if ((!word1.length && word2.length) || (!word2.length && word1.length)) return false;
  if (word1.length !== word2.length) return false;
  const base = word1.length > word2.length ? word1 : word2;
  const obj = {};
  const word1Obj = {};
  const word2Obj = {};
  const times = {};

  let case1Result = true;
  let case2Result = true;

  for (let i in word1) {
    if (!word2.includes(word1[i])) {
      return false;
    }
  }

  for (let i in word2) {
    if (!word1.includes(word2[i])) {
      return false;
    }
  }

  for (let i in base) {
    if (word1[i]) {
      if (obj[word1[i]]) {
        obj[word1[i]] = obj[word1[i]] + 1;
      }
      if (word1Obj[word1[i]]) {
        word1Obj[word1[i]] = word1Obj[word1[i]] + 1;
      }
      if (!obj[word1[i]]) {
        obj[word1[i]] = 1;
      }
      if (!word1Obj[word1[i]]) {
        word1Obj[word1[i]] = 1;
      }
    }
    if (word2[i]) {
      if (obj[word2[i]]) {
        obj[word2[i]] = obj[word2[i]] + 1;
      }
      if (word2Obj[word2[i]]) {
        word2Obj[word2[i]] = word2Obj[word2[i]] + 1;
      }
      if (!obj[word2[i]]) {
        obj[word2[i]] = 1;
      }
      if (!word2Obj[word2[i]]) {
        word2Obj[word2[i]] = 1;
      }
    }
  }

  for (let i in obj) {
    if ((obj[i] & 1) !== 0) case1Result = false;
  }

  Object.values(word1Obj).forEach((item, index) => {
    const value01 = item;
    const value02 = Object.values(word2Obj)[index];
    if (value01) {
      if (times[value01]) {
        times[value01] = times[value01] + 1;
      }
      if (!times[value01]) {
        times[value01] = 1;
      }
    }
    if (value02) {
      if (times[value02]) {
        times[value02] = times[value02] + 1;
      }
      if (!times[value02]) {
        times[value02] = 1;
      }
    }
  })

  for (let i in times) {
    if ((times[i] & 1) !== 0) case2Result = false;
  }

  for (let i of Object.values(word1Obj)) {
    if (!Object.values(word2Obj).includes(i)) return false;
  }

  for (let i of Object.values(word2Obj)) {
    if (!Object.values(word1Obj).includes(i)) return false;
  }

  return case1Result || case2Result;
};

const word1 = 'aabbcccddd', word2 = 'abccccdddd';
const result = closeStrings(word1, word2);
console.log(result, 'result');
