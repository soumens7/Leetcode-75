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
var longestZigZag = function(root) {
    let maxLength = 0;
    // recursive function that performs DFS reversal of tree
    function dfs(tree,isLeft,count) { // tree: current node visited, 
                                    //   isLeft: boolean flag indicating the direction of the last move (true if the last move was to the left, false if it was to the right).
                                    //  count: The current length of the ZigZag path.
        if(!tree) return;
        maxLength = Math.max(maxLength, count);

        if(isLeft) { //  isLeft: boolean flag indicating the direction of the last move
            dfs(tree.left, false, count+1);
            dfs(tree.right, true, 1);
        } else {
            dfs(tree.right, true, count+1);
            dfs(tree.left, false, 1);
        }
    }

     dfs(root.left,false, 1);
     dfs(root.right,true,1);
     return maxLength; 
};