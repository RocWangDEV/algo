/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// const len = preorder.length;
// if (len === 0) return null;
// const index = inorder.indexOf(preorder[0]);
// const pre1 = preorder.slice(1, 1 + index);
// const pre2 = preorder.slice(1 + index);

// const in1 = inorder.slice(0, index);
// const in2 = inorder.slice(1 + index, len);

// const left = buildTree(pre1, in1);
// const right = buildTree(pre2, in2);

// return new TreeNode(preorder[0], left, right);

var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) return null;
  const root = preorder[0];
  const rootIndex = inorder.indexOf(root);

  const leftNodes = preorder.slice(1, rootIndex + 1);
  const rightNodes = preorder.slice(rootIndex + 1);

  const in1 = inorder.slice(0, rootIndex);
  const in2 = inorder.slice(rootIndex + 1, preorder.length);

  const left = buildTree(leftNodes);
  const right = buildTree(rightNodes);

  return new TreeNode(root, left, right);
};

// preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// 输出: [3,9,20,null,null,15,7]
// @lc code=end
