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

// Add the ListNode to module.exports
module.exports = ListNode;