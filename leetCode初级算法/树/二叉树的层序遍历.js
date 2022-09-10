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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(root === null){
        return []
    }
    let result = [];
    let stack = [root];
    while(stack.length){
        let temp = [];
        let length = stack.length;
        for(let i = 0; i < length; i++){
            let item = stack.shift();
            temp.push(item.val);
            if(item.left){
                stack.push(item.left);
            }
            if(item.right){
                stack.push(item.right);
            }
        }
        result.push(temp)
    }
    return result;
};