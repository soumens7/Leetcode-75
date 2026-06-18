/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let res = dummy;
    let total = 0, carry = 0;
    // l1 = [2,4,3], l2 = [5,6]
    while(l1 || l2 || carry){
        total = carry; // 0, 0, 1, 0

        if(l1){
            total += l1.val; // 2, 4, 4
            l1 = l1.next;    // 4, 3, null
        }
        if(l2){
            total += l2.val; // 7, 10, 4
            l2 = l2.next;   // 6, null, null
        }
        let num = total % 10; // 7, 0, 4
        carry = Math.floor(total / 10); // 0, 1, 0
        dummy.next = new ListNode(num); // 0 -> 7, 0, 4  
        dummy = dummy.next;             //      7 -> 0 -> 4 -> none
    }
    return res.next;
};