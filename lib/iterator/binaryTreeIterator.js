/**
 *  @file               binaryTreeIterator.js
 *  @created            2013-10-15
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides an iterator for Binary Tree class</li>
 *  </ul>
 */

// Include the required libraries
var define                      = require('./../common/define');
var PreOrderBinaryTreeIterator  = require('./preOrderBinaryTreeIterator');
var InOrderBinaryTreeIterator   = require('./inOrderBinaryTreeIterator');
var PostOrderBinaryTreeIterator = require('./postOrderBinaryTreeIterator');

/**
 *  @constructor
 *  @class              BinaryTreeIterator
 *  @param              [in] pBinaryTree            Object of the binary tree whose iterator is being created
 *  @param              [in] pOrder                 Order in which the Traversal is to be made
 *  @description
 *  <ul>
 *      <li>Initializes the class variables for the Iterator</li>
 *  </ul>
 */
var BinaryTreeIterator = function(pBinaryTree, pOrder) {
    
    switch (pOrder) {
        // Initialize the class iterator, depending on the type of Order provided
        
        case BinaryTreeIterator._ID_TRAVERSE_PRE_ORDER:
            // If the Order provided is "Pre-Order"
            
            // Initialize the class iterator to PreOrder iterator
            this.iterator = new PreOrderBinaryTreeIterator(pBinaryTree);
            break;
        
        case BinaryTreeIterator._ID_TRAVERSE_POST_ORDER:
            // If the Order provided is "Post-Order"
            
            // Initialize the class iterator to PostOrder iterator
            this.iterator = new PostOrderBinaryTreeIterator(pBinaryTree);
            break;
        
        case BinaryTreeIterator._ID_TRAVERSE_IN_ORDER:
            // If the Order provided is "In-Order"
            
        default:
            // If any invalid, or non-existent value is provided
            
            // Initialized the class iterator to InOrder iterator
            this.iterator = new InOrderBinaryTreeIterator(pBinaryTree);
            break;
    }    
}

/**
 *  @function           hasNext
 *  @class              BinaryTreeIterator
 *  @return             Boolean                     True/False, whether the iterator has more elements
 *  @description
 *  <ul>
 *      <li>Checks whether the particular instance of Binary Tree Iterator has any more elements to traverse</li>
 *  </ul>
 */
BinaryTreeIterator.prototype.hasNext = function() {
    
    // Return the result from the concerned Order Iterator
    return this.iterator.hasNext();
}

/**
 *  @function           next
 *  @class              BinaryTreeIterator
 *  @return             Object                      Object of the data stored at the next location in Binary Tree
 *  @description
 *  <ul>
 *      <li>Returns the next data object stored on Binary Tree based on the provided Order</li>
 *  </ul>
 */
BinaryTreeIterator.prototype.next = function() {
    
    // Return the result from the concerned Order Iterator
    return this.iterator.next();
}

// Define the three Types of Traversal Orders for trees
define(BinaryTreeIterator, '_ID_TRAVERSE_PRE_ORDER',    1);         // Pre-Order = Data, Left, Right
define(BinaryTreeIterator, '_ID_TRAVERSE_IN_ORDER',     2);         // In-Order = Left, Data, Right
define(BinaryTreeIterator, '_ID_TRAVERSE_POST_ORDER',   3);         // Post-Order = Left, Right, Data

// Add the BinaryTreeIterator class to module.exports
module.exports = BinaryTreeIterator;