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
var maxLevelSum = function (root) {
    if (!root) return 0; // return if tree is empty

    const queue = [root];// initialize que with root node
    let maxSum = -Infinity;
    let maxLevel = 0;
    let currentLevel = 0;

    while (queue.length > 0) {

        let levelSize = queue.length; // current level size of queue
        let levelSum = 0; // Sum of node values at current level 

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift(); // Dequeue node
            levelSum += node.val; // Adding the current node val to levelSum

            // Add(Enqueue) left and right children in queue
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        currentLevel++; // Move to next level 

        // Update maxSum and maxLevel if this level has a higher sum.  
        if (levelSum > maxSum) {
            maxSum = levelSum;
            maxLevel = currentLevel;
        }

    }
    return maxLevel;
};