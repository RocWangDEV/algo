// 题目意思就是，按照arr数组从左到右的顺序遍历各个arr[i]，
// 涂抹这个值在矩阵中对应位置的网格，一旦你发现它所在的行或者列满员了，就返回这个i

// [1, 3, 4, 2];
// [[1, 4], [2, 3]];

// [2, 8, 7, 4, 1, 3, 5, 6, 9];
// 4
// 3
// 5
// 6
// 9

/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function (arr, mat) {
  let result = null;
  const mapIndex = {};
  const mapLineIndex = {};
  // 多少列
  const matVal = mat[0].length;
  const flattenedMat = mat.flat();

  for (let i = 0; i < arr.length; i++) {
    // 在矩阵中列的位置
    const targetIndex = flattenedMat.findIndex(item => item === arr[i]) % matVal;
    // 在矩阵中行的位置
    const targetLineIndex = mat.findIndex(item => item.includes(arr[i]));

    if (!mapIndex[targetIndex]) {
      mapIndex[targetIndex] = 1;
    }
    if (mapIndex[targetIndex]) {
      if (
        (mapIndex[targetIndex] === mat.length)
        && (!result || result > arr[i])
      ) {
        return i;
      }
      mapIndex[targetIndex]++;
    }

    if (!mapLineIndex[targetLineIndex]) {
      mapLineIndex[targetLineIndex] = 1;
    }

    if (mapLineIndex[targetLineIndex]) {
      if (
        (mapLineIndex[targetLineIndex] === matVal)
        && (!result || result > arr[i])
      ) {
        return i;
      }
      mapLineIndex[targetLineIndex]++;
    }
  }
  return -1;
};

const res = firstCompleteIndex(
  [6, 2, 3, 1, 4, 5],
  [[5, 1], [2, 4], [6, 3]]
);
console.log(res);
