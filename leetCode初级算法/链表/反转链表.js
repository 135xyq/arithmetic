/**栈模拟
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
var reverseList = function (head) {
	let arr = [];
	let temp = head;
	while (temp !== null) {
		arr.push(temp);
		temp = temp.next;
	}
	if (arr.length === 0) {
		return null;
	}
	let node = arr.pop();
	let newHead = node;
	while (arr.length > 0) {
		let tempNode = arr.pop();
		node.next = tempNode;
		node = node.next;
	}
	node.next = null;
	return newHead;
};

/**双链表
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
var reverseList = function (head) {
	let newHead = null;
	while (head !== null) {
		let temp = head.next;
		head.next = newHead;
		newHead = head;
		head = temp;
	}
	return newHead;
};


/**递归
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
 var reverseList = function (head) {
	while(head===null || head.next===null){
        return head;
    }
    let reverse = reverseList(head.next);
    head.next.next = head;
    head.next =null;
    return reverse;
};
