/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let fast = head; // 3
    let slow = head; // 3

    while (fast && fast.next) {// true, true, true
        fast = fast.next.next; // 0, 2, -4
        slow = slow.next;      // 2, 0, -4

        if (fast === slow) { // false. false, false, true
            return true;
        }
    }
    return false;
};