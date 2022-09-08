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
var isPalindrome = function (head) {
	let arr = [];
	while (head) {
		arr.push(head.val);
		head = head.next;
	}
	for (let i = 0; i < Math.floor(arr.length / 2); i++) {
		if (arr[i] !== arr[arr.length - 1 - i]) {
			return false;
		}
	}
	return true;
};

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
var isPalindrome = function (head) {
	let fast = head,
		slow = head;
	let tempHead = head;
	while (fast !== null && fast.next !== null) {
		fast = fast.next.next;
		slow = slow.next;
	}
    if(fast){
        slow= slow.next;
    }

    let reverseSlow = reverse(slow)

    while(reverseSlow !==null){
        if(reverseSlow.val !==tempHead.val){
            return false;
        }
        reverseSlow = reverseSlow.next;
        tempHead = tempHead.next;
    }
    return true;
};


function reverse(head) {
    if(head===null || head.next === null){
        return head;
    }
    let reverseNode = reverse(head.next);
    head.next.next = head;
    head.next =null;
    return reverseNode;
}