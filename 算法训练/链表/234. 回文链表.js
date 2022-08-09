/**https://leetcode.cn/problems/palindrome-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let tempArr = [];
    while(head){
        tempArr.push(head.val);
        head = head.next;
    }
    for(let i = 0 ;i < Math.floor(tempArr.length / 2);i++){
        if(tempArr[i] !== tempArr[tempArr.length - 1 -i]){
            return false;
        }
    }
    return true;
};