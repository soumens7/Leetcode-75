/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // if current node is null or equal to p or q, return it
    if(!root || root == p || root == q){
        return root;
    }
    // recur for left and right subtree
    const leftSubtree = lowestCommonAncestor(root.left, p , q);
    const rightSubtree = lowestCommonAncestor(root.right, p, q);

    // if both left and right are not null, this is the LCA
    if(leftSubtree !== null && rightSubtree !== null){
        return root;// this is LCA
    }

    // Otherwise return left or right
    return leftSubtree || rightSubtree;
};