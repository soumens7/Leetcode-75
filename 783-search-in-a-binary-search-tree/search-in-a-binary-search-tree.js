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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    // Base case: If the root is null or we find the node with the desired value
    if (!root || root.val === val) return root;

    // if node value is greter than val(target value) then search in left subtree
    if (root.val > val) {
        return searchBST(root.left, val);
    }
    // if node value is smaller than val(target value) then search in left subtree
    return searchBST(root.right, val);
};