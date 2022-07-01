/**https://leetcode.cn/problems/remove-duplicate-node-lcci/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var removeDuplicateNodes = function(head) {
    let arr = [];
    let node = head;
    let prev = head;
    while(node){
        if(arr.includes(node.val)){
            prev.next = node.next;
        }else{
            arr.push(node.val);
            prev = node;
        }
        node = node.next;
    }
    console.log(arr)
    return head
};