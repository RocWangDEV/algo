/*
 * @lc app=leetcode.cn id=655 lang=javascript
 *
 * [655] 输出二叉树
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
 * @return {string[][]}
 */
var printTree = function(root) {
  const height = getLevel(root);
  const index = new Array;
  for (let i = 0; i< height; i++) {
    index.push(new Array(Math.pow(2, height) - 1).fill(""));
  }
  setNode(root, index, 0, (Math.pow(2, height) - 1) >> 1, height);
  return index;
};

function getLevel(node) {
  if (!node) return 0;
  return Math.max(getLevel(node?.left), getLevel(node?.right)) + 1;
}

function setNode(node, index, level, position, height) {
  if (!node) return;
  index[level][position] = String(node.val);
  let h = height - 1;
  // 是计算下一层的列  下一层是在row+1  总的层数是height 相差的层数是 height-(row+1)
  // 当前节点与它的子节点相差的列数 Math.pow(2, height - nextRow);
  let nextRow = level + 1;
  let diffCol = Math.pow(2, h - nextRow);
  if (node.left) setNode(node.left, index, level + 1, position - diffCol, height);
  if (node.right) setNode(node.right, index, level + 1, position + diffCol, height);
}

// @lc code=end

