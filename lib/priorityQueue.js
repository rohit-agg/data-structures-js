/**
 *  @file               priorityQueue.js
 *  @created            2013-12-13
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides the javascript implementation for a Priority Queue</li>
 *  </ul>
 */

// Include the required libraries
var equals              = require('./common/equals');
var exchange            = require('./common/exchange');
var MaxHeap             = require('./maxHeap');
var PriorityQueueNode   = require('./dataType/priorityQueueNode');

/**
 *  @function           comparePriority
 *  @param              [in] pEle1                  Element 1 to be compared
 *  @param              [in] pEle2                  Element 2 to be compared
 *  @return             Integer                     Result of the comparison of the two Elements
 *  @description
 *  <ul>
 *      <li>Compares the two elements as per their priority</li>
 *  </ul>
 */
var comparePriority = function(pEle1, pEle2) {
    
    var eleQueueNode1 = pEle1 instanceof PriorityQueueNode;
    var eleQueueNode2 = pEle2 instanceof PriorityQueueNode;
    var compareEle;
    var compareData;
    
    if (!eleQueueNode1 && !eleQueueNode2) {
        // If both of the two elements are not instance of PriorityQueueNode
        
        return pEle === pEle2;          // Compare the elements and return the result of the same
    }
    
    if (!eleQueueNode1 || !eleQueueNode2) {
        // If one of the two elements is a PriorityQueueNode, compare it's data with the other element
        
        // Store the element which is PriorityQueueNode separately
        compareEle = eleQueueNode1 ? pEle1 : pEle2;
        
        // Store the element which is data separately
        compareData = eleQueueNode1 ? pEle2 : pEle1;
        
        // Return the comparison of the priority queue node with the data provided
        return compareEle.compare(compareData);
    }
    
    if (pEle1.getPriority() < pEle2.getPriority()) {
        // If the priority of the first element is less than that of second, return -1
        
        return -1;
    
    } else if (pEle1.getPriority() > pEle2.getPriority()) { 
        // If the priority of the first element is more than that of second, return -1
        
        return 1;
    }
    
    return 0;           // If both the elements have same priority or any error occurs, return 0
}

/**
 *  @constructor
 *  @class              PriorityQueue
 *  @param              [in] pCompare           Compare function for comparing two values in the priority queue
 *                                              If not provided, system default "===" will be used
 *  @description
 *  <ul>
 *      <li>Initializes the class variables</li>
 *      <li>Creates an instance of MaxHeap for storing the elements of Priority Queue</li>
 *  </ul>
 */
var PriorityQueue = function(pCompare) {
    
    this.maxHeap = new MaxHeap(comparePriority);            // Instance of Max-Heap
    this.size = 0;
    this.compare = (typeof pCompare !== "function") ? equals : pCompare;
}

/**
 *  @function           insert
 *  @class              PriorityQueue
 *  @param              [in] pData              Object of the data to be inserted into the priority queue
 *  @param              [in] pPriority          Priority of the current data to be inserted into the priority queue
 *  @param              [in] pCallback          Callback function to be executed after the insert operation is completes
 *  @description
 *  <ul>
 *      <li>Inserts the provided data into the priority queue</li>
 *      <li>Balances the queue after inserting the new data into priority queue</li>
 *  </ul>
 */
PriorityQueue.prototype.insert = function(pData, pPriority, pCallback) {
    
    // Creates a new Priority Queue Node with the data and priority provided
    var newPriorityNode = new PriorityQueueNode(pData, pPriority);
    
    // Invoke the insert function of max-heap for inserting the new priority queue node
    this.maxHeap.insert(newPriorityNode, pCallback);
    
    // Assign the size from MaxHeap to current instance
    this.size = this.maxHeap.size;
}

/**
 *  @function           remove
 *  @class              PriorityQueue
 *  @param              [in] pData              Object of the data to be removed from the priority queue
 *  @description
 *  <ul>
 *      <li>Data can be deleted from anywhere in the priority queue</li> 
 *  </ul>
 */
PriorityQueue.prototype.remove = function(pData) {
    
    // Invoke the remove function of max-heap for removing the node of priority queue with the provided data
    this.maxHeap.remove(pData);
    
    // Assign the size from Max-Heap to current instance
    this.size = this.maxHeap.size;
}

/**
 *  @function           isEmpty
 *  @class              PriorityQueue
 *  @return             Boolean                 True/False, whether the Priority Queue is empty or not
 *  @description
 *  <ul>
 *      <li>Checks whether the Priority Queue is Empty or not, and returns the same</li>
 *  </ul>
 */
PriorityQueue.prototype.isEmpty = function() {
    
    // Returns the result obtained from MaxHeap's isEmpty
    return this.maxHeap.isEmpty();
}

/**
 *  @function           search
 *  @class              PriorityQueue
 *  @param              [in] pData              Object of the data to be searched in the priority queue
 *  @return             Boolean                 True/False, depending on whether the data exists in the Priority Queue or not
 *  @description
 *  <ul>
 *      <li>Searches for the provided data in the priority queue</li>
 *  </ul>
 */
PriorityQueue.prototype.search = function(pData) {
    
    // Invoke the search function of max-heap and return the result as returned
    return this.maxHeap.search(pData);
}

/**
 *  @function           iterator
 *  @class              PriorityQueue
 *  @param              [in] pOrder             Order in which Iterator should traverse the Priority Queue
 *  @return             Object                  Object of the Priority Queue Iterator
 *  @description
 *  <ul>
 *      <li>Returns a new Priority Queue Iterator on the current Instance of the PriorityQueue</li>
 *  </ul>
 */
PriorityQueue.prototype.iterator = function() {
    
}

/**
 *  @function           toString
 *  @class              PriorityQueue
 *  @return             String                  A String providing the details of the Priority-Queue Object
 *  @description
 *  <ul>
 *      <li>This is an overriden method of the default toString</li>
 *      <li>Provides a String representation of the Priority-Queue class in the required format</li>
 *  </ul>
 */
PriorityQueue.prototype.toString = function() {
    
    // Prepare the string to be returned
    returnString  = "";
    returnString += "[ Size = " + this.size;
    returnString += "]";
    
    // Return the thus formed String
    return returnString;
}

// Add the PriorityQueue to module.exports
module.exports = PriorityQueue;
