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
var RedBlackNode        = require('./dataType/redBlackNode');
var BinaryTreeIterator  = require('./iterator/binaryTreeIterator');

/**
 *  @function           rotateLeft
 *  @param              [in] pNode              Current Node against which the rotation is to be performed
 *  @return             RedBlackNode            Updated node after successful rotation
 *  @description
 *  <ul>
 *      <li>Current node becomes the Left Child of it's Right Child</li>
 *      <li>Left Child of the Right Child of current node becomes current node's Right Child</li>
 *      <li>Colors for both the nodes are adjusted accordingly</li>
 *  </ul>
 */
var rotateLeft = function(pNode) {
    
    // Store the Right child of current node into a temprary variable
    var tempNode = pNode.getRight();
    
    pNode.setRight(tempNode.getLeft());                 // Assign left child of temporary node as right child of current node
    tempNode.setLeft(pNode);                            // Assign the current node to be left child of the temporary node
    tempNode.setColor(pNode.getColor());                // Set color of temporary node to be same as current node
    pNode.setColor(RedBlackTree._ID_NODE_COLOR_RED);    // Set color of current node to be "Red"
    
    return tempNode;                // Return the temporary node, as it is the new node in current node's position
}

/**
 *  @function           rotateRight
 *  @param              [in] pNode              Current Node against which the rotation is to be performed
 *  @return             RedBlackNode            Updated node after successful rotation
 *  @description
 *  <ul>
 *      <li>Current node becomes the Right Child of it's Left Child</li>
 *      <li>Right Child of the Left Child of current node becomes current node's Left Child</li>
 *      <li>Colors for both the nodes are adjusted accordingly</li>
 *  </ul>
 */
var rotateRight = function(pNode) {
    
    // Store the Left child of current node into a temporary variable
    var tempNode = pNode.getLeft();
    
    pNode.setLeft(tempNode.getRight());                 // Assign right child to temporary node as left child of current node
    tempNode.setRight(pNode);                           // Assign the current node to be right child of the temporary node
    tempNode.setColor(pNode.getColor());                // Set color of temporary node to be same as current node
    pNode.setColor(RedBlackTree._ID_NODE_COLOR_RED);    // Set color of current node to be "Red"
    
    return tempNode;                // Return the temporary node, as it is the new node in current node's position
}

/**
 *  @function           flipColors
 *  @param              [in] pNode              Current Node against which flipping is to be performed
 *  @return             RedBlackNode            Updated node after successful flipping of colors
 *  @description
 *  <ul>
 *      <li>Set the color of the children of current node to Black</li>
 *      <li>Set the color of the current node to Red</li>
 *  </ul>
 */
var flipColors = function(pNode) {
    
    // Flip the color of both children
    pNode.getRight().flipColor();
    pNode.getLeft().flipColor();
    
    // Flip the color of current node
    pNode.flipColor();
    
    // Return the updated node after flipping the colors
    return pNode;
}

/**
 *  @function           fixNode
 *  @param              [in] pNode              Current Node which is to be fixed
 *  @return             RedBlackNode            Updated node after successful fix operation
 *  @description
 *  <ul>
 *      <li>Performs the Left-Rotate, Right-Rotate and Flip-Colors to fix the current node</li>
 *  </ul>
 */
var fixNode = function(pNode) {
    
    if (RedBlackNode.isRed(pNode.getRight()) && !RedBlackNode.isRed(pNode.getLeft())) {
        // If the Right child of current node is Red and the left Child is Black,
        // rotateLeft is required, as this is a left leaning Red-Black Tree
        
        // Rotate the tree towards left on the current node and update it with the returned node
        pNode = rotateLeft(pNode);
    }
    
    if (RedBlackNode.isRed(pNode.getLeft()) && RedBlackNode.isRed(pNode.getLeft().getLeft())) {
        // If the Left child of current node is Red and child's child is also Red
        // rotateRight is required, as there can't be two consecutive Red Nodes
        
        // Rotate the tree towards right on the current node and update it with the returned node
        pNode = rotateRight(pNode);
    }
    
    if (RedBlackNode.isRed(pNode.getLeft()) && RedBlackNode.isRed(pNode.getRight())) {
        // If the both the Right and Left childs are Red, then make the child nodes Black
        
        // Flip the colors of children and parent of current node, and update it with the returned node
        pNode = flipColors(pNode);
    }
    
    return pNode;               // Return the updated node after applying the operations
}

