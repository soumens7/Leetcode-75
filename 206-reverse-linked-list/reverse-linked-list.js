/**
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
var reverseList = function(head) {
    let node = null; // return value

    while (head) {
        const temp = head.next;// temp used to traverse through linked list
        head.next = node; // reversing the direction of pointer
        node = head; // moving next(node) pointer to current node(head)
        head = temp; // moving head pointer to next node(temp), advancing linked list
    }

    return node; // return node pointer, now points to new head of reversed linked list
};