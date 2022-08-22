/**https://leetcode.cn/problems/binary-tree-preorder-traversal/
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
var preorderTraversal = function(root) {
    let result = [];
    const temp = (root)=>{
        if(root === null){
            return;
        }
        result.push(root.val);
        temp(root.left)
        temp(root.right)
    }
    temp(root);
    return result;

};

/**https://leetcode.cn/problems/binary-tree-preorder-traversal/
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
 var preorderTraversal = function(root) {
    let result = [];
    let stack = [];
    while(root || stack.length){
        while(root!==null){
            result.push(root.val);
            stack.push(root)
            root = root.left;
        }
        root = stack.pop();
        root = root.right;
    }
    return result;
};