/**
 *  @function           moveLeft
 *  @param              [in] pNode              Current Node about which the tree is to be rotated
 *  @return             RedBlackNode            Updated node after successful rotation
 *  @description
 *  <ul>
 *      <li>Flip the colors of the current node and it's children</li>
 *      <li>If left child of current node's right child is red, rotate right, then rotate left and flip color</li>
 *  </ul>
 */
var moveLeft = function(pNode) {
    
    // Flip the colors of current node and it's children
    flipColors(pNode);
    
    if (RedBlackNode.isRed(pNode.getRight().getLeft())) {
        // If the left child of current node's left child is Red
        
        // Rotate right child towards right, and update current node's right child with returned result
        pNode.setRight(rotateRight(pNode.getRight()));
        pNode = rotateLeft(pNode);          // Rotate towards left, and update the current node
        flipColors(pNode);                  // Flip colors against the updated current node
    }
    
    return pNode;           // Return the updated current node
}

/**
 *  @function           moveRight
 *  @param              [in] pNode              Current node about which the tree is to be rotated
 *  @return             RedBlackNode            Updated node after successful rotation
 *  @description
 *  <ul>
 *      <li>Flip the colors of the current node and it's children</li>
 *      <li>If left child of current node's left child is red, rotate right and flip colors</li>
 *  </ul>
 */
var moveRight = function(pNode) {
    
    // Flip the colors of current node and it's children
    flipColors(pNode);
    
    if (RedBlackNode.isRed(pNode.getLeft().getLeft())) {
        // If the left child of current node's left child is Red
        
        pNode = rotateRight(pNode);         // Rotate towards right, and update the current node
        flipColors(pNode);                  // Flip colors against the updated current node
    }
    
    return pNode;           // Return the updated current node
}

/**
 *  @function           removeMinimum
 *  @param              [in] pNode              Current node against which the node with minimum data is to be removed
 *  @return             RedBlackNode            Update node after successful operation
 *  @description
 *  <ul>
 *      <li></li>
 *  </ul>
 */
var removeMinimum = function(pNode) {
    
    // If the current node has no left child, return undefined
    // As the node to be removed, is the current node only
    if (typeof pNode.getLeft() === "undefined") {
        return undefined;
    }
    
    if (!RedBlackNode.isRed(pNode.getLeft()) && !RedBlackNode.isRed(pNode.getLeft().getLeft())) {
        // If the current node's left child is not red, and left child of current node's left child is
        // also not red, rotate the tree to left about the current node
        
        pNode = moveLeft(pNode);            // Move the tree to left and update the current node
    }
    
    // Set left child of current node to the node returned after performing removeMinimum operation
    // on the left child of the current node
    pNode.setLeft(removeMinimum(pNode.getLeft()));
    
    // Return the current node after fixing it up
    return fixNode(pNode);
}

/**
 *  @function           insert
 *  @param              [in] pNode              Current Node of the tree being analysed
 *  @param              [in] pData              Data to be inserted into the tree
 *  @param              [in] pTree              Object of the Tree into which the data is being inserted
 *  @return             RedBlackNode            Inserted/Updated node after operation is successful
 *  @description
 *  <ul>
 *      <li>Inserts a new node into the Red-Black Tree, if not already present</li>
 *      <li>If the current node is undefined, creates a new RedBlackNode and returns the same</li>
 *      <li>If the current node is defined, update and return the same</li>
 *  </ul>
 */
