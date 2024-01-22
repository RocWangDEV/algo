/**
 * @param {number[]} maxHeights
 * @return {number}
 */
var maximumSumOfHeights = function(maxHeights) {
  let max = 0, maxIndex = 0, result = 0;

  for (let i = 0; i < maxHeights.length; i++) {
    if (maxHeights[i] >= max) {
      max = maxHeights[i];
      maxIndex = i;
    }
  }

  const stackLeft = new Array(), stackRight = new Array();
  for (let i = 0; i < maxIndex; i++) {
    if (!stackLeft.length) {
      stackLeft.push(maxHeights[i]);
    }
    let times = 0;
    while(stackLeft.length && stackLeft[stackLeft.length - 1] > maxHeights[i]) {
      stackLeft.pop();
      times++;
    }
    if (times) {
      for (let j = 0; j < times; j++) {
        stackLeft.push(maxHeights[i]);
      }
    }
    if (stackLeft.length && stackLeft[stackLeft.length - 1] < maxHeights[i]) {
      stackLeft.push(stackLeft[stackLeft.length - 1]);
    }
  }

  for (let i = maxIndex + 1; i < maxHeights.length; i++) {
    if (!stackRight.length) {
      stackRight.push(maxHeights[i]);
    } else if (stackRight.length && stackRight[stackRight.length - 1] >= maxHeights[i]) {
      stackRight.push(maxHeights[i]);
    } else {
      stackRight.push(stackRight[stackRight.length - 1]);
    }
  }

  const stack = stackLeft.concat(max).concat(stackRight);

  console.log(stackLeft, stackRight);

  for (let i = maxHeights.length - 1; i >= 0; i--) {
    if (maxHeights[i] === max) {
      result = result + max;
    } else {
      result = result + stack[i];
    }
  }

  return result;
}

console.log(maximumSumOfHeights([6,5,3,9,2,7]));