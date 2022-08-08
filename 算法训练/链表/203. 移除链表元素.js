/**https://leetcode.cn/problems/remove-linked-list-elements/
 * Definition for singly-linked list.
 * function (val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    let node = new ListNode(-1);
    node.next = head;
    let temp = node;
    while(temp.next){
        if(temp.next.val === val){
            temp.next = temp.next.next;
        }else{
            temp = temp.next;
        }
    }
    return node.next;
};


/**https://leetcode.cn/problems/remove-linked-list-elements/
 * Definition for singly-linked list.
 * function (val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    if(head === null){
        return head;
    }
    head.next = removeElements(head.next,val);
    return head.val === val ? head.next : head;
};

