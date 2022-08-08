/**https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    const set = new Set();
    let tempA = headA;
    while(tempA){
        if(!set.has(tempA)){
            set.add(tempA);
        }
        tempA = tempA.next;
    }
    let tempB = headB;
    while(tempB){
        if(set.has(tempB)){
            return tempB;
        }else{
            tempB= tempB.next;
        }
    }
    return null;
};

/**https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    if(headA === null || headB === null){
        return null;
    }
    let pA = headA;
    let pB = headB;
    while (pA !== pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
};