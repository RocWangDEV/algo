/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function(root) {
  const stack = new Array;
  let result = true;
  function dfs(node) {
    if (!node) return;
    if (node.left) dfs(node.left);
    if (stack.length && node.val <= stack[stack.length - 1]) {
      result = false;
    }
    stack.push(node.val);
    if (node.right) dfs(node.right);
  }
  dfs(root);
  return result;
};
// @lc code=end

