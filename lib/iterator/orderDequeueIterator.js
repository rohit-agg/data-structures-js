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
    
    this.end = pDequeue.rear;
    this.values = pDequeue.values;
    this.current = pDequeue.front;
}

/**
 *  @function           hasNext
 *  @class              OrderDequeueIterator
 *  @return             Boolean                 True/False, whether the iterator has more elements
 *  @description
 *  <ul>
 *      <li>Checks whether the particular instance of Dequeue Iterator has any more elements to traverse</li>
 *  </ul>
 */
OrderDequeueIterator.prototype.hasNext = function() {
 
    // Returns whether there are any more elements to traverse in the Dequeue
    return this.current != this.end;
}

/**
 *  @function           next
 *  @class              OrderDequeueIterator
 *  @return             Object                  Object of the data stored at the next location in Dequeue
 *  @description
 *  <ul>
 *      <li>Returns the next data object stored on Dequeue</li>
 *  </ul>
 */
OrderDequeueIterator.prototype.next = function() {
    
    // If the current pointer location is same as the size of Dequeue, return undefined
    if (this.current == this.end)      return undefined;
    
    // Returns the data object stored on dequeue, and increment the counter
    return this.values[this.current++];
}

// Add OrderDequeueIterator to module.exports
module.exports = OrderDequeueIterator;
