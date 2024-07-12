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
    let arr = []; // create array
    // pushing elements of Linked list in array(arr)
    while(head){
        arr.push(head.val);
        head = head.next;
    } 
    let max = 0;
    let n = arr.length;
    // finding the max Twin Sum value using Math.max() 
    for(let i =0; i< n ; i++){
        max = Math.max(max, (arr[i] + arr[n-1-i]));
    }
    return max;
};