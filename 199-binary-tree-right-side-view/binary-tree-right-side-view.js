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
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) return []; // if root is null return empty array

    const result = []; // array to store nodes(values)
    const queue = [root] // initialize queue with root node

    while (queue.length > 0) {
        const levelSize = queue.length; // Number of nodes in current level

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift(); // dequeue the first node

            // if its the last node in current level, add it to the result
            if (i === levelSize - 1) {
                result.push(node.val);
            }
            // Enqueue the left and right children (if they exist)
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);

        }
    }

    return result
};