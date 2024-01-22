var letterCombinations = function(digits) {
  if (digits.length === 0) return [];
  const index = [
      '',
      '',
      'abc',
      'def',
      'ghi',
      'jkl',
      'mno',
      'pqrs',
      'tuv',
      'wxyz'
  ];

  const result = [];
  const path = new Array(digits.length);
  function dfs(i) {
      if (i === digits.length) {
          result.push(path.join(''));
          return;
      }
      for (const info of index[Number(digits[i])]) {
          path[i] = info;
          dfs(i + 1);
      }
  }
  dfs(0);
  return result;
};

console.log(letterCombinations('23'));