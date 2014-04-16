/**
 *  @file               queueIterator.js
 *  @created            2013-10-11
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides an iterator for the Queue class</li>
 *  </ul>
 */

/**
 *  @constructor
 *  @class              QueueIterator
 *  @param              [in] pQueue             Object of the queue whose iterator is being created
 *  @description
 *  <ul>
 *      <li>Initializes the class variables for the Iterator</li>
 *  </ul>
 */
var QueueIterator = function(pQueue) {
    
    var size = pQueue.rear;
    var values = pQueue.values;
    var current = pQueue.front;

    QueueIterator.prototype = {

        /**
         *  @function           hasNext
         *  @return             Boolean                 True/False, whether the iterator has more elements
         *  @description
         *  <ul>
         *      <li>Checks whether the particular instance of Queue Iterator has any more elements to traverse</li>
         *  </ul>
         */
        hasNext: function() {
         
            // Returns whether there are any more elements to traverse in the Queue
            return current != size;
        },

        /**
         *  @function           next
         *  @return             Object                  Object of the data stored at the next location in Queue
         *  @description
         *  <ul>
         *      <li>Returns the next data object stored on Queue</li>
         *  </ul>
         */
        next: function() {
            
            if (current == size) {
                // If the current pointer location is same as the size of Queue, return undefined

                return undefined;
            }
            
            // Returns the data object stored on queue, and increment the counter
            return values[current++];
        }
    }
}

// Add the QueueIterator class to module.exports
module.exports = QueueIterator;