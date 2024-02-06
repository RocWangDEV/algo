// [2, 4, 6, 8, 10]

//          0 1 2 3 4
//  1     0 1 4 6 8 10  1920
//  2     1 2 1 6 8 10  480
//  8     2 2 4 1 8 10  80
//  48    3 2 4 6 1 10  10
//  384   4 2 4 6 8 1   1

function getIt(arrayA) {
  const ans = new Array();
  for (let i = 0; i < arrayA.length; i++) {
    if (i === 0) {
      ans[i] = 1;
    } else {
      ans[i] = ans[i - 1] * arrayA[i - 1];
    }
  }
  let temp = 1;
  for (let i = arrayA.length - 1; i >= 0; i--) {
    if (i === arrayA.length - 1) {
      continue;
    } else {
      temp = temp * arrayA[i + 1];
      ans[i] = ans[i] * temp;
    }
  }
  return ans;
}

getIt([2, 4, 6, 8, 10]);
