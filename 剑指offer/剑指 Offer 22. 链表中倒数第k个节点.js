/**https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let pre = null;
    if (!head.next && k === 1) {
        return head;
    }
    head.pre = pre;
    while (head.next) {
        pre = head;
        head = head.next;
        head.pre = pre;
    }
    let i = 0;
    while (head.pre) {
        i++;
        if (k === i) {
            return head;
        } else {
            head = head.pre
        }
    }
    return head;

};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const a = new ListNode(1)
const b = new ListNode(2)
    // const c = new ListNode(3)
    // const d = new ListNode(4)
    // const e = new ListNode(5)
    // const f = new ListNode(6)


a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;


console.log(getKthFromEnd(a, 2))