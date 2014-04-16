/**
 *  @file               doublyListNode.js
 *  @created            2013-10-12
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides the javascript implementation for a Doubly List Node</li>
 *  </ul>
 */

/**
 *  @constructor
 *  @class              DoublyListNode
 *  @param              [in] pData              Object of the data to be stored into List
 *  @param              [in] pNext              Object of the node next in the list
 *  @param              [in] pPrev              Object of the node previous in the list
 *  @description
 *  <ul>
 *      <li>Initializes the class variables with the provided values</li>
 *  </ul>
 */
var DoublyListNode = function(pData, pNext, pPrev) {
    
    this.data = pData;
    this.next = pNext;
    this.prev = pPrev;
}

// Add the DoublyListNode to module.exports
module.exports = DoublyListNode;