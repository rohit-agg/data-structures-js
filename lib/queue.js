/**
 *  @file               queue.js
 *  @created            2013-10-04
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides the javascript implementation of a Queue</li>
 *  </ul>
 */

/**
 *  @function           resize
 *  @param              [in] pObject                Object of the queue against which the function is invoked
 *  @return             Boolean                     Status of the resizing operation (True/False)
 *  @description
 *  <ul>
 *      <li>Resizes the array of the provided pObject</li> 
 *      <li>New array will contain the values from index 0</li>
 *  </ul>
 */
var resize = function(pObject) {
    
    if (!(pObject instanceof Queue)) {
        // If pObject is not an instance of Queue
        
        return false;               // Signal invalid execution of operation
    }
    
    if (pObject.front <= (pObject.rear / 3)) {
        // If the value of front of pObject is less than 1/3rd of rear, no need to resize
        
        return false;               // Signal invalid execution of operation
    }
    
    var newArray = Array();         // New Array for storing the values
    var index, newIndex;            // Indexes for executing array operation
    
    // Run a loop from the front of Queue to rear, and copy all the items to new Array
    for (index = pObject.front, newIndex = 0; index < pObject.rear; index++, newIndex++) {
        
        newArray[newIndex] = pObject.values[index];    
    }

    // Delete the old Array and release the memory associated with it
    delete pObject.values;
    
    pObject.values = newArray;              // Assign the new Array to values of pObject
    pObject.front = 0;                      // Set the front of pObject to 0
    pObject.rear = newIndex;                // Set the rear of pObject to newIndex, ie, end of newArray
    
    return true;                            // Signal successful execution of operation
}

/**
 *  @constructor
 *  @class              Queue
 *  @description
 *  <ul>
 *      <li>Initializes the class variables</li>
 *  </ul>
 */
var Queue = function() {
    
    this.values = Array();
    this.front = 0;
    this.rear = 0;    
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
    
    // Execute the callback function, if provided
    // Also, execute only when pCallback is a type of function
    if (typeof pCallback === "function") pCallback();
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
    
    // If the Queue is empty, return "undefined"
    if (this.front == this.rear)
        return undefined;
    
    resize();
    
    // Store the value on front of the Queue into a temporary variable
    topOfQueue = this.values[this.front];
    
    // Free up the memory used by the Object on top of Queue
    // And, increment the front of Queue to point to next available Object
    delete this.values[this.front++];
    
    // If the value of front of current object is more than 1/3rd of rear
    if (this.front > (this.rear / 3)) {        
        
        resize(this);           // Call the resize function, passing the reference of current object
    }
    
    // Return the value that was present on top of queue
    return topOfQueue;
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
    return this.front == this.rear;
}

/**
 *  @function           size
 *  @class              Queue
 *  @return             Integer                 An Integer representing the size of queue
 *  @description
 *  <ul>
 *      <li>Returns the size of the queue, ie number of elements in Queue</li>
 *  </ul>
 */
Queue.prototype.size = function() {

    // Returns the size of queue, difference between the rear and front
    return this.rear - this.front;
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