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
    // create dummy node to serve as the starting point of the merged list.
    let dummy = new ListNode();
    let cur = dummy; // cur to keep a track of current element

    while (list1 && list2) {
        if (list1.val > list2.val) {
            // append the current list2 to merged list
            cur.next = list2;
            list2 = list2.next; // move list2 pointer to next
        }
        else {
            // otherwise, append current node of list1 to merged list
            cur.next = list1;
            list1 = list1.next; // move list1 to next
        }
        cur = cur.next;

    }
    // append remaining nodes to end of merged list
    cur.next = list1 || list2;
    // return next node after dummy node
    return dummy.next;
};