/**
 *  @file               reverseDequeueIterator.js
 *  @created            2013-11-21
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides a Reversed Dequeue iterator</li>
 *  </ul>
 */

/**
 *  @constructor
 *  @class              ReversedDequeueIterator
 *  @param              pDequeue                Dequeue for which the iterator is being created
 *  @description
 *  <ul>
 *      <li>Initializes the class variables for Reversed Dequeue Iterator</li>
 *  </ul>
 */
var ReversedDequeueIterator = function(pDequeue) {
    
    var end = pDequeue.front;
    var values = pDequeue.values;
    var current = pDequeue.rear;

    ReversedDequeueIterator.prototype = {

        /**
         *  @function           hasNext
         *  @return             Boolean                 True/False, whether the iterator has more elements
         *  @description
         *  <ul>
         *      <li>Checks whether the particular instance of Dequeue Iterator has any more elements to traverse</li>
         *  </ul>
         */
        hasNext: function() {
         
            // Returns whether there are any more elements to traverse in the Dequeue
            return current != end;
        },

        /**
         *  @function           next
         *  @return             Object                  Object of the data stored at the next location in Dequeue
         *  @description
         *  <ul>
         *      <li>Returns the next data object stored on Dequeue</li>
         *  </ul>
         */
        next: function() {
            
            if (current == end) {
                // If the current pointer location is same as the size of Dequeue, return undefined
            
                return undefined;
            }
            
            // Returns the data object stored on dequeue, and decrement the counter
            return values[current--];
        }
    }

    return ReversedDequeueIterator.prototype;
}

// Add ReversedDequeueIterator to module.exports
module.exports = ReversedDequeueIterator;