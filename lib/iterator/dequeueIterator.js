/**
 *  @file               dequeueIterator.js
 *  @created            2013-10-11
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides an iterator for the Dequeue class</li>
 *  </ul>
 */

/**
 *  @constructor
 *  @class              DequeueIterator
 *  @param              [in] pDequeue           Object of the dequeue whose iterator is being created
 *  @description
 *  <ul>
 *      <li>Initializes the class variables for the Iterator</li>
 *  </ul>
 */
var DequeueIterator = function(pDequeue) {
    
    this.size = pDequeue.rear;
    this.values = pDequeue.values;
    this.current = pDequeue.front;
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
 
    // Returns whether there are any more elements to traverse in the Dequeue
    return this.current != this.size;
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
    
    // If the current pointer location is same as the size of Dequeue, return undefined
    if (this.current == this.size)      return undefined;
    
    // Returns the data object stored on dequeue, and increment the counter
    return this.values[this.current++];
}

// Add the DequeueIterator class to module.exports
module.exports = DequeueIterator;
