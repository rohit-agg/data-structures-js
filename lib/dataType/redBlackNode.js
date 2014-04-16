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
var define = require('./../common/define');

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
    this.color = pColor;
}

/**
 *  @function           flipColor
 *  @class              RedBlackNode
 *  @description
 *  <ul>
 *      <li>If the color of node is Red, make it Black</li>
 *      <li>If the colod of node is Black, make it Red</li>
 *  </ul>
 */
RedBlackNode.prototype.flipColor = function() {
    
    // Flip the color based on the current color of the node
    this.color = (this.color === RedBlackNode._ID_NODE_COLOR_RED) ?
                    RedBlackNode._ID_NODE_COLOR_BLACK : RedBlackNode._ID_NODE_COLOR_RED;
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
    
    if (typeof pNode === "undefined") {
        // If the provided node is undefined, it is "Black"
    
        return false;
    }
    
    // If the node is valid, compare it's color with "Red" and return the appropriate result
    return pNode.getColor() === RedBlackNode._ID_NODE_COLOR_RED;
}

// Define the two types of colors for nodes of Red-Black Tree
define(RedBlackNode, '_ID_NODE_COLOR_RED',      1);
define(RedBlackNode, '_ID_NODE_COLOR_BLACK',    2);

// Add the RedBlackNode to module.exports
module.exports = RedBlackNode;