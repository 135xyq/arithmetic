/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    const length = head.length;
    let arr = new Array(length);
    let temp = head;
    while (temp) {
        arr.unshift(temp.val);
        temp = temp.next;
    }
    return arr;
};