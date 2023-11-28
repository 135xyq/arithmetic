/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reverseBookList = function (head) {
  const result = []
  let temp = head
  while (temp) {
    result.push(temp.val)
    temp = temp.next
  }
  return result.reverse()
};