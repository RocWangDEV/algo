/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function (root, p, q) {
  let value = root;
  while (true) {
    if (p.val < value.val && q.val < value.val) {
      value = value.left;
    } else if (p.val > value.val && q.val > value.val) {
      value = value.right;
    } else {
      break;
    }
  }
  return value;
};
// @lc code=end
