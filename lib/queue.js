/**
 *  @file               queue.js
 *  @created            2013-10-04
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides the javascript implementation of a Queue</li>
 *  </ul>
 */

// Include required libraries
var equals          = require('./common/equals');
var resize          = require('./common/resize');
var QueueIterator   = require('./iterator/queueIterator');

/**
 *  @constructor
 *  @class              Queue
 *  @param              [in] pCompare           Compare function for comparing two values in the queue
 *                                              If not provided, system default "===" will be used
 *  @description
 *  <ul>
 *      <li>Initializes the class variables</li>
 *  </ul>
 */
var Queue = function(pCompare) {
    
    this.values = Array();
    this.front = 0;
    this.rear = 0;
    this.size = 0;
    this.compare = (typeof pCompare === "function") ? pCompare : equals;
}

/**
 *  @function           enqueue
 *  @class              Queue
 *  @param              [in] pObject            Object of the data to be inserted into the Queue
 *  @param              [in] pCallback          Reference to the Callback function
 *  @description
 *  <ul>
 *      <li>Enqueues a provided value onto the queue</li>
 *      <li>Increments rear to point to the next available position on the queue</li>
 *  </ul>
 */
Queue.prototype.enqueue = function(pObject, pCallback) {
    
    // Store the value onto rear of queue, and increment the rear
    this.values[this.rear++] = pObject;
    
    // Increment the size of the queue
    this.size++;
    
    if (typeof pCallback === "function") {
        // Execute the callback function, if provided
        // Also, execute only when pCallback is a type of function

        pCallback();
    }
}

/**
 *  @function           insert
 *  @class              Queue
 *  @param              [in] pObject            Object of the data to be inserted into the Queue
 *  @param              [in] pCallback          Reference to the Callback function
 *  @description
 *  <ul>
 *      <li>Synonym to enqueue, calls the same to perform the necessary functionality</li> 
 *  </ul>
 */
Queue.prototype.insert = function(pObject, pCallback) {
    
    // Calls the enqueue function to perform the required task
    this.enqueue(pObject, pCallback);
}

/**
 *  @function           dequeue
 *  @class              Queue
 *  @return             Object                  Object stored on the front of Queue
 *  @description
 *  <ul>
 *      <li>Dequeues the element from the front of queue</li>
 *      <li>Increments front to point to the next available position on the queue</li>
 *  </ul>
 */
Queue.prototype.dequeue = function() {
    
    if (this.front == this.rear) {
        // If the Queue is empty, return "undefined"

        return undefined;
    }
    
    // Store the value on front of the Queue into a temporary variable
    var topOfQueue = this.values[this.front];
    
    // Free up the memory used by the Object on top of Queue
    // And, increment the front of Queue to point to next available Object
    delete this.values[this.front++];
    
    // Decrement the size of the queue
    this.size--;

    if (this.front > (this.rear / 3)) {
        // If the value of front of current object is more than 1/3rd of rear
        // Call the resize function, passing the reference of current object

        this.values = resize(this.values, 0);
        this.front = 0;
        this.rear = this.size;
    }
    
    // Return the value that was present on top of queue
    return topOfQueue;
}

/**
 *  @function           remove
 *  @class              Queue
 *  @return             Object                  Object stored on the front of Queue
 *  @description
 *  <ul>
 *      <li>Synonym to dequeue, calls the same to perform the necessary functionality</li> 
 *  </ul>
 */
Queue.prototype.remove = function() {
    
    // Calls the dequeue function to perform the desired task
    return this.dequeue();
}

/**
 *  @function           isEmpty
 *  @class              Queue
 *  @return             Boolean                 True/False, whether the Queue is empty or not
 *  @description
 *  <ul>
 *      <li>Checks whether the Queue is Empty or not, and returns the same</li>
 *  </ul>
 */
Queue.prototype.isEmpty = function() {
    
    // Returns whether the Queue is empty or not
    return (this.size == 0);
}

/**
 *  @function           search
 *  @class              Queue
 *  @param              [in] pData              Object of the data to be searched in the Queue
 *  @return             Boolean                 Tree/False, depending on whether the data exists in the Queue
 *  @description
 *  <ul>
 *      <li>Data is searched against the compare function provided in constructor</li>
 *      <li>If compare function is not provided, system default "===" is used</li>
 *  </ul>
 */
Queue.prototype.search = function(pData) {
    
    for (var i = this.front; i < this.rear; i++) {
        // Loop through the queue from the element at front till element at rear
        
        if (this.compare(pData, this.values[i]) === 0) {
            // If the value to be searched and current value are same, return true
            
            return true;
        }
    }
    
    return false;               // Unsuccessful search, Data not found in Queue
}

/**
 *  @function           iterator
 *  @class              Queue
 *  @return             Object                  Object of a Queue Iterator
 *  @description
 *  <ul>
 *      <li>Returns a new Queue Iterator on the current Instance of the Queue</li>
 *  </ul>
 */
Queue.prototype.iterator = function() {
    
    // Return a new Queue Iterator with the current instance as Input
    return new QueueIterator(this);
}

/**
 *  @function           toString
 *  @class              Queue
 *  @return             String                  A String providing the details of the Queue Object
 *  @description
 *  <ul>
 *      <li>This is an overriden method of the default toString</li>
 *      <li>Provides a String representation of the Queue class in the required format</li>
 *  </ul>
 */
Queue.prototype.toString = function() {
    
    // Prepare the string to be returned
    returnString  = "[ Size = " + (this.rear - this.front);
    returnString += "; Front = " + this.front;
    returnString += "; Rear = " + this.rear;
    returnString += "; Content = " + this.values;
    returnString += "]";
    
    // Return the thus formed String
    return returnString;
}

// Add the Queue class to module.exports
module.exports = Queue;