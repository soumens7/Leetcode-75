/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (!head || k === 1) return head;

    const dummy = new ListNode(0, head);
    let groupPrev = dummy;

    while (true) {
        let kthNode = getKthNode(groupPrev, k);
        if (kthNode == null) {
            break; // not enough left to reverse
        }
        const groupNext = kthNode.next; // save node right after this group

        // reversing the current group
        let prev = groupNext;
        let curr = groupPrev.next;

        while (curr !== groupNext) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        // connect the reversed group back to the list
        let newTail = groupPrev.next;
        groupPrev.next = kthNode;
        groupPrev = newTail;
    }
    return dummy.next;
};
// helper function to find kth node from a starting point
function getKthNode(curr, k) {
    while (curr && k > 0) {
        curr = curr.next;
        k--;
    }
    return curr;
}