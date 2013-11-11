/**
 *  @file               maxHeap.js
 *  @created            2013-11-11
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides the javascript implementation of a Max-Heap</li>
 *  </ul>
 */

// Include the required libraries
var equals              = require('./common/equals');
var exchange            = require('./common/exchange');

/**
 *  @function           swim
 *  @param              [in] pTree          The Tree in which the exchange is to be performed
 *  @param              [in] pIndex         The index at which the swim operation should start
 *  @param              [in] pHeap          Object of the Heap for which the operation is being executed
 *  @description
 *  <ul>
 *      <li>The function balances the Heap in maximum order</li>
 *      <li>Pushes the value at pIndex higher-up in the heirarrchy if Heap condition is violated</li>
 *  </ul>
 */
var swim = function(pTree, pIndex, pHeap) {
    
    while (pIndex > 0 && pHeap.compare(pTree[pIndex], pTree[(pIndex-1)/2]) > 1) {
        // Loop until the root of tree is reached or the Max-Heap condition for current node and it's
        // parent node is being violated, ie child is bigger than the parent
        
        exchange(pTree, pIndex, (pIndex-1)/2);          // Exchange the value of current node and it's parent        
        pIndex = (pIndex-1)/2;                          // Update the index to point to the parent node
    }
}

/**
 *  @function           sink
 *  @param              [in] pTree          The Tree in which the exchange is to be performed
 *  @param              [in] pIndex         The Index at which the sink operation should start
 *  @param              [in] pHeap          Object of the Heap for which the operation is being executed
 *  @description
 *  <ul>
 *      <li>The function balances the Heap in maximum order</li>
 *      <li>Pushes the value at pIndex lower-down in the heirarrchy is Heap condition is violated</li>
 *  </ul>
 */
var sink = function(pTree, pIndex, pHeap) {
    
    var tempIndex;          // Temporary variable to store index in every loop execution
    
    while (((2 * pIndex) + 1) < pHeap.size) {
        // If the current index has a valid left child
        
        tempIndex = (2 * pIndex) + 1;       // Store the index of left child of current node
        
        if (tempIndex < (pHeap.size-1) && pHeap.compare(pTree[tempIndex], pTree[tempIndex + 1]) < 0) {
            // If the current node also has a right child, and the right child is greater than the left child
            
            tempIndex++;            // Increment the temporary index, to point to the right child
        }
        
        if (pHeap.compare(pTree[pIndex], pTree[tempIndex]) >= 0) {
            // If the current node is greater than equal to the marked child node
            
            break;          // Break from the loop and exit, Balancing done
        }
        
        exchange(pTree, pIndex, tempIndex);         // Perform an exchange on current node and marked child node
        pIndex = tempIndex;                         // Assign the marked child index as the current node
    }
}

/**
 *  @constructor
 *  @class              MaxHeap
 *  @param              [in] pCompare           Compare function for comparing two values in the heap
 *                                              If not provided, system default "===" will be used
 *  @description
 *  <ul>
 *      <li>Initializes the class variables</li>
 *  </ul>
 */
var MaxHeap = function(pCompare) {
    
    this.values = Array();
    this.size = 0;
    this.compare = (typeof pCompare !== "function") ? equals : pCompare;
}

/**
 *  @function           insert
 *  @class              MaxHeap
 *  @param              [in] pData              Object of the data to be inserted into the heap
 *  @param              [in] pCallback          Callback function to be executed after the insert operation is completes
 *  @description
 *  <ul>
 *      <li>Inserts the provided data into the heap</li>
 *      <li>Balances the heap after inserting the new data into heap</li>
 *  </ul>
 */
MaxHeap.prototype.insert = function(pData, pCallback) {
    
    // Insert the data into the next available position in tree
    this.values[this.size++] = pData;
    
    // Adjust the tree to fulfil the Max-heap condition for the latest inserted node
    swim(this.values, this.size-1, this);
    
    // Execute the callback function, if provided
    // Also, execute only when pCallback is a type of function
    if (typeof pCallback === "function")    pCallback();
}

