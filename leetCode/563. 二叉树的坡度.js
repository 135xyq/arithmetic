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
 * @return {number}
 */
var findTilt = function(root) {
    let sum = 0;

    function dfs(node) {
        if (!node) {
            return 0;
        }
        const leftNum = dfs(node.left);
        const rightNum = dfs(node.right);
        sum += Math.abs(leftNum - rightNum);
        return leftNum + rightNum + node.val;
    }
    dfs(root);
    return sum;
};