/**
 *  @file               dequeue.js
 *  @created            2013-10-04
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides the javascript implementation of a Dequeue</li>
 *  </ul>
 */

/**
 *  @function           resize
 *  @param              [in] pObject                Object of the dequeue against which the function is invoked
 *  @param              [in] pStart                 Starting index for the new Array
 *  @return             Boolean                     Status of the resizing operation (True/False)
 *  @description
 *  <ul>
 *      <li>Resizes the array of the provided pObject</li> 
 *      <li>New array will contain the values from index pStart</li>
 *  </ul>
 */
var resize = function(pObject, pStart) {
    
    if (!(pObject instanceof Dequeue)) {
        // If pObject is not an instance of Dequeue
        
        return false;               // Signal invalid execution of operation        
    }
    
    if (pStart < 0) {
        // If the value provided for pStart is invalid
        
        return false;               // Signal invalid execution of operation
    }
    
    var newArray = Array();             // New Array for storing the values
    var index, newIndex;                // Indexes for executing array operation
    
    // Run a loop from the front of Queue to rear, and copy all the items to new Array
    for (index = pObject.front, newIndex = pStart; index < pObject.rear; index++, newIndex++) {
        
        newArray[newIndex] = pObject.values[index];
    }
    
    // Delete the old Array and release the memory associated with it
    delete pObject.values;
    
    pObject.values = newArray;          // Assign the new Array to values of pObject
    pObject.front = pStart;             // Set the front of pObject to 0
    pObject.rear = newIndex;            // Set the rear of pObject to newIndex, ie, end of newArray
        
    return true;                        // Signal successful execution of operation
}

/**
 *  @constructor
 *  @class              Dequeue
 *  @description
 *  <ul>
 *      <li>Initializes the class variables</li>
 *  </ul>
 */
var Dequeue = function() {
    
    this.values = Array();
    this.front = 0;
    this.rear = 0;    
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
        resize(this, (this.values.length / 3));
    }
    
    // Store the value onto front of dequeue, and decrement the front
    this.values[--this.front] = pObject;
    
    // Execute the callback function, if provided
    // Also, execute only when pCallback is a type of function
    if (typeof pCallback === "function") pCallback();
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
    
    // Execute the callback function, if provided
    // Also, execute only when pCallback is a type of function
    if (typeof pCallback === "function") pCallback();
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
    
    // If the Dequeue is empty, return "undefined"
    if (this.front == this.rear)
        return undefined;
    
    if (this.front > (this.values.length / 2)) {
        // If there is too much space in front of the queue
        // Front of queue is more than 1/2 of the length of array
        
        // Resize the array to release the extra space
        resize(this, (this.values.length / 4));
    }
    
    // Store the value on front of the Dequeue into a temporary variable
    topOfDequeue = this.values[this.front];
    
    // Free up the memory used by the Object on top of Dequeue
    // And, increment the front of Dequeue to point to next available Object
    delete this.values[this.front++];
    
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
    
    // If the Dequeue is empty, return "undefined"
    if (this.front == this.rear)
        return undefined;
    
    if (this.rear < (this.values.length / 2)) {
        // If there is too much space in the rear of the array
        // Rear of queue is less than 1/2 of the length of array
        
        // Resize the array to release the extra space
        resize(this, this.front);
    }
    
    // Store the value on rear of the Dequeue into a temporary variable
    topOfDequeue = this.values[this.rear-1];
    
    // Free up the memory used by the Object on top of Dequeue
    // And, increment the front of Dequeue to point to next available Object
    delete this.values[--this.rear];
    
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
    return this.front == this.rear;
}

/**
 *  @function           size
 *  @class              Dequeue
 *  @return             Integer                 An Integer representing the size of dequeue
 *  @description
 *  <ul>
 *      <li>Returns the size of the dequeue, ie number of elements in Dequeue</li>
 *  </ul>
 */
Dequeue.prototype.size = function() {

    // Returns the size of dequeue, difference between the rear and front
    return this.rear - this.front;
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

// Add the Dequeue class to module.exports
module.exports = Dequeue;
