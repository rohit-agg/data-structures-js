/**
 *  @file               priorityQueueNode.js
 *  @created            2013-12-13
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides the javascript implementation for a Priority Queue Node</li>
 *  </ul>
 */

/**
 *  @constructor
 *  @class              PriorityQueueNode
 *  @param              [in] pData              Object of the data to be stored into Priority Queue
 *  @param              [in] pPriority          Priority of the current data to be stored
 *  @description
 *  <ul>
 *      <li>Initializes the class variables with the provided values</li>
 *  </ul>
 */
var PriorityQueueNode = function(pData, pPriority) {
    
    this.data = pData;
    this.priority = pPriority;
}

/**
 *  @function           setPriority
 *  @class              PriorityQueueNode
 *  @param              [in] pPriority          Priority of the current node in the Priority Queue
 *  @description
 *  <ul>
 *      <li>Sets the priority of the current node</li>
 *  </ul>
 */
PriorityQueueNode.prototype.setPriority = function(pPriority) {
    
    this.priority = pPriority;                  // Sets the priority
}

/**
 *  @function           getPriority
 *  @class              PriorityQueueNode
 *  @return             Integer                 Priority of the current node in the Priority Queue
 *  @description
 *  <ul>
 *      <li>Gets the priority of the current node</li>
 *  </ul>
 */
PriorityQueueNode.prototype.getPriority = function() {
    
    return this.priority;               // Returns the priority of the current node
}

/**
 *  @function           getData
 *  @class              PriorityQueueNode
 *  @return             Object                  Object of the data stored in the current node
 *  @description
 *  <ul>
 *      <li>Gets the object of the data stored in the current node</li>
 *  </ul>
 */
PriorityQueueNode.prototype.getData = function() {
    
    return this.data;               // Returns the object of the data in the current node
}

/**
 *  @function           compare
 *  @class              PriorityQueueNode
 *  @param              [in] pObject            The Node / Data against which the current object is to be compared
 *  @return             Number                  Result of the comparison of the data stored in the current node and one passed as parameter
 *  @description
 *  <ul>
 *      <li>Object is decided upon to be a Priority Queue node or the data stored in it</li>
 *  </ul>
 */
PriorityQueueNode.prototype.compare = function(pObject) {
    
    // Data for comparison is decided on whether the passed object is a PriorityQueueNode or not
    var compareData = pObject instanceof PriorityQueueNode ? pObject.data : pObject;
    
    // Compare the data against the value stored in the object and return the result
    if (this.data === compareData)          return 0;    
    else if (this.data < compareData)       return -1;
    else                                    return 1;
}

// Add the PriorityQueueNode to module.exports
module.exports = PriorityQueueNode;
