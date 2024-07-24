/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const leaf_Values = (root, leafVals) => { // function takes a root node and an array leafVals.
    if(!root){
        return;
    }
    if(!root.left && !root.right){// encounters a leaf node (a node with no left and right child) 
        leafVals.push(root.val); // it adds the node's value to leafVals.
    }
    leaf_Values(root.left, leafVals);
    leaf_Values(root.right, leafVals);
   };

   const leafVals1 = []; // for leaf values of root1 
   const leafVals2 = []; // for leaf values of root2
   leaf_Values(root1, leafVals1);
   leaf_Values(root2, leafVals2);

   return JSON.stringify(leafVals1) === JSON.stringify(leafVals2);
};