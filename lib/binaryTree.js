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
var equals              = require('./common/equals');
var TreeNode            = require('./common/treeNode');
var BinaryTreeIterator  = require('./iterator/binaryTreeIterator');

/**
 *  @function           insert
 *  @param              [in] pNode              Current Node of the tree being analysed
 *  @param              [in] pData              Data to be inserted into the tree
 *  @param              [in] pTree              Object of the Tree into which the data is being inserted
 *  @return             TreeNode                Inserted/Updated node after operation is successful
 *  @description
 *  <ul>
 *      <li>Inserts a new node into the Binary Tree, if not already present</li>
 *      <li>If the current node is undefined, creates a new TreeNode and returns the same</li>
 *      <li>If the current node is defined, update and return the same</li>
 *  </ul>
 */
var insert = function(pNode, pData, pTree) {
    
    if (typeof pNode === "undefined") {
        // If the current node is "undefined", create an object of TreeNode and return the same
        
        pTree.size++;               // Increase the size of the tree, as a new node is being inserted
        return new TreeNode(pData, undefined, undefined);
    }
    
    // Compare the data in the current node and the data to be inserted
    var result = pTree.compare(pNode.getData(), pData);
    
    // If the obtained result is less than 0, current node's data is lesser than the data to be inserted
    // Traverse the right subtree and update the right child with the returned result
    if (result < 0)         pNode.setRight(insert(pNode.getRight(), pData, pTree));
    
    // If the obtained result is more than 0, current node's data is greater than the data to be inserted
    // Traverse the left subtree and update the left child with the returned result
    else if (result > 0)    pNode.setLeft(insert(pNode.getLeft(), pData, pTree));
    
    return pNode;               // Return the updated pNode
}

/**
 *  @function           remove
 *  @param              [in] pNode              Current Node of the tree being analysed
 *  @param              [in] pData              Data to be removed from the tree
 *  @param              [in] pTree              Object of the Tree from which the data is being removed
 *  @return             TreeNode                Updated node after operation is successful
 *  @description
 *  <ul>
 *      <li>Removes an existing node from the Binary Tree, if present</li>
 *      <li>If the current node is undefined, returns undefined</li>
 *      <li>If the current node is the node to be deleted, update and return the new node in it's position</li>
 *  </ul>
 */
var remove = function(pNode, pData, pTree) {
    
    // If type of current node is undefined, return undefined
    if (typeof pNode === "undefined")           return undefined;
    
    // Compare the data in the current node and the data to be inserted
    var result = pTree.compare(pNode.getData(), pData);
    var tempNode;               // TemporaryNode variable for performing intermediate tasks
    
    // If the obtained result is less than 0, current node's data is lesser than the data to be deleted
    // Traverse the right subtree and update the right child with the returned result
    if (result < 0)             pNode.setRight(remove(pNode.getRight(), pData, pTree));
    
    // If the obtained result is more than 0, current node's data is greater than the data to be deleted
    // Traverse the left subtree and update the left child with the returned result
    else if (result > 0)        pNode.setLeft(remove(pNode.getLeft(), pData, pTree));
    
    // If the obtained result is equal to 0, current node is the node to be deleted
    else {
        
        if (typeof pNode.getRight() === "undefined") {
            // If the current node only has a left child, and no right child
            
            pTree.size--;                   // Decrement the size of the tree as the node is being deleted
            pNode = pNode.getLeft();        // Update the current node to it's left child and return the same
            
        } else {
            // If the current node has both a left and a right child,
            // Retrieve the in-order successor of the current node and update the node with it
            
            // Set right child of the current node into the temporary node
            tempNode = pNode.getRight();
            
            // Move to the leftmost node of the temporary child
            while (typeof tempNode.getLeft() !== "undefined")       tempNode = tempNode.getLeft();
            
            // Set the data in the current node to the data in the temporary node
            pNode.setData(tempNode.getData());
            
            // Call the remove function, with temporary node and it's associated data as input
            // Update the temporary node to the returned node from the remove function
            tempNode = remove(tempNode, tempNode.getData(), pTree);
        }
    }
    
    return pNode;               // Return the updated pNode
}

/**
 *  @constructor
 *  @class              Tree
 *  @param              [in] pCompare           Compare function for comparing two values in the tree
 *                                              If not provided, system default "===" will be used
 *  @description
 *  <ul>
 *      <li>Initializes the class variables</li>
 *  </ul>
 */
var BinaryTree = function(pCompare) {
    
    this.root = undefined;
    this.size = 0;
    this.compare = (typeof pCompare !== "function") ? equals : pCompare;
}

/**
 *  @function           insert
 *  @class              BinaryTree
 *  @param              [in] pData              Object of the data to be inserted into the tree
 *  @param              [in] pCallback          Callback function to be executed after the insert operation is completes
 *  @description
 *  <ul>
 *      <li>Inserts the provided data into the tree</li>
 *      <li>Data is always inserted as the leaf node of the tree</li>
 *  </ul>
 */
