/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let slow = head;
    let fast = head;

    // to get the middle element in Linked list
    while(fast != null && fast.next != null){
        fast = fast.next.next;
        slow = slow.next; // last updated slow wil be middle 
    }

    // Reverse second half of Linked list 
    let nextNode, prev = null;
    while(slow != null){
        nextNode = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextNode;
    }
    // finding max twin sum of Linked List
    let start = head;
    let maxSum = 0;
    while(prev != null){
        maxSum = Math.max(maxSum, start.val + prev.val);
        prev = prev.next;
        start = start.next;
    }

    return maxSum;
};