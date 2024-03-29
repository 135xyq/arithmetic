/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  let temp = head
  let pre = temp
  if (temp.val === val) {
    return head.next
  }
  while (temp) {
    if (temp.val === val) {
      pre.next = temp.next
    }
    pre = temp
    temp = temp.next
  }
  return head
};