/**
 *  @file               postOrderBinaryTreeIterator.js
 *  @created            2013-10-16
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides a Post-Order Binary Tree iterator</li>
 *  </ul>
 */

// Include the required libraries
var Stack = require('./../stack');

/**
 *  @constructor
 *  @class              PostOrderBinaryTreeIterator
 *  @param              pTree               Tree for which the iterator is being created
 *  @description
 *  <ul>
 *      <li>Initializes the class variables for Post-Order Binary Tree Iterator</li>
 *  </ul>
 */
var PostOrderBinaryTreeIterator = function(pTree) {
    
    // Create an instance of the Stack class
    this.treeStack = new Stack();
}

/**
 *  @function           hasNext
 *  @class              PostOrderBinaryTreeIterator
 *  @return             Boolean                     True/False, whether the iterator has more elements
 *  @description
 *  <ul>
 *      <li>Checks whether the particular instance of Binary Tree Post-Order Iterator has any more elements to traverse</li>
 *  </ul>
 */
PostOrderBinaryTreeIterator.prototype.hasNext = function() {
    
    // Return the negation of result returned from the emptiness check of Stack
    // If Stack is empty, there are no more elements to traverse, else there are...
    return !this.treeStack.isEmpty();
}

/**
 *  @function           next
 *  @class              PostOrderBinaryTreeIterator
 *  @return             Object                      Object of the data stored at the next location in Binary Tree
 *  @description
 *  <ul>
 *      <li>Returns the next data object stored on Binary Tree based in Post-Order Traversal</li>
 *  </ul>
 */
PostOrderBinaryTreeIterator.prototype.next = function() {
    
    // If the stack is Empty, ie, there are no more tree nodes to traverse, return "undefined"
    if (this.treeStack.isEmpty())                           return "undefined";
    
    // Pop the node on top of stack and store in a temporary tree node
    var treeNode = this.treeStack.pop();
    
    // Return the data stored on the current tree node
    return treeNode.getData();
}

// Add PostOrderBinaryTreeIterator to module.exports
module.exports = PostOrderBinaryTreeIterator;
