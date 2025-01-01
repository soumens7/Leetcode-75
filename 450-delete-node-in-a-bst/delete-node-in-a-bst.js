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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (!root) return null; // Base case: Node not found

    if (key < root.val) {
        // Key is in the left subtree
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        // Key is in the right subtree
        root.right = deleteNode(root.right, key);
    } else {
        // Node to be deleted found
        if (!root.left && !root.right) {
            // Case 1: No children
            return null;
        } else if (!root.left) {
            // Case 2: Only right child
            return root.right;
        } else if (!root.right) {
            // Case 2: Only left child
            return root.left;
        } else {
            // Case 3: Two children
            let successor = findMin(root.right); // Find in-order successor
            root.val = successor.val; // Replace value with successor's value
            root.right = deleteNode(root.right, successor.val); // Delete successor
        }
    }
    return root;
};

// Helper function to find the minimum value node in a BST
function findMin(node) {
    while (node.left) {
        node = node.left;
    }
    return node;
}
