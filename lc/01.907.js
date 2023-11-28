/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  const left = [];
  const right = [];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let leftIndex = i - 1, rightIndex = i + 1;

    while (true) {
      if (arr[leftIndex] <= arr[i] || leftIndex === -1) {
        left.push(leftIndex);
        break;
      }
      leftIndex--;
    }
    while (true) {
      if (arr[rightIndex] < arr[i] || rightIndex === arr.length) {
        right.push(rightIndex);
        break;
      }
      rightIndex++;
    }
  }

  for (let i = 0; i < left.length; i++) {
    count = count + arr[i] * (i - left[i]) * (right[i] - i);
  }
  return count;
}

// A[i]∗(i−left + 1)∗(right−i + 1)

const arr = [3, 1, 2, 4];

//          [-1, -1, 1, 2];
//          [1, 4, 4, 4];

const result = sumSubarrayMins(arr);
console.log(result);
