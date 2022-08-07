/**https://leetcode.cn/problems/remove-duplicates-from-sorted-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    let temp = head;
    if(!head){
        return null;
    }
    while(temp.next){
        if(temp.val === temp.next.val){
            // 要删除重复的
            if(!temp.next.next){
                temp.next = null
            }else{
                temp.next = temp.next.next;
            }
        }else{
            temp = temp.next
        }
    }
    return head;

};

console.log(deleteDuplicates(head = [1,1,2]))