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
var trainningPlan = function (head) {
  let newList = new ListNode(head.val, null)
  let list = newList
  head = head.next
  while (head) {
    list.next = new ListNode(head.val, newList)
    newList = list
    head = head.next
    console.log(list, newList)
  }
  return list
};
