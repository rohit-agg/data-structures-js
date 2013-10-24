/**
 *  @file               redBlackNode.js
 *  @created            2013-10-16
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides the javascript implementation for a Red-Black Tree Node</li>
 *  </ul>
 */

// Include the required libraries
var define = require('./define');

/**
 *  @constructor
 *  @class              RedBlackNode
 *  @param              [in] pData              Object of the data to be stored into Red-Black Tree
 *  @param              [in] pLeft              Object of the node on the left of the current node
 *  @param              [in] pRight             Object of the node on the right of the current node
 *  @param              [in] pColor             Color Constant providing the color for the current node
 *  @description
 *  <ul>
 *      <li>Initializes the class variables with the provided values</li>
 *  </ul>
 */
var RedBlackNode = function(pData, pLeft, pRight, pColor) {
    
    this.data = pData;
    this.left = pLeft;
    this.right = pRight;
    this.setColor(pColor);              // Set the color, by calling the function
}

/**
 *  @function           setLeft
 *  @class              RedBlackNode
 *  @param              [in] pLeft              Object of the node on the left of the current node
 *  @description
 *  <ul>
 *      <li>Sets the left child of the current node to the provided object</li>
 *  </ul>
 */
RedBlackNode.prototype.setLeft = function(pLeft) {
    
    this.left = pLeft;              // Sets the left child
}

/**
 *  @function           setRight
 *  @class              RedBlackNode
 *  @param              [in] pRight             Object of the node on the right of the current node
 *  @description
 *  <ul>
 *      <li>Sets the right child of the current node to the provided object</li>
 *  </ul>
 */
RedBlackNode.prototype.setRight = function(pRight) {
    
    this.right = pRight;            // Set the right child
}

/**
 *  @function           setData
 *  @class              RedBlackNode
 *  @param              [in] pData              Object of the data to be inserted into the current node
 *  @description
 *  <ul>
 *      <li>Sets the data of the current node to the provided object</li>
 *  </ul>
 */
RedBlackNode.prototype.setData = function(pData) {
    
    this.data = pData;              // Set the data of current node
}

/**
 *  @function           setColor
 *  @class              RedBlackNode
 *  @param              [in] pColor             Color to be set for the current node
 *  @description
 *  <ul>
 *      <li>Sets the color of the current node to the provided color</li>
 *  </ul>
 */
RedBlackNode.prototype.setColor = function(pColor) {
    
    switch (pColor) {
        // Initialize the color of the node, depending on the color provided
        
        case RedBlackNode._ID_NODE_COLOR_BLACK:
            // If the color provided is black, initialize to Black
            
            this.color = RedBlackNode._ID_NODE_COLOR_BLACK;
            break;
        
        case RedBlackNode._ID_NODE_COLOR_RED:
            // If the color provides is red, initialize to Red
            
        default:
            // If invalid, or non-existent value is provided, initialize to Red
            
            this.color = RedBlackNode._ID_NODE_COLOR_RED;
            break;
    }
}

/**
 *  @function           getLeft
 *  @class              RedBlackNode
 *  @return             Object                  Object of the node on the left of the current node
 *  @description
 *  <ul>
 *      <li>Gets the left child of the current node</li>
 *  </ul>
 */
RedBlackNode.prototype.getLeft = function() {
    
    return this.left;               // Returns the object of the left child
}

/**
 *  @function           getRight
 *  @class              RedBlackNode
 *  @return             Object                  Object of the node on the right of the current node
 *  @description
 *  <ul>
 *      <li>Gets the right child of the current node</li>
 *  </ul>
 */
RedBlackNode.prototype.getRight = function() {
    
    return this.right;              // Returns the object of the right child
}

/**
 *  @function           getData
 *  @class              RedBlackNode
 *  @return             Object                  Object of the data stored in the current node
 *  @description
 *  <ul>
 *      <li>Gets the object of the data stored in the current node</li>
 *  </ul>
 */
RedBlackNode.prototype.getData = function() {
    
    return this.data;               // Returns the object of the data in the current node
}

/**
 *  @function           getColor
 *  @class              RedBlackNode
 *  @return             Constant                Color stored for the current node, ie, one of the class constants
 *  @description
 *  <ul>
 *      <li>Gets the color of the current node, either Red or Black</li>
 *  </ul>
 */
RedBlackNode.prototype.getColor = function() {
    
    return this.color;              // Returns the color of the current node, either Red or Black
}

/**
 *  @static
 *  @function           isRed
 *  @class              RedBlackNode
 *  @param              [in] pNode              Node whose color is to be verified
 *  @return             Boolean                 Whether the provided Node is Red or Black in color
 *  @description
 *  <ul>
 *      <li>Undefined nodes are considered "Black" in color, so result is false</li>
 *      <li>All valid node's color is compared with "Red" and appropriate result is returned</li>
 *  </ul>
 */
RedBlackNode.isRed = function(pNode) {
    
    // If the provided node is undefined, it is "Black"
    if (typeof pNode === "undefined")   return false;
    
    // If the node is valid, compare it's color with "Red" and return the appropriate result
    return pNode.getColor() === RedBlackNode._ID_NODE_COLOR_RED;
}

// Define the two types of colors for nodes of Red-Black Tree
define(RedBlackNode, '_ID_NODE_COLOR_RED',      1);
define(RedBlackNode, '_ID_NODE_COLOR_BLACK',    2);

// Add the RedBlackNode to module.exports
module.exports = RedBlackNode;
