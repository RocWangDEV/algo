/**
 * @param {number[]} customers
 * @param {number} boardingCost
 * @param {number} runningCost
 * @return {number}
 */
var minOperationsMaxProfit = function (customers, boardingCost, runningCost) {
  const index = new Array();
  let wait = 0;
  for (let i = 0; i < customers.length; i++) {
    let current = customers[i] + wait;
    if (current > 4) {
      while (current > 4) {
        current = current - 4;
        index.push(4);
      }
      wait = current;
    } else if (customers[i] === 0 && i === 0) {
      index.push(0);
    } else if (customers[i] === 0 && i > 0 && current === 0) {
      index.push(0);
    } else if(current < 4 && i !== customers.length - 1) {
      wait = current;
    } else {
      index.push(current);
      wait = 0;
    }
  }
  if (wait) {
    index.push(wait);
  }
  const costIndex = new Array(index.length);
  let cost = 0;
  for (let i = 0; i < index.length; i++) {
    cost += index[i] * boardingCost - runningCost;
    costIndex[i] = cost;
  }
  let max = 0,
    maxIndex = 0;
  for (let i = 0; i < costIndex.length; i++) {
    if (costIndex[i] > max) {
      max = costIndex[i];
      maxIndex = i;
    }
  }
  console.log(index);
  return maxIndex === 0 ? -1 : maxIndex + 1;
};

console.log(minOperationsMaxProfit([3,25,11,21,18,47,3,26,43,46,49,8,39,0,4,15,47,12,3,0,22,14,43,32,13,37,19,24,21,28,9,19,0,11,44,46,43,47,9,30,21,36,42,26,37,33,11,10,26,2,47,35,48,30,8,18,31,43,0,32,28,13,39,38,6,46,3,16,44,8,14,45,2,28,3,38,0,6,14,17,4,25,21,20,41,37,15,19,41,15,47,49,2,13,27,13,25,16,29,43,3,5,29,47,0,35,19,19,22,46,46,26,26,12,15,35,24,39,40,15,7,17,1,39,33,24,38,33,43,48,28,31,35,8,14,28,42,15,37,6,32,17,37,4,44,19,5,25,45,7,43,6,44,18,19,20,26,32,43,7,45,29,22,24,25,27,25,20,36,47,38,24,10,48,7,31,27,49,44,13,10,0,43,27,36,43,30,39,22,16,19,46], 91, 63));