/**https://leetcode.cn/problems/binary-tree-postorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
	let result = [];
	function temp(root) {
		if (root === null) {
			return;
		}
		temp(root.left);
		temp(root.right);
		result.push(root.val);
	}
	temp(root);
	return result;
};

/**https://leetcode.cn/problems/binary-tree-postorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
	let result = [];
	let stack = [];
	while (root || stack.length) {
		while (root !== null) {
			result.push(root.val);
			stack.push(root);
			root = root.right;
		}
		root = stack.pop();
		root = root.left;
	}
	return result.reverse();
};
