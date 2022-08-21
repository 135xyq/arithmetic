/**https://leetcode.cn/problems/maximum-depth-of-binary-tree/
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
 var maxDepth = function(root) {
    return root === null ? 0 : (Math.max(maxDepth(root.left),maxDepth(root.right)) + 1);
};

/**https://leetcode.cn/problems/maximum-depth-of-binary-tree/
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
 var maxDepth = function(root) {
    if(root === null){
        return 0;
    }

    let height = 1;
    let queue = [root];
    while(queue.length > 0){
        let length = queue.length;
        while(length--){
            const node = queue.shift();
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        height++;
    }
    return height
};

