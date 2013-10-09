/**
 *  @file               linkedList.js
 *  @created            2013-10-09
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides Javascript implementation of a Linked List</li>
 *  </ul>
 */

// Include the required libraries
var ListNode    = require('./common/listNode');
var equals      = require('./common/equals');

/**
 *  @constructor
 *  @class              LinkedList
 *  @param              [in] pCompare           Compare function for comparing two values in the queue
 *                                              If not provided, system default "===" will be used
 *  @description
 *  <ul>
 *      <li>Initializes the class variables</li>
 *  </ul>
 */
var LinkedList = function(pCompare) {    
}

/**
 *  @function           insertFront
 *  @class              LinkedList
 *  @param              [in] pData              Object of the data to be inserted into the linked list
 *  @param              [in] pCallback          Reference to the callback function
 *  @description
 *  <ul>
 *      <li></li>
 *  </ul>
 */
LinkedList.prototype.insertFront = function(pData, pCallback) {    
}

/**
 *  @function           insertEnd
 *  @class              LinkedList
 *  @param              [in] pData              Object of the data to be inserted into the linked list
 *  @param              [in] pCallback          Reference to the callback function
 *  @description
 *  <ul>
 *      <li></li>
 *  </ul>
 */
LinkedList.prototype.insertEnd = function(pData, pCallback) {    
}

/**
 *  @function           insertAt
 *  @class              LinkedList
 *  @param              [in] pData              Object of the data to be inserted into the linked list
 *  @param              [in] pLocation          Location at which the data needs to be inserted
 *  @param              [in] pCallback          Reference to the callback function
 *  @description
 *  <ul>
 *      <li></li>
 *  </ul>
 */
LinkedList.prototype.insertAt = function(pData, pLocation, pCallback) {    
}

/**
 *  @function           deleteFront
 *  @class              LinkedList
 *  @return             Object                  Object stored on the front of the linked list
 *  @description
 *  <ul>
 *      <li></li>
 *  </ul>
 */
LinkedList.prototype.deleteFront = function() {    
}

/**
 *  @function           deleteEnd
 *  @class              LinkedList
 *  @return             Object                  Object stored on the end of the linked list
 *  @description
 *  <ul>
 *      <li></li>
 *  </ul>
 */
LinkedList.prototype.deleteEnd = function() {    
}

/**
 *  @function           deleteAt
 *  @class              LinkedList
 *  @param              [in] pLocation          Location from which the data needs to be deleted
 *  @return             Object                  Object stored on the specified location
 *  @description
 *  <ul>
 *      <li></li>
 *  </ul>
 */
LinkedList.prototype.deleteAt = function(pLocation) {    
}

/**
 *  @function           deleteData
 *  @class              LinkedList
 *  @param              [in] pData              Object of the data to be delete from the linked list
 *  @return             Boolean                 True/False, depending on whether the data was deleted from the linked list
 *  @description
 *  <ul>
 *      <li></li>
 *  </ul>
 */
LinkedList.prototype.deleteData = function(pData) {
}

/**
 *  @function           isEmpty
 *  @class              LinkedList
 *  @return             Boolean                 True/False, depending on whether the linked list is empty
 *  @description
 *  <ul>
 *      <li></li>
 *  </ul>
 */
LinkedList.prototype.isEmpty = function() {    
}

/**
 *  @function           size
 *  @class              LinkedList
 *  @return             Number                  A Number representing the size of the linked list
 *  @description
 *  <ul>
 *      <li></li>
 *  </ul>
 */
LinkedList.prototype.size = function() {    
}

/**
 *  @function           search
 *  @class              LinkedList
 *  @param              [in] pData              Object of the data to be searched in the linked list
 *  @return             Boolean                 True/False, depending on whether the data exists in the linked list
 *  @description
 *  <ul>
 *      <li></li>
 *  </ul>
 */
LinkedList.prototype.search = function() {    
}

/**
 *  @function           toString
 *  @class              LinkedList
 *  @return             String                  A String providing the details of the LinkedList Object
 *  @description
 *  <ul>
 *      <li>This is an overriden method of the default toString</li>
 *      <li>Provides a String representation of the LinkedList class in the required format</li>
 *  </ul>
 */
LinkedList.prototype.toString = function() {    
}

// Add the LinkedList class to module.exports
module.exports = LinkedList;