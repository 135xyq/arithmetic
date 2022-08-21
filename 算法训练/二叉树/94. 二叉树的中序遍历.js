/**https://leetcode.cn/problems/binary-tree-inorder-traversal/
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
var inorderTraversal = function(root) {
    let result = [];
    const temp = root=>{
        if(!root){
            return;
        }
        temp(root.left);
        result.push(root.val);
        temp(root.right);
    }
    temp(root);
    return temp;
};



/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let result = [];
    let stack = [];
    while(root || stack.length){
        while(root){
            stack.push(root);
            root = root.left
        }
        root = stack.pop();
        result.push(root.val)
        root = root.right
    }
    return result;
};



