/**
 *  @file               binaryTree.js
 *  @created            2013-10-08
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides the javascript implementation of a binary search tree</li>
 *  </ul>
 */

// Include the required libraries
var treeNode = require('treeNode');

/**
 *  @constructor
 *  @class              Tree
 *  @description
 *  <ul>
 *      <li>Initializes the class variables</li>
 *  </ul>
 */
var BinaryTree = function() {
}

/**
 *  @function           insert
 *  @class              BinaryTree
 *  @param              [in] pData                  Object of the data to be inserted into the tree
 *  @param              [in] pCallback              Callback function to be executed after the insert operation is completes
 *  @description
 *  <ul>
 *      <li>Inserts the provided data into the tree</li>
 *      <li>Data is always inserted as the root node of the tree</li>
 *  </ul>
 */
BinaryTree.prototype.insert = function() {
}

/**
 *  @function           remove
 *  @class              BinaryTree
 *  @return             Object                      Object of the data being deleted from the tree (if present)
 *  @description
 *  <ul>
 *      <li>Data can be deleted from anywhere in the tree</li>
 *      <li>If data to be deleted is not present, "undefined" is returned</li>
 *  </ul>
 */
BinaryTree.prototype.remove = function() {
}

/**
 *  @function           search
 *  @class              BinaryTree
 *  @param              [in] pData                  Object of the data to be searched in the tree
 *  @return             Boolean                     True/False, depending on whether the data exists in the tree or not
 *  @description
 *  <ul>
 *      <li></li>
 *  </ul>
 */
BinaryTree.prototype.search = function() {
}

// Add the BinaryTree to module.exports
module.exports = BinaryTree;