/**
 *  @file               doublyLinkedListIterator.js
 *  @created            2013-10-12
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides an iterator for the Doubly Linked List class</li>
 *  </ul>
 */

/**
 *  @constructor
 *  @class              DoublyLinkedListIterator
 *  @param              [in] pDLinkedList       Object of the doubly linked list whose iterator is being created
 *  @description
 *  <ul>
 *      <li>Initializes the class variables for the Iterator</li>
 *  </ul>
 */
var DoublyLinkedListIterator = function(pDoublyLinkedList) {
    
    var current = pDoublyLinkedList.head;

    DoublyLinkedListIterator.prototype = {

        /**
         *  @function           hasNext
         *  @return             Boolean                 True/False, whether the iterator has a next Element
         *  @description
         *  <ul>
         *      <li>Checks whether the particular instance of Doubly Linked List Iterator has a next element to traverse</li>
         *  </ul>
         */
        hasNext: function() {
         
            // Returns whether there are any more elements to traverse in the Doubly Linked List
            return typeof current !== "undefined";
        },

        /**
         *  @function           hasPrev
         *  @return             Boolean                 True/False, whether the iterator has a Previous Element
         *  @description
         *  <ul>
         *      <li>Checks whether the particular instance of Doubly Linked List Iterator has a previous element to traverse</li>
         *  </ul>
         */
        hasPrev: function() {
         
            // Returns whether there are any more elements to traverse in the Doubly Linked List
            return typeof current !== "undefined";
        },

        /**
         *  @function           next
         *  @return             Object                  Object of the data stored at the next location in doubly Linked List
         *  @description
         *  <ul>
         *      <li>Returns the next data object stored on Doubly Linked List</li>
         *  </ul>
         */
        next: function() {
            
            if (typeof current === "undefined") {
                // If the current pointer location is undefined, return undefined
            
                return undefined;
            }
            
            var data = current.data;            // Store data on the current node in temporary variable
            current = current.next;             // Move to the next node in linked list    
            
            // Returns the data stored in the temporary variable
            return data;
        },

        /**
         *  @function           prev
         *  @return             Object                  Object of the data stored at the previous location in doubly Linked List
         *  @description
         *  <ul>
         *      <li>Returns the previous data object stored on Doubly Linked List</li>
         *  </ul>
         */
        prev: function() {
            
            if (typeof current === "undefined") {
                // If the current pointer location is undefined, return undefined
            
                return undefined;
            }
            
            var data = current.data;                // Store data on the current node in temporary variable
            current = current.prev;                 // Move to the previous node in linked list    
            
            // Returns the data stored in the temporary variable
            return data;
        }
    }

    return DoublyLinkedListIterator.prototype;
}

// Add the DoublyLinkedListIterator class to module.exports
module.exports = DoublyLinkedListIterator;