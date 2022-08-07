/**https://leetcode.cn/problems/linked-list-cycle/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    const set = new Set();
    while(head){
        if(set.has(head.next)){
            return true;
        }
        set.add(head.next);
        head = head.next;
    }
    return false;
};