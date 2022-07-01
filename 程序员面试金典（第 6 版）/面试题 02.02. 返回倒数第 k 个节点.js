/**https://leetcode.cn/problems/kth-node-from-end-of-list-lcci/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
 var kthToLast = function(head, k) {
    let temp = head;
    let count = 0;//链表的总长度
    while(temp){
        count++;
        temp = temp.next;
    }
    temp = head;
    let num = count - k;
    while(temp){
        if(num === 0){
            return temp.val
        }else{
            num--;
            temp = temp.next;
        }
    }

};
/**https://leetcode.cn/problems/kth-node-from-end-of-list-lcci/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
 var kthToLast = function(head, k) {
    let pre = head;
    let cur = head;
    for(let i = 0 ;i < k;i++){
        pre = pre.next;
    }
    while(pre){
        pre = pre.next;
        cur = cur.next;
    }
    return cur.val
};