/**
 *  @function           remove
 *  @class              MaxHeap
 *  @param              [in] pData              Object of the data to be removed from the heap 
 *  @description
 *  <ul>
 *      <li>Data can be deleted from anywhere in the heap</li> 
 *  </ul>
 */
MaxHeap.prototype.remove = function(pData) {
    
    var searchIndex = 0;        // Initialize the search index to 0, starting point for heap
    var result;
    
    while (searchIndex < this.size) {
        // Loop until all the elements in the heap are not traversed
        
        // Compare the data in the current node and the data to be deleted
        result = this.compare(this.values[searchIndex], pData);
        
        if (result == 0) {
            // If the comparison is found to be equal, node is found, return true
        
            // Exchange the data in the current node with the last node in the tree
            exchange(this.values, searchIndex, this.size-1);
            
            delete this.values[this.size-1];            // Delete the data present on the last node
            this.size--;                                // Decrement the size of the heap
            sink(this.values, searchIndex, this);       // Re-adjust the heap to satisfy max-heap property
        
        } else if (result < 0) {
            // If the searched node is lesser than the node to be deleted, data is not present in heap
        
            break;          // Mark the search as completed, Data to be deleted is not in heap
        }
        
        searchIndex++;              // Increment the search index
    }
}

/**
 *  @function           isEmpty
 *  @class              MaxHeap
 *  @return             Boolean                 True/False, whether the Heap is empty or not
 *  @description
 *  <ul>
 *      <li>Checks whether the Heap is Empty or not, and returns the same</li>
 *  </ul>
 */
MaxHeap.prototype.isEmpty = function() {
    
    // Returns whether the Heap is empty or not
    return typeof this.size === 0;
}

/**
 *  @function           size
 *  @class              MaxHeap
 *  @return             Number                  An Integer representing the number of nodes in the heap
 *  @description
 *  <ul>
 *      <li>Returns the size of the heap, ie number of elements in Max-Heap</li>
 *  </ul>
 */
MaxHeap.prototype.size = function() {
    
    return this.size;               // Returns the size of heap
}

/**
 *  @function           search
 *  @class              MaxHeap
 *  @param              [in] pData              Object of the data to be searched in the heap
 *  @return             Boolean                 True/False, depending on whether the data exists in the Heap or not
 *  @description
 *  <ul>
 *      <li>Searches for the provided data in the max heap</li>
 *  </ul>
 */
MaxHeap.prototype.search = function(pData) {
    
    var searchIndex = 0;        // Initialize the search index to 0, starting point for heap
    var result;
    
    while (searchIndex < this.size) {
        // Loop until all the elements in the heap are not traversed
        
        // Compare the data in the current node and the data to be searched
        result = this.compare(this.values[searchIndex], pData);
        
        if (result == 0) {
            // If the comparison is found to be equal, node is found, return true
        
            return true;
        
        } else if (result < 0) {
            // If the searched node is lesser than the node to be searched, data is not present in heap
        
            return false;           // Unsuccessful search, Data to be searched can't be in heap
        }
        
        searchIndex++;              // Increment the search index
    }
    
    return false;               // Unsuccessful search, Data to be searched was not found in the heap
}

/**
 *  @function           iterator
 *  @class              MaxHeap
 *  @param              [in] pOrder             Order in which Iterator should traverse the Heap
 *  @return             Object                  Object of the Heap Iterator
 *  @description
 *  <ul>
 *      <li>Returns a new Binary Tree Iterator on the current Instance of the Max-Heap</li>
 *  </ul>
 */
MaxHeap.prototype.iterator = function() {
    
}

/**
 *  @function           toString
 *  @class              MaxHeap
 *  @return             String                  A String providing the details of the Max-Heap Object
 *  @description
 *  <ul>
 *      <li>This is an overriden method of the default toString</li>
 *      <li>Provides a String representation of the Max-Heap class in the required format</li>
 *  </ul>
 */
MaxHeap.prototype.toString = function() {
    
    // Prepare the string to be returned
    returnString  = "";
    returnString += "[ Size = " + this.size;
    returnString += "]";
    
    // Return the thus formed String
    return returnString;
}

// Add the MaxHeap to module.exports
module.exports = MaxHeap;