var insert = function(pNode, pData, pTree) {
    
    if (typeof pNode === "undefined") {
        // If the current node is "undefined", create an object of RedBlackNode and return the same
        
        pTree.size++;               // Increase the size of the tree, as a new node is being inserted
        return new RedBlackNode(pData, undefined, undefined, RedBlackTree._ID_NODE_COLOR_RED);
    }
    
    // Compare the data in the current node and the data to be inserted
    var result = pTree.compare(pNode.getData(), pData);
    
    if (result < 0) {
        // If the obtained result is less than 0, current node's data is lesser than the data to be inserted
        // Traverse the right subtree and update the right child with the returned result

        pNode.setRight(insert(pNode.getRight(), pData, pTree));

    } else if (result > 0) {
        // If the obtained result is more than 0, current node's data is greater than the data to be inserted
        // Traverse the left subtree and update the left child with the returned result

        pNode.setLeft(insert(pNode.getLeft(), pData, pTree));
    }
    
    // Call the function to fix the current node in execution, and assign it as the updated node
    pNode = fixNode(pNode);
    
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
 *      <li>Removes an existing node from the Red-Black Tree, if present</li>
 *      <li>If the current node is undefined, returns undefined</li>
 *      <li>If the current node is the node to be deleted, update and return the new node in it's position</li>
 *  </ul>
 */
var remove = function(pNode, pData, pTree) {
    
    // If type of current node is undefined, return undefined
    if (typeof pNode === "undefined") {
        return undefined;
    }
    
    // Compare the data in the current node and the data to be inserted
    var result = pTree.compare(pNode.getData(), pData);
    var tempNode;               // TemporaryNode variable for performing intermediate tasks
    
    if (result > 0) {
        // If the obtained result is more than 0, current node's data is greater than the data to be deleted
        // Traverse the left subtree and update the left child with the returned result
        
        if (!RedBlackNode.isRed(pNode.getLeft()) && !RedBlackNode.isRed(pNode.getLeft().getLeft())) {
            // If the left child of current node is not red and the left child of left child of current node
            // is also not red, introduce a red in left by rotating the tree towards left
            
            pNode = moveLeft(pNode);                // Move the tree to left and update the current node
        }
        
        // Update the left child of current node after performing the remove operation on left child
        pNode.setLeft(remove(pNode.getLeft(), pData, pTree));
        
    } else {
        // If the obtained result is less than equal to 0, current node's data is lesser or equal to data to be deleted
        // Check the current node and if required, traverse the right subtree for further modification
    
        // If the left child of current node is red, rotate towards right the current node
        if (RedBlackNode.isRed(pNode.getLeft())) {
            pNode = rotateRight(pNode);
        }
        
        // If the current node is the one to be deleted and it doesn't have a right child
        if (result === 0 && typeof pNode.getRight() === "undefined") {
            return undefined;
        }
        
        if (!RedBlackNode.isRed(pNode.getRight()) && !RedBlackNode.isRed(pNode.getRight().getLeft())) {
            // If the right child of current node is not red and the left child of current node's right child
            // is also, not red, rotate the tree towards right against the current node
            
            pNode = moveRight(pNode);               // Move the tree to right and update the current node
        }
        
        if (result === 0) {
            // If the current node is the one to be deleted
            
            // Set right child of the current node into the temporary node
            tempNode = pNode.getRight();
            
            // Move to the leftmost node of the temporary child
            while (typeof tempNode.getLeft() !== "undefined") {
                tempNode = tempNode.getLeft();
            }
            
            // Set the data in the current node to the data in the temporary node
            pNode.setData(tempNode.getData());
            
            // Update the right child of current node by deleting the minimum in the right sub-tree
            pNode.setRight(removeMinimum(pNode.getRight()));
            
        } else {
            // If the node to be deleted is present in the right sub-tree
            
            // Update the right child of current node after performing the remove operation on right child
            pNode.setRight(remove(pNode.getRight(), pData, pTree));
        }
    }
    
    // Return the updated current node after fixing it up
    return fixNode(pNode);
}

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
    
    this.root = undefined;
    this.size = 0;
    this.compare = (typeof pCompare !== "function") ? equals : pCompare;
}

/**
 *  @function           insert
 *  @class              RedBlackTree
 *  @param              [in] pData              Object of the data to be inserted into the tree
 *  @param              [in] pCallback          Callback function to be executed after the insert operation is completes
 *  @description
 *  <ul>
 *      <li>Inserts the provided data into the red-black tree</li>
 *      <li>Data is always inserted as the leaf node of the tree</li>
 *      <li>After insertion, necessary steps are taken to balance the tree</li>
 *  </ul>
 */
RedBlackTree.prototype.insert = function(pData, pCallback) {
    
    // Call the insert function with the root node of the tree, data and object of tree itself
    // Function will insert the data (if not already present) into the tree
    // It will return a node, which should be considered the updated root node
    this.root = insert(this.root, pData, this);
    
    // Execute the callback function, if provided
    // Also, execute only when pCallback is a type of function
    if (typeof pCallback === "function") {
        pCallback();
    }
}

/**
 *  @function           remove
 *  @class              RedBlackTree
 *  @param              [in] pData              Object of the data to be removed from the red-black tree
 *  @return             Object                  Object of the data being deleted from the tree (if present)
 *  @description
 *  <ul>
 *      <li>Data can be deleted from anywhere in the tree</li>
 *      <li>If data to be deleted is not present, "undefined" is returned</li>
 *  </ul>
 */
