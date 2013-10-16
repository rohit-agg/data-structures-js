/**
 *  @file               redBlackTree.js
 *  @created            2013-10-16
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides the javascript implementation of a Red-Black Tree</li>
 *  </ul>
 */

// Include the required libraries
var equals              = require('./common/equals');
var RedBlackNode        = require('./common/redBlackNode');
var BinaryTreeIterator  = require('./iterator/binaryTreeIterator');

/**
 *  @constructor
 *  @class              RedBlackTree
 *  @param              [in] pCompare           Compare function for comparing two values in the tree
 *                                              If not provided, system default "===" will be used
 *  @description
 *  <ul>
 *      <li>Initializes the class variables</li>
 *  </ul>
 */
var RedBlackTree = function(pCompare) {
    
}

/**
 *  @function           insert
 *  @class              RedBlackTree
 *  @param
 *  @description
 *  <ul>
 *      <li></li>
 *  </ul>
 */
RedBlackTree.prototype.insert = function() {
    
}

/**
 *  @function           remove
 *  @class              RedBlackTree
 *  @param
 *  @description
 *  <ul>
 *      <li></li>
 *  </ul>
 */
RedBlackTree.prototype.remove = function() {
    
}

/**
 *  @function           isEmpty
 *  @class              RedBlackTree
 *  @return             Boolean
 *  @description
 *  <ul>
 *      <li></li>
 *  </ul>
 */
RedBlackTree.prototype.isEmpty = function() {
    
}

/**
 *  @function           size
 *  @class              RedBlackTree
 *  @return             Number
 *  @description
 *  <ul>
 *      <li></li>
 *  </ul>
 */
RedBlackTree.prototype.size = function() {
    
}

/**
 *  @function           search
 *  @class              RedBlackTree
 *  @return             Boolean
 *  @description
 *  <ul>
 *      <li></li>
 *  </ul>
 */
RedBlackTree.prototype.search = function() {
    
}

/**
 *  @function           iterator
 *  @class              RedBlackTree
 *  @return
 *  @description
 *  <ul>
 *      <li></li>
 *  </ul>
 */
RedBlackTree.prototype.iterator = function() {
    
}

/**
 *  @function           toString
 *  @class              RedBlackTree
 *  @return             String
 *  @description
 *  <ul>
 *      <li></li>
 *  </ul>
 */
RedBlackTree.prototype.toString = function() {
    
}

// Add the Colors from RedBlackNode to RedBlackTree
RedBlackTree._ID_NODE_COLOR_RED     = RedBlackNode._ID_NODE_COLOR_RED;
RedBlackTree._ID_NODE_COLOR_BLACK   = RedBlackNode._ID_NODE_COLOR_BLACK;

// Add RedBlackTree class to module.exports
module.exports = RedBlackTree;
