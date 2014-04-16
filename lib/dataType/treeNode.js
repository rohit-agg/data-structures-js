/**
 *  @file               treeNode.js
 *  @created            2013-10-08
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides the javascript implementation for a Tree Node</li>
 *  </ul>
 */

/**
 *  @constructor
 *  @class              TreeNode
 *  @param              [in] pData              Object of the data to be stored into Binary Tree
 *  @param              [in] pLeft              Object of the node on the left of the current node
 *  @param              [in] pRight             Object of the node on the right of the current node
 *  @description
 *  <ul>
 *      <li>Initializes the class variables with the provided values</li>
 *  </ul>
 */
var TreeNode = function(pData, pLeft, pRight) {
    
    this.data = pData;
    this.left = pLeft;
    this.right = pRight;
}

// Add the TreeNode to module.exports
module.exports = TreeNode;