BinaryTree.prototype.insert = function(pData, pCallback) {
    
    // Call the insert function with the root node of the tree, data and object of tree itself
    // Function will insert the data (if not already present) into the tree
    // It will return a node, which should be considered the updated root node
    this.root = insert(this.root, pData, this);
    
    // Execute the callback function, if provided
    // Also, execute only when pCallback is a type of function
    if (typeof pCallback === "function")    pCallback();
}

/**
 *  @function           remove
 *  @class              BinaryTree
 *  @param              [in] pData              Object of the data to be removed from the binary tree
 *  @return             Object                  Object of the data being deleted from the tree (if present)
 *  @description
 *  <ul>
 *      <li>Data can be deleted from anywhere in the tree</li>
 *      <li>If data to be deleted is not present, "undefined" is returned</li>
 *  </ul>
 */
BinaryTree.prototype.remove = function(pData) {
    
    // Call the remove function with root node of the tree, data and object of the tree itself
    // Function will remove the data (if present) from the tree
    // It will return a node, which should be considered the updated root node
    this.root = remove(this.root, pData, this);
}

/**
 *  @function           isEmpty
 *  @class              BinaryTree
 *  @return             Boolean                 True/False, whether the Tree is empty or not
 *  @description
 *  <ul>
 *      <li>Checks whether the Tree is Empty or not, and returns the same</li>
 *  </ul>
 */
BinaryTree.prototype.isEmpty = function() {
    
    // Returns whether the Tree is empty or not
    return typeof this.root === "undefined";
}

/**
 *  @function           size
 *  @class              BinaryTree
 *  @return             Number                  An Integer representing the number of nodes in the tree
 *  @description
 *  <ul>
 *      <li>Returns the size of the tree, ie number of elements in Binary Tree</li>
 *  </ul>
 */
BinaryTree.prototype.size = function() {
    
    return this.size;               // Returns the size of binary tree
}

/**
 *  @function           search
 *  @class              BinaryTree
 *  @param              [in] pData              Object of the data to be searched in the tree
 *  @return             Boolean                 True/False, depending on whether the data exists in the Tree or not
 *  @description
 *  <ul>
 *      <li>Searches for the provided data in the binary tree</li>
 *  </ul>
 */
BinaryTree.prototype.search = function(pData) {
    
    // Initialize the search node with the Root node of the tree
    var searchNode = this.root;
    var result;
    
    while (typeof searchNode !== "undefined") {
        // Loop through the tree until an "undefined" node is not encountered
        
        // Compare the data in the current node and the data to be searched
        result = this.compare(searchNode.getData(), pData);
        
        // If the result is less than 0, current node's data is lesser than the data to be searched
        if (result < 0)         searchNode = searchNode.getRight();     // Traverse the right subtree
    
        // If the result is more than 0, current node's data is greater than the data to be searched        
        else if (result > 0)    searchNode = searchNode.getLeft();      // Traverse the left subtree
        
        // If the result is equal to 0, current node's data is equal to the data to be searched        
        else                    return true;                            // Search Successful
    }
    
    return false;               // Unsuccessful search, Data to be searched was not found in the tree
}

/**
 *  @function           iterator
 *  @class              BinaryTree
 *  @param              [in] pOrder             Order in which Iterator should traverse the binary tree
 *  @return             Object                  Object of the Binary Tree Iterator
 *  @description
 *  <ul>
 *      <li>Returns a new Binary Tree Iterator on the current Instance of the Binary Tree</li>
 *  </ul>
 */
BinaryTree.prototype.iterator = function(pOrder) {
    
    // If the Order provided is not defined, Set to "In-Order"
    if (typeof pOrder === "undefined")      pOrder = BinaryTree._ID_TRAVERSE_IN_ORDER;
    
    // Return a new Binary Tree Iterator with the current instance and provided Order as input
    return new BinaryTreeIterator(this, pOrder);
}

/**
 *  @function           toString
 *  @class              BinaryTree
 *  @return             String                  A String providing the details of the Binary Tree Object
 *  @description
 *  <ul>
 *      <li>This is an overriden method of the default toString</li>
 *      <li>Provides a String representation of the Binary Tree class in the required format</li>
 *  </ul>
 */
BinaryTree.prototype.toString = function() {
    
    // Prepare the string to be returned
    returnString  = "";
    returnString += "[ Size = " + this.size;
    returnString += "]";
    
    // Return the thus formed String
    return returnString;
}

// Add the Traversing Orders from BinaryTreeIterator to Binary Tree
BinaryTree._ID_TRAVERSE_PRE_ORDER   = BinaryTreeIterator._ID_TRAVERSE_PRE_ORDER;
BinaryTree._ID_TRAVERSE_IN_ORDER    = BinaryTreeIterator._ID_TRAVERSE_IN_ORDER;
BinaryTree._ID_TRAVERSE_POST_ORDER  = BinaryTreeIterator._ID_TRAVERSE_POST_ORDER;

// Add the BinaryTree to module.exports
module.exports = BinaryTree;
