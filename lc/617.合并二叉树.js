/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  function dfs(node1, node2) {
    if (!node1 && !node2) return null;
    const root = new TreeNode((node1?.val || 0) + (node2?.val || 0));
    root.left = dfs(node1?.left, node2?.left);
    root.right = dfs(node1?.right, node2?.right);
    return root;
  }
  return dfs(root1, root2);
  if (!root1 && !root2) return null;
  const root = new TreeNode((root1?.val || 0) + (root2?.val || 0));
  root.left = mergeTrees(root1?.left, root2?.left);
  root.right = mergeTrees(root1?.right, root2?.right);
  return root;
};
// @lc code=end