RedBlackTree.prototype.remove = function() {
    
    // Call the remove function with root node of the tree, data and object of the tree itself
    // Function will remove the data (if present) from the tree
    // It will return a node, which should be considered the updated root node
    this.root = remove(this.root, pData, this);
}

/**
 *  @function           isEmpty
 *  @class              RedBlackTree            True/False, whether the Red-Black Tree is empty or not
 *  @return             Boolean
 *  @description
 *  <ul>
 *      <li>Checks whether the Tree is Empty or not, and returns the same</li>
 *  </ul>
 */
RedBlackTree.prototype.isEmpty = function() {
    
    // Returns whether the Tree is empty or not
    return typeof this.root === "undefined";
}

/**
 *  @function           search
 *  @class              RedBlackTree
 *  @param              [in] pData              Object of the data to be searched in the tree
 *  @return             Boolean                 True/False, depending on whether the data exists in the Tree or not
 *  @description
 *  <ul>
 *      <li>Searches for the provided data in the red-black tree</li>
 *  </ul>
 */
RedBlackTree.prototype.search = function() {
    
    // Initialize the search node with the Root node of the red-black tree
    var searchNode = this.root;
    var result;
    
    while (typeof searchNode !== "undefined") {
        // Loop through the tree until an "undefined" node is not encountered
        
        // Compare the data in the current node and the data to be searched
        result = this.compare(searchNode.getData(), pData);
        
        if (result < 0) {
            // If the result is less than 0, current node's data is lesser than the data to be searched

            searchNode = searchNode.getRight();     // Traverse the right subtree
        
        } else if (result > 0) {
            // If the result is more than 0, current node's data is greater than the data to be searched

            searchNode = searchNode.getLeft();      // Traverse the left subtree
        
        } else {
            // If the result is equal to 0, current node's data is equal to the data to be searched

            return true;                            // Search Successful
        }
    }
    
    return false;               // Unsuccessful search, Data to be searched was not found in the tree
}

/**
 *  @function           iterator
 *  @class              RedBlackTree
 *  @param              [in] pOrder             Order in which Iterator should traverse the red-black tree
 *  @return             Object                  Object of the Red-Black Tree Iterator
 *  @description
 *  <ul>
 *      <li>Returns a new Binary Tree Iterator on the current Instance of the Red-Black Tree</li>
 *  </ul>
 */
RedBlackTree.prototype.iterator = function() {
    
    // If the Order provided is not defined, Set to "In-Order"
    if (typeof pOrder === "undefined") {
        pOrder = RedBlackTree._ID_TRAVERSE_IN_ORDER;
    }
    
    // Return a new Binary Tree Iterator with the current instance and provided Order as input
    return new BinaryTreeIterator(this, pOrder);
}

/**
 *  @function           toString
 *  @class              RedBlackTree
 *  @return             String                  A String providing the details of the Red-Black Tree Object
 *  @description
 *  <ul>
 *      <li>This is an overriden method of the default toString</li>
 *      <li>Provides a String representation of the Red-Black Tree class in the required format</li>
 *  </ul>
 */
RedBlackTree.prototype.toString = function() {
    
    // Prepare the string to be returned
    returnString  = "";
    returnString += "[ Size = " + this.size;
    returnString += "]";
    
    // Return the thus formed String
    return returnString;
}

// Add the Colors from RedBlackNode to RedBlackTree
RedBlackTree._ID_NODE_COLOR_RED     = RedBlackNode._ID_NODE_COLOR_RED;
RedBlackTree._ID_NODE_COLOR_BLACK   = RedBlackNode._ID_NODE_COLOR_BLACK;

// Add the Traversing Orders from BinaryTreeIterator to Binary Tree
BinaryTree._ID_TRAVERSE_PRE_ORDER   = BinaryTreeIterator._ID_TRAVERSE_PRE_ORDER;
BinaryTree._ID_TRAVERSE_IN_ORDER    = BinaryTreeIterator._ID_TRAVERSE_IN_ORDER;
BinaryTree._ID_TRAVERSE_POST_ORDER  = BinaryTreeIterator._ID_TRAVERSE_POST_ORDER;

// Add RedBlackTree class to module.exports
module.exports = RedBlackTree;