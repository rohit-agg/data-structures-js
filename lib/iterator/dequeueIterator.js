/**
 *  @file               dequeueIterator.js
 *  @created            2013-10-11
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides an iterator for the Dequeue class</li>
 *  </ul>
 */

// Include the required Libraries
var define                  = require('./../common/define');
var OrderDequeueIterator    = require('./orderDequeueIterator');
var ReverseDequeueIterator  = require('./reverseDequeueIterator');

/**
 *  @constructor
 *  @class              DequeueIterator
 *  @param              [in] pDequeue           Object of the dequeue whose iterator is being created
 *  @param              [in] pOrder             Order in which the Traversal is to be made
 *  @description
 *  <ul>
 *      <li>Initializes the class variables for the Iterator</li>
 *  </ul>
 */
var DequeueIterator = function(pDequeue, pOrder) {
    
    switch (pOrder) {
        // Initialize the class iterator, depending on the type of Order provided
        
        case DequeueIterator._ID_TRAVERSE_REVERSE:
            // If the Order provided is "Reverse"
            
            // Initialize the class iterator to Reverse iterator
            this.iterator = new ReverseDequeueIterator(pDequeue);
            break;
        
        case DequeueIterator._ID_TRAVERSE_ORDER:
            // If the Order provided is "Order"
            
        default:
            // If any invalid, or non-existent value is provided
            
            // Initialized the class iterator to Order iterator
            this.iterator = new OrderDequeueIterator(pDequeue);
            break;
    }
}

/**
 *  @function           hasNext
 *  @class              DequeueIterator
 *  @return             Boolean                 True/False, whether the iterator has more elements
 *  @description
 *  <ul>
 *      <li>Checks whether the particular instance of Dequeue Iterator has any more elements to traverse</li>
 *  </ul>
 */
DequeueIterator.prototype.hasNext = function() {
 
    // Return the result from the concerned Order Iterator
    return this.iterator.hasNext();
}

/**
 *  @function           next
 *  @class              DequeueIterator
 *  @return             Object                  Object of the data stored at the next location in Dequeue
 *  @description
 *  <ul>
 *      <li>Returns the next data object stored on Dequeue</li>
 *  </ul>
 */
DequeueIterator.prototype.next = function() {
    
    // Return the result from the concerned Order Iterator
    return this.iterator.next();
}

// Define the three Types of Traversal Orders for trees
define(DequeueIterator, '_ID_TRAVERSE_ORDER',       1);         // Original Order, From Front to End
define(DequeueIterator, '_ID_TRAVERSE_REVERSE',     2);         // Reverse Order, From End to Front

// Add the DequeueIterator class to module.exports
module.exports = DequeueIterator;
