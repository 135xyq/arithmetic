/**https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 == null) {
        return l2;
    }
    if (l2 == null) {
        return l1;
    }
    let pre = null;
    if (l1.val > l2.val) {
        pre = l2;
        pre.next = mergeTwoLists(l1, l2.next)
    } else {
        pre = l1;
        pre.next = mergeTwoLists(l1.next, l2)
    }
    return pre;
};

/**https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 == null) {
        return l2;
    }
    if (l2 == null) {
        return l1;
    }
    const head = new ListNode(0);
    let temp = head;
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            temp.next = l1;
            l1 = l1.next;
        } else {
            temp.next = l2;
            l2 = l2.next
        }
        temp = temp.next;
    }
    temp.next = l2 === null ? l1 : l2;
    return head.next;
};


function ListNode(val) {
    this.val = val;
    this.next = null;
}

const a = new ListNode(1)
const b = new ListNode(2)
const c = new ListNode(4)
const d = new ListNode(1)
const e = new ListNode(3)
const f = new ListNode(4)


a.next = b;
b.next = c;

d.next = e;
e.next = f;

let res = mergeTwoLists(a, d);
console.log('\n---------------------------------\n')
while (res) {
    console.log(res.val);
    res = res.next;
}