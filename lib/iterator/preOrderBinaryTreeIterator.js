/**
 *  @file               preOrderBinaryTreeIterator.js
 *  @created            2013-10-16
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides a Pre-Order Binary Tree iterator</li>
 *  </ul>
 */

// Include the required libraries
var Stack = require('./../stack');

/**
 *  @constructor
 *  @class              PreOrderBinaryTreeIterator
 *  @param              pTree               Tree for which the iterator is being created
 *  @description
 *  <ul>
 *      <li>Initializes the class variables for Pre-Order Binary Tree Iterator</li>
 *  </ul>
 */
var PreOrderBinaryTreeIterator = function(pTree) {
    
    // Create an instance of the Stack class
    treeStack = new Stack();
    
    if (!pTree.isEmpty()) {
        // If the provided binary tree is not empty, push the Root of tree onto top of Stack
    
        treeStack.push(pTree.root);
    }

    PreOrderBinaryTreeIterator.prototype = {

        /**
         *  @function           hasNext
         *  @return             Boolean                     True/False, whether the iterator has more elements
         *  @description
         *  <ul>
         *      <li>Checks whether the particular instance of Binary Tree Pre-Order Iterator has any more elements to traverse</li>
         *  </ul>
         */
        hasNext: function() {
            
            // Return the negation of result returned from the emptiness check of Stack
            // If Stack is empty, there are no more elements to traverse, else there are...
            return !treeStack.isEmpty();
        },

        /**
         *  @function           next
         *  @return             Object                      Object of the data stored at the next location in Binary Tree
         *  @description
         *  <ul>
         *      <li>Returns the next data object stored on Binary Tree based in Pre-Order Traversal</li>
         *  </ul>
         */
        next: function() {
            
            if (treeStack.isEmpty()) {
                // If the stack is Empty, ie, there are no more tree nodes to traverse, return "undefined"
            
                return "undefined";
            }
            
            // Pop the node on top of stack and store in a temporary tree node
            var treeNode = treeStack.pop();
            
            if (typeof treeNode.right !== "undefined") {
                // If the right child of current node is valid Tree Node, push the right child onto top of stack
            
                treeStack.push(treeNode.right);
            }
            
            if (typeof treeNode.left !== "undefined") {
                // If the left child of current node is valid Tree Node, push the left child onto top of stack
            
                treeStack.push(treeNode.left);
            }
            
            // Return the data stored on the current tree node
            return treeNode.data;
        }
    }

    return PreOrderBinaryTreeIterator.prototype;
}

// Add PreOrderBinaryTreeIterator to module.exports
module.exports = PreOrderBinaryTreeIterator;