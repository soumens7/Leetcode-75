/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if(!head) return null;

    const newMap = new Map();

    let curr = head;
    while(curr){
        newMap.set(curr, new Node(curr.val));
        curr = curr.next;
    }
    curr = head;
    while(curr){
        newMap.get(curr).next = newMap.get(curr.next) || null;
        newMap.get(curr).random = newMap.get(curr.random) || null;
        curr = curr.next;
    }
    return newMap.get(head);
};