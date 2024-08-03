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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    let output = 0;
    let map = {};

    const traverse = (root, pathSum) => {
        if (!root) return null;

        pathSum += root.val; // current path sum

        // Case 1: starts from root node
        if (pathSum === targetSum) { output++; }

        // Case 2: starts from middle of tree
        // frequency of targetSum in the current path (up to current node)
        // check if there's a subpath that sums to targetSum
        if (map[pathSum - targetSum]) {
            output += map[pathSum - targetSum];
        }
        // memoize current path sum (root to current node) and it's frequency
        if (map[pathSum]) {
            map[pathSum]++;
        }
        else map[pathSum] = 1;
        // Traverse the left subtree
        if (root.left) { traverse(root.left, pathSum); }
        // Traverse the right subtree
        if (root.right) { traverse(root.right, pathSum); }

        // remove the current path sum
        // to note that path is not available/visited
        // Backtrack: Remove the current path sum from the map
        map[pathSum]--;
    };

    traverse(root, 0);
    return output;
};