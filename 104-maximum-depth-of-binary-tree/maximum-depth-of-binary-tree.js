/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    // Base case...
    // If the subtree is empty i.e. root is NULL, return depth as 0...
    if (!root) {
        return 0;
    }
    // if root is not NULL, call the same function recursively for its left child and right child
    let leftSubtHeight = maxDepth(root.left);
    let rightSubtHeight = maxDepth(root.right);
    // When the two child function return its depth
    // Pick the maximum out of these two subtrees and return this value after adding 1 
    return Math.max(leftSubtHeight, rightSubtHeight) + 1;// Adding 1 is the current node which is the parent of the two subtrees
};