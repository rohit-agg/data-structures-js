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

/**
 *  @function           setNext
 *  @class              DoublyListNode
 *  @param              [in] pNext              Object of the node next in the list
 *  @description
 *  <ul>
 *      <li>Sets the next node of the current node to the provided object</li>
 *  </ul>
 */
DoublyListNode.prototype.setNext = function(pNext) {
    
    this.next = pNext;              // Sets the next node
}

/**
 *  @function           setPrev
 *  @class              DoublyListNode
 *  @param              [in] pPrev              Object of the node previous in the list
 *  @description
 *  <ul>
 *      <li>Sets the previous node of the current node to the provided object</li>
 *  </ul>
 */
DoublyListNode.prototype.setPrev = function(pPrev) {
    
    this.prev = pPrev;              // Sets the previous node
}

/**
 *  @function           getNext
 *  @class              DoublyListNode
 *  @return             Object                  Object of the node next to the current node
 *  @description
 *  <ul>
 *      <li>Gets the next node of the current node</li>
 *  </ul>
 */
DoublyListNode.prototype.getNext = function() {
    
    return this.next;               // Returns the object of the next node
}

/**
 *  @function           getPrev
 *  @class              DoublyListNode
 *  @return             Object                  Object of the node previous to the current node
 *  @description
 *  <ul>
 *      <li>Gets the previous node of the current node</li>
 *  </ul>
 */
DoublyListNode.prototype.getPrev = function() {
    
    return this.prev;               // Returns the object of the previous node
}

/**
 *  @function           getData
 *  @class              DoublyListNode
 *  @return             Object                  Object of the data stored in the current node
 *  @description
 *  <ul>
 *      <li>Gets the object of the data stored in the current node</li>
 *  </ul>
 */
DoublyListNode.prototype.getData = function() {
    
    return this.data;               // Returns the object of the data in the current node
}

// Add the DoublyListNode to module.exports
module.exports = DoublyListNode;
