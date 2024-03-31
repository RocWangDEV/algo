/*
 * @lc app=leetcode.cn id=2641 lang=javascript
 *
 * [2641] 二叉树的堂兄弟节点 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var replaceValueInTree = function (root) {
  const stack = [root];
  while (stack.length) {
    for (const info of stack) {
      const current = stack.shift();

      if (current.left) {
        stack.push(current.left);
      }
      if (current.right) {
        stack.push(current.right);
      }
    }
  }
};
// @lc code=end
