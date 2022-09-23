/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
	// write code here
	let pre = null;
	let cur = pHead;
	while (cur) {
		let next = cur.next;
		cur.next = pre;
		pre = cur;
		cur = next;
	}
	return pre;
}
