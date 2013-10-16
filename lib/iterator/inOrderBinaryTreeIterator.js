/**
 *  @file               inOrderBinaryTreeIterator.js
 *  @created            2013-10-16
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides a In-Order Binary Tree iterator</li>
 *  </ul>
 */

// Include the required libraries
var Stack = require('./../stack');

/**
 *  @constructor
 *  @class              InOrderBinaryTreeIterator
 *  @param              pTree               Tree for which the iterator is being created
 *  @description
 *  <ul>
 *      <li>Initializes the class variables for In-Order Binary Tree Iterator</li>
 *  </ul>
 */
var InOrderBinaryTreeIterator = function(pTree) {
    
    // Create an instance of the Stack class
    this.treeStack = new Stack();
    
    if (!pTree.isEmpty()) {
        // If the provided binary tree is not empty, push the Root of tree and it's left leaning childs onto top of Stack
        
        // Initialize a temporary variable with the root of the tree
        treeNode = pTree.root;
        
        do {            
            
            // Push the current Tree Node onto the top of Stack
            this.treeStack.push(treeNode);
            
            // Loop until, the leftmost child of the node is not reached, whose left child is "undefined"
        } while (typeof (treeNode = treeNode.getLeft()) !== 'undefined');
    }
}

/**
 *  @function           hasNext
 *  @class              InOrderBinaryTreeIterator
 *  @return             Boolean                     True/False, whether the iterator has more elements
 *  @description
 *  <ul>
 *      <li>Checks whether the particular instance of Binary Tree In-Order Iterator has any more elements to traverse</li>
 *  </ul>
 */
InOrderBinaryTreeIterator.prototype.hasNext = function() {
    
    // Return the negation of result returned from the emptiness check of Stack
    // If Stack is empty, there are no more elements to traverse, else there are...
    return !this.treeStack.isEmpty();
}

/**
 *  @function           next
 *  @class              InOrderBinaryTreeIterator
 *  @return             Object                      Object of the data stored at the next location in Binary Tree
 *  @description
 *  <ul>
 *      <li>Returns the next data object stored on Binary Tree based in In-Order Traversal</li>
 *  </ul>
 */
InOrderBinaryTreeIterator.prototype.next = function() {
    
    // If the stack is Empty, ie, there are no more tree nodes to traverse, return "undefined"
    if (this.treeStack.isEmpty())                           return "undefined";
    
    // Pop the node on top of stack and store in a temporary tree node
    var treeNode = this.treeStack.pop();
    var tempTreeNode;                           // Create a temporary tree node for further processing
    
    if (typeof treeNode.getRight() !== "undefined") {
        // If the right child of current node is valid Tree Node, push the right child onto top of stack
        // Also, push all the left leaning childs of the right child onto top of stack
        
        tempTreeNode = treeNode.getRight();             // Store the right child of current node into temporary node
        
        do {            
            
            // Push the temporary Tree Node onto the top of Stack
            this.treeStack.push(tempTreeNode);
            
            // Loop until, the leftmost child of the temporary node is not reached,
            // whose left child is "undefined"
        } while (typeof (tempTreeNode = tempTreeNode.getLeft()) !== 'undefined');
    }
    
    // Return the data stored on the current tree node
    return treeNode.getData();
}

// Add InOrderBinaryTreeIterator to module.exports
module.exports = InOrderBinaryTreeIterator;
