/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
	if (list1 === null) return list2;
	if (list2 === null) return list1;
	let newList = new ListNode(-1);
	let temp = newList;
	while (list1 !== null && list2 !== null) {
		if (list1.val <= list2.val) {
            temp.next = list1;
			list1 = list1.next;
		} else {
			temp.next = list2;
			list2 = list2.next;
		}
		temp = temp.next;
	}
	temp.next = list1 === null ? list2 : list1;
	return newList.next;
};

