/**
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
var middleNode = function(head) {
    let count = 0; //链表的长度
    let p = head;
    let n = head;
    while (p) {
        count++;
        p = p.next;
    }
    const mid = count % 2 ? Math.floor(count / 2) : Math.ceil(count / 2);
    while (mid--) {
        n = n.next;
    }
    return n;
};