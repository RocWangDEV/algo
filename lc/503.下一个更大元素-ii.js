/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const n = nums.length;
  const ans = Array(n).fill(-1);
  const st = [];
  for (let i = 0; i < 2 * n; i++) {
    const x = nums[i % n];
    while (st.length && x > nums[st[st.length - 1]]) {
      // x 是 nums[st[st.length-1]] 的下一个更大元素
      // 既然 nums[st[st.length-1]] 已经算出答案，则从栈顶弹出
      ans[st.pop()] = x;
    }
    if (i < n) {
      st.push(i);
    }
  }
  return ans;
};

var nextGreaterElements = function (nums) {
  const n = nums.length;
  const ans = [];
  const stack = [];
  let currentIndex = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] > stack[stack.length - 1] || !stack.length) {
      stack.push(nums[i]);
    }
  }
  console.log(stack);

  while (ans.length < n) {
    for (let i = currentIndex; i < n.length; i++) {}
  }
};

nextGreaterElements([1, 41, 15, 47, 59, 34, 87, 48, 65, 81]);

// 87;
// 59;
// 47;
// 41;
// 1;

// function generateRandomArray(n, lowerBound = 0, upperBound = 100) {
//   let randomArray = [];
//   for (let i = 0; i < n; i++) {
//     let randomNumber =
//       Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
//     randomArray.push(randomNumber);
//   }
//   return randomArray;
// }

// // 示例使用
// let n = 5;
// let randomArray = generateRandomArray(n);
// console.log(randomArray);

// @lc code=end
