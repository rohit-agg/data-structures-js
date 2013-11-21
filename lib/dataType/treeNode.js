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

/**
 *  @function           setLeft
 *  @class              TreeNode
 *  @param              [in] pLeft              Object of the node on the left of the current node
 *  @description
 *  <ul>
 *      <li>Sets the left child of the current node to the provided object</li>
 *  </ul>
 */
TreeNode.prototype.setLeft = function(pLeft) {
    
    this.left = pLeft;              // Sets the left child
}

/**
 *  @function           setRight
 *  @class              TreeNode
 *  @param              [in] pRight             Object of the node on the right of the current node
 *  @description
 *  <ul>
 *      <li>Sets the right child of the current node to the provided object</li>
 *  </ul>
 */
TreeNode.prototype.setRight = function(pRight) {
    
    this.right = pRight;            // Set the right child
}

/**
 *  @function           setData
 *  @class              TreeNode
 *  @param              [in] pData              Object of the data to be inserted into the current node
 *  @description
 *  <ul>
 *      <li>Sets the data of the current node to the provided object</li>
 *  </ul>
 */
TreeNode.prototype.setData = function(pData) {
    
    this.data = pData;              // Set the data of current node
}

/**
 *  @function           getLeft
 *  @class              TreeNode
 *  @return             Object                  Object of the node on the left of the current node
 *  @description
 *  <ul>
 *      <li>Gets the left child of the current node</li>
 *  </ul>
 */
TreeNode.prototype.getLeft = function() {
    
    return this.left;               // Returns the object of the left child
}

/**
 *  @function           getRight
 *  @class              TreeNode
 *  @return             Object                  Object of the node on the right of the current node
 *  @description
 *  <ul>
 *      <li>Gets the right child of the current node</li>
 *  </ul>
 */
TreeNode.prototype.getRight = function() {
    
    return this.right;              // Returns the object of the right child
}

/**
 *  @function           getData
 *  @class              TreeNode
 *  @return             Object                  Object of the data stored in the current node
 *  @description
 *  <ul>
 *      <li>Gets the object of the data stored in the current node</li>
 *  </ul>
 */
TreeNode.prototype.getData = function() {
    
    return this.data;               // Returns the object of the data in the current node
}

// Add the TreeNode to module.exports
module.exports = TreeNode;
