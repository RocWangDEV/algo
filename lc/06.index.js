/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function (mountain) {
  const result = [];
  for (let i = 0; i < mountain.length; i++) {
    console.log(mountain[i], mountain[i - 1], mountain[i + 1])
    if (
      i !== 0
      && i !== mountain.lenth - 1
      && mountain[i] > mountain[i - 1]
      && mountain[i] > mountain[i + 1]
    ) {
      result.push(i);
    }
  }
  return result;
};

console.log(findPeaks([1, 4, 3, 8, 5]));

console.log('igigee'.charCodeAt('g') - 97);