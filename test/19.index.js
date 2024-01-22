/**
/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function(piles, k) {
  if (piles.length === 1 && piles[0] === 1) return 1;
  const stack = new Array();
  for (let i = 0; i < piles.length; i++) {
      if (!stack.length || piles[i] >= piles[stack[stack.length - 1]]) {
          stack.push(i);
      } else {
          let left = 0, right = stack.length - 1;
          while (left < right) {
              const midIndex = left + right >> 1;
              if (piles[i] < piles[stack[midIndex]]) {
                  right = midIndex;
              } else {
                  left = midIndex + 1;
              }
          }
          stack.splice(left, 0, i);
      }
  }

  let times = k;
  while (times) {
      if (stack.length === 1 && piles.length === 1) {
          piles[0] = Math.round(piles[0] / 2);
      } else {
          const target = stack.pop();
          const subValue = Math.round(piles[target] / 2); 
          piles[target] = subValue;

          if (subValue < piles[stack[stack.length - 1]]) {
              let left = 0, right = stack.length - 1;
              while (left < right) {
                  const midIndex = left + right >> 1;
                  if (subValue < piles[stack[midIndex]]) {
                      right = midIndex;
                  } else {
                      left = midIndex + 1;
                  }
              }
              stack.splice(left, 0, target);
          } else {
              stack.push(target);
          }
      }
      times--;
  }
  let result = 0;
  for (let i = 0; i < piles.length; i++) {
      result += piles[i];
  }
  return result;
};

console.log(minStoneSum([4122,9928,3477,9942], 6));