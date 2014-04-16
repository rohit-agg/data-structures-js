/**
 *  @file               dequeue.js
 *  @created            2013-10-04
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides the javascript implementation of a Dequeue</li>
 *  </ul>
 */

var equals              = require('./common/equals');
var resize              = require('./common/resize');
var DequeueIterator     = require('./iterator/dequeueIterator');

/**
 *  @constructor
 *  @class              Dequeue
 *  @param              [in] pCompare           Compare function for comparing two values in the dequeue
 *                                              If not provided, system default "===" will be used
 *  @description
 *  <ul>
 *      <li>Initializes the class variables</li>
 *  </ul>
 */
var Dequeue = function(pCompare) {
    
    this.values = Array();
    this.front = 0;
    this.rear = 0;
    this.size = 0;
    this.compare = (typeof pCompare === "undefined") ? equals : pCompare;
}

/**
 *  @function           insertFront
 *  @class              Dequeue
 *  @param              [in] pObject            Object of the data to be inserted into the Dequeue
 *  @param              [in] pCallback          Reference to the Callback function
 *  @description
 *  <ul>
 *      <li>Inserts a provided value onto the front of the dequeue</li>
 *      <li>Increments front to point to the next available position on the dequeue</li>
 *  </ul>
 */
Dequeue.prototype.insertFront = function(pObject, pCallback) {
    
    if (this.front == 0) {
        // If there is no more space in front of the queue
        // Resize the queue to accomodate more space
    
        this.values = resize(this, (this.size / 3));
        this.front = this.size / 3;
        this.rear = this.front + this.size;
    }
    
    // Store the value onto front of dequeue, and decrement the front
    this.values[--this.front] = pObject;
    
    // Increment the size of dequeue
    this.size++;
    
    if (typeof pCallback === "function") {
        // Execute the callback function, if provided
        // Also, execute only when pCallback is a type of function
    
        pCallback();
    }
}

/**
 *  @function           insertRear
 *  @class              Dequeue
 *  @param              [in] pObject            Object of the data to be inserted into the Dequeue
 *  @param              [in] pCallback          Reference to the Callback function
 *  @description
 *  <ul>
 *      <li>Inserts a provided value onto the rear of the dequeue</li>
 *      <li>Increments rear to point to the next available position on the dequeue</li>
 *  </ul>
 */
Dequeue.prototype.insertRear = function(pObject, pCallback) {
    
    // Store the value onto rear of dequeue, and increment the rear
    this.values[this.rear++] = pObject;
    
    // Increment the size of dequeue
    this.size++;
    
    if (typeof pCallback === "function") {
        // Execute the callback function, if provided
        // Also, execute only when pCallback is a type of function
    
        pCallback();
    }
}

/**
 *  @function           removeFront
 *  @class              Dequeue
 *  @return             Object                  Object stored on the front of Dequeue
 *  @description
 *  <ul>
 *      <li>Removes the element from the front of dequeue</li>
 *      <li>Increments front to point to the next available position on the dequeue</li>
 *  </ul>
 */
Dequeue.prototype.removeFront = function() {
    
    if (this.front == this.rear) {
        // If the Dequeue is empty, return "undefined"

        return undefined;
    }
    
    if (this.front > (this.size / 2)) {
        // If there is too much space in front of the queue
        // Front of queue is more than 1/2 of the length of array
        // Resize the array to release the extra space

        this.values = resize(this, (this.size / 4));
        this.front = this.size / 4;
        this.rear = this.front + this.size;
    }
    
    // Store the value on front of the Dequeue into a temporary variable
    topOfDequeue = this.values[this.front];
    
    // Free up the memory used by the Object on top of Dequeue
    // And, increment the front of Dequeue to point to next available Object
    delete this.values[this.front++];
    
    // Decrement the size of dequeue
    this.size--;
    
    // Return the value that was present on top of dequeue
    return topOfDequeue;
}

/**
 *  @function           removeRear
 *  @class              Dequeue
 *  @return             Object                  Object stored on the rear of Dequeue
 *  @description
 *  <ul>
 *      <li>Removes the element from the rear of dequeue</li>
 *      <li>Increments rear to point to the next available position on the dequeue</li>
 *  </ul>
 */
Dequeue.prototype.removeRear = function() {
    
    if (this.front == this.rear) {
        // If the Dequeue is empty, return "undefined"

        return undefined;
    }
    
    if (this.rear < (this.size / 2)) {
        // If there is too much space in the rear of the array
        // Rear of queue is less than 1/2 of the length of array
        // Resize the array to release the extra space
        
        this.values = resize(this, this.front);
    }
    
    // Store the value on rear of the Dequeue into a temporary variable
    topOfDequeue = this.values[this.rear-1];
    
    // Free up the memory used by the Object on top of Dequeue
    // And, increment the front of Dequeue to point to next available Object
    delete this.values[--this.rear];
    
    // Decrement the size of dequeue
    this.size--;
    
    // Return the value that was present on top of dequeue
    return topOfDequeue;
}

/**
 *  @function           isEmpty
 *  @class              Dequeue
 *  @return             Boolean                 True/False, whether the Dequeue is empty or not
 *  @description
 *  <ul>
 *      <li>Checks whether the Dequeue is Empty or not, and returns the same</li>
 *  </ul>
 */
Dequeue.prototype.isEmpty = function() {
    
    // Returns whether the Dequeue is empty or not
    return (this.size == 0);
}

/**
 *  @function           search
 *  @class              Dequeue
 *  @param              [in] pData              Object of the data to be searched in the Dequeue
 *  @return             Boolean                 Tree/False, depending on whether the data exists in the Dequeue
 *  @description
 *  <ul>
 *      <li>Data is searched against the compare function provided in constructor</li>
 *      <li>If compare function is not provided, system default "===" is used</li>
 *  </ul>
 */
Dequeue.prototype.search = function(pData) {
    
    for (var i = this.front; i < this.rear; i++) {
        // Loop through the dequeue from the element at front till the element at rear
        
        if (this.compare(pData, this.values[i]) == 0) {
            // If the value to be searched and current value are same, return true

            return true;
        }
    }
    
    return false;               // Unsuccessful search, Data not found in Dequeue
}

/**
 *  @function           iterator
 *  @class              Dequeue
 *  @param              [in] pOrder             Order in which Iterator should traverse the dequeue
 *  @return             Object                  Object of a Dequeue Iterator
 *  @description
 *  <ul>
 *      <li>Returns a new Dequeue Iterator on the current Instance of the Dequeue</li>
 *  </ul>
 */
Dequeue.prototype.iterator = function(pOrder) {
    
    if (typeof pOrder === "undefined") {
        // If the Order provided is not defined, Set to "In-Order"
    
        pOrder = Dequeue.ID_TRAVERSE_ORDER;
    }
    
    // Return a new Dequeue Iterator with the current instance and provided Order as input
    return new DequeueIterator(this, pOrder);
}

/**
 *  @function           toString
 *  @class              Dequeue
 *  @return             String                  A String providing the details of the Dequeue Object
 *  @description
 *  <ul>
 *      <li>This is an overriden method of the default toString</li>
 *      <li>Provides a String representation of the Dequeue class in the required format</li>
 *  </ul>
 */
Dequeue.prototype.toString = function() {
    
    // Prepare the string to be returned
    returnString  = "[ Size = " + (this.rear - this.front);
    returnString += "; Front = " + this.front;
    returnString += "; Rear = " + this.rear;
    returnString += "; Content = " + this.values;
    returnString += "]";
    
    // Return the thus formed String
    return returnString;
}

// Add the Traversing Orders from DequeueIterator to Dequeue
Dequeue.ID_TRAVERSE_ORDER      = DequeueIterator.ID_TRAVERSE_ORDER;
Dequeue.ID_TRAVERSE_REVERSE    = DequeueIterator.ID_TRAVERSE_REVERSE;

// Add the Dequeue class to module.exports
module.exports = Dequeue;