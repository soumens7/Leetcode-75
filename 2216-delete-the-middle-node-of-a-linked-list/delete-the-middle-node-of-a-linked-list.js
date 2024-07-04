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
var deleteMiddle = function (head) {
    if (!head || !head.next) {
        // if the list is empty or has only one node 
        return null;
    }
    let slow = head;
    let fast = head;
    let prev = null;

    // using fast and slow pointer to find the middle node
    while(fast !== null && fast.next !== null){
        prev = slow; // track the node before middle
        slow = slow.next; // moving one step
        fast = fast.next.next; // moving two steps
    }
    // skip the middle node
    prev.next = slow.next; // removing the middle node
    
    return head;
};