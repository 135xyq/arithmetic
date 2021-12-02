/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let count = 0;
    let p = head;
    let m = head;
    while (p) {
        count++;
        p = p.next;
    }
    p = head;
    let t = m;
    for (let i = 0; i < count - n; i++) {
        console.log(p.val)
        m.next = p.next;
        m = m.next;
        p = p.next;
        console.log(m)
    }
    console.log(p.next.value)
    m.next = m.next.next;
    return t;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let fast = head,
        sort = head
    while (n-- > 0) {
        fast = fast.next
    }
    //进入循环前判断 fast是否为null 如果为null则要删除的就是第一节点
    if (fast == null) return head.next
    while (fast.next) {
        fast = fast.next
        sort = sort.next
    }
    sort.next = sort.next.next
    return head
};