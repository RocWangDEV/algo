/*
 * @lc app=leetcode.cn id=965 lang=javascript
 *
 * [965] 单值二叉树
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
var isUnivalTree = function(root) {
  let pre = root.val;
  function dfs(node) {
    if (!node) return true;
    if (node.val !== pre) return false;
    pre = node.val;
    return dfs(node?.left) && dfs(node?.right);
  }
  return dfs(root);
};
// @lc code=end

