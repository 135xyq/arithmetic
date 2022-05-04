/**https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/
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
var deleteNode = function(head, val) {
    let temp = head;
    if (head.val === val) return head.next;
    while (head.next) {
        if (head.next.val === val) {
            head.next = head.next.next;
            return temp;
        } else {
            head = head.next;
        }
    }
    return null;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const a = new ListNode(4)
const b = new ListNode(5)
const c = new ListNode(1)
const d = new ListNode(9)

a.next = b;
b.next = c;
c.next = d;

console.log(deleteNode(a, 1))