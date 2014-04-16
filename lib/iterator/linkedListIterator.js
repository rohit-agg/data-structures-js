/**
 *  @file               linkedListIterator.js
 *  @created            2013-10-12
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides an iterator for the Linked List class</li>
 *  </ul>
 */

/**
 *  @constructor
 *  @class              LinkedListIterator
 *  @param              [in] pLinkedList        Object of the linked list whose iterator is being created
 *  @description
 *  <ul>
 *      <li>Initializes the class variables for the Iterator</li>
 *  </ul>
 */
var LinkedListIterator = function(pLinkedList) {
    
    current = pLinkedList.head;

    LinkedListIterator.prototype = {

        /**
         *  @function           hasNext
         *  @return             Boolean                 True/False, whether the iterator has more elements
         *  @description
         *  <ul>
         *      <li>Checks whether the particular instance of Linked List Iterator has any more elements to traverse</li>
         *  </ul>
         */
        hasNext: function() {
         
            // Returns whether there are any more elements to traverse in the Linked List
            return typeof current !== "undefined";
        },

        /**
         *  @function           next
         *  @return             Object                  Object of the data stored at the next location in Linked List
         *  @description
         *  <ul>
         *      <li>Returns the next data object stored on Linked List</li>
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
        }
    }

    return LinkedListIterator.prototype;
}

// Add the LinkedListIterator class to module.exports
module.exports = LinkedListIterator;