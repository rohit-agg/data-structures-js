/**
 *  @file               listNode.js
 *  @created            2013-10-09
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides the javascript implementation for a List Node</li>
 *  </ul>
 */

/**
 *  @constructor
 *  @class              ListNode
 *  @param              [in] pData              Object of the data to be stored into List
 *  @param              [in] pNext              Object of the node next in the list
 *  @description
 *  <ul>
 *      <li>Initializes the class variables with the provided values</li>
 *  </ul>
 */
var ListNode = function(pData, pNext) {
    
    this.data = pData;
    this.next = pNext;
}

/**
 *  @function           setNext
 *  @class              ListNode
 *  @param              [in] pNext              Object of the node next in the list
 *  @description
 *  <ul>
 *      <li>Sets the next node of the current node to the provided object</li>
 *  </ul>
 */
ListNode.prototype.setNext = function(pNext) {
    
    this.next = pNext;              // Sets the next node
}

/**
 *  @function           getNext
 *  @class              ListNode
 *  @return             Object                  Object of the node next to the current node
 *  @description
 *  <ul>
 *      <li>Gets the next node of the current node</li>
 *  </ul>
 */
ListNode.prototype.getNext = function() {
    
    return this.next;               // Returns the object of the next node
}

/**
 *  @function           getData
 *  @class              ListNode
 *  @return             Object                  Object of the data stored in the current node
 *  @description
 *  <ul>
 *      <li>Gets the object of the data stored in the current node</li>
 *  </ul>
 */
ListNode.prototype.getData = function() {
    
    return this.data;               // Returns the object of the data in the current node
}

// Add the ListNode to module.exports
module.exports = ListNode;