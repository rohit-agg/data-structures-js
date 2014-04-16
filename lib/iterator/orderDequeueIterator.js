/**
 *  @file               orderDequeueIterator.js
 *  @created            2013-11-21
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides a Ordered Dequeue iterator</li>
 *  </ul>
 */

/**
 *  @constructor
 *  @class              OrderDequeueIterator
 *  @param              pDequeue                Dequeue for which the iterator is being created
 *  @description
 *  <ul>
 *      <li>Initializes the class variables for Ordered Dequeue Iterator</li>
 *  </ul>
 */
var OrderDequeueIterator = function(pDequeue) {
    
    var end = pDequeue.rear;
    var values = pDequeue.values;
    var current = pDequeue.front;

    OrderDequeueIterator.prototype = {

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
            
            // Returns the data object stored on dequeue, and increment the counter
            return values[current++];
        }
    }
}

// Add OrderDequeueIterator to module.exports
module.exports = OrderDequeueIterator;