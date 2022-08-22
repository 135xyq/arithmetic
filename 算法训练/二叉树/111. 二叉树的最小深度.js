/**https://leetcode.cn/problems/minimum-depth-of-binary-tree/
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
 var minDepth = function(root) {
    if(root === null){
        return 0;
    }
    if(root.left === null){
        return 1 + minDepth(root.right)
    }
    if(root.right === null){
        return 1 + minDepth(root.left)
    }
    return  Math.min(minDepth(root.left),minDepth(root.right)) + 1;
};


/**https://leetcode.cn/problems/minimum-depth-of-binary-tree/
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
 var minDepth = function(root) {
    if(root === null){
        return 0
    }
    let count = 1;
    const queue = [root];
    while(queue.length){
        let length = queue.length;
        while(length--){
            const node = queue.shift();
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
            if(node.left === null && node.right === null){
                return count;
            }
        }
        count++;
    }
};