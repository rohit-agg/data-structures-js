/**
 *  @file               stack.js
 *  @created            2013-09-29
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides the javascript implementation of a Stack</li> 
 *  </ul>
 */

// Include the required libraries
var equals          = require('./common/equals');
var StackIterator   = require('./iterator/stackIterator');

/**
 *  @constructor
 *  @class              Stack
 *  @param              [in] pCompare           Compare function for comparing two values in the stack
 *                                              If not provided, system default "===" will be used
 *  @description
 *  <ul>
 *      <li>Initializes the class variables</li>
 *  </ul>
 */
var Stack = function(pCompare) {
    
    this.values = Array();
    this.top = 0;    
    this.compare = (typeof pCompare === "undefined") ? equals : pCompare;    
}

/**
 *  @function           push
 *  @class              Stack
 *  @param              [in] pObject            Object of the data to be inserted into the Stack
 *  @param              [in] pCallback          Reference to the Callback function
 *  @description
 *  <ul>
 *      <li>Pushes a provided value onto the stack</li>
 *      <li>Increments top to point to the next available position on the stack</li>
 *  </ul>
 */
Stack.prototype.push = function(pObject, pCallback) {
    
    // Store the value onto top of stack, and increment the top
    this.values[this.top++] = pObject;
    
    // Execute the callback function, if provided
    // Also, execute only when pCallback is a type of function
    if (typeof pCallback === "function")    pCallback();
}

/**
 *  @function           pop
 *  @class              Stack
 *  @return             Object                  Object stored on the top of Stack
 *  @description
 *  <ul>
 *      <li>Pops the element from the top of stack</li>
 *      <li>Decrements top to point to the next available position on the stack</li>
 *  </ul>
 */
Stack.prototype.pop = function() {
    
    // If the Stack is empty, return "undefined"
    if (this.top == 0)
        return undefined;
    
    // Store the value on top of the Stack into a temporary variable
    topOfStack = this.values[this.top-1];
    
    // Free up the memory used by the Object on top of Stack
    // And, decrement the top of Stack to point to next available Object
    delete this.values[--this.top];
    
    // Return the value that was present on top of stack
    return topOfStack;
}

/**
 *  @function           isEmpty
 *  @class              Stack
 *  @return             Boolean                 True/False, whether the Stack is empty or not
 *  @description
 *  <ul>
 *      <li>Checks whether the Stack is Empty or not, and returns the same</li>
 *  </ul>
 */
Stack.prototype.isEmpty = function() {
    
    // Returns whether the Stack is empty or not
    return this.top == 0;
}

/**
 *  @function           size
 *  @class              Stack
 *  @return             Integer                 An Integer representing the size of stack
 *  @description
 *  <ul>
 *      <li>Returns the size of the stack, ie number of elements in Stack</li>
 *  </ul>
 */
Stack.prototype.size = function() {
    
    // Returns the size of stack, same as top
    return this.top;
}

/**
 *  @function           search
 *  @class              Stack
 *  @param              [in] pData              Object of the data to be searched in the Stack
 *  @return             Boolean                 Tree/False, depending on whether the data exists in the Stack
 *  @description
 *  <ul>
 *      <li>Data is searched against the compare function provided in constructor</li>
 *      <li>If compare function is not provided, system default "===" is used</li>
 *  </ul>
 */
Stack.prototype.search = function(pData) {
    
    for (var i = 0; i < this.top; i++) {
        // Loop through the stack from the first element till top
        
        // If the value to be searched and current value are same, return true
        if (this.compare(pData, this.values[i]) == 0)       return true;
    }
    
    return false;               // Unsuccessful search, Data not found in Stack
}

/**
 *  @function           iterator
 *  @class              Stack
 *  @return             Object                  Object of a Stack Iterator
 *  @description
 *  <ul>
 *      <li>Returns a new Stack Iterator on the current Instance of the Stack</li>
 *  </ul>
 */
Stack.prototype.iterator = function() {
    
    // Return a new Stack Iterator with the current instance as input
    return new StackIterator(this);
}

/**
 *  @function           toString
 *  @class              Stack
 *  @return             String                  A String providing the details of the Stack Object
 *  @description
 *  <ul>
 *      <li>This is an overriden method of the default toString</li>
 *      <li>Provides a String representation of the Stack class in the required format</li>
 *  </ul>
 */
Stack.prototype.toString = function() {
    
    // Prepare the string to be returned
    returnString  = "[ Size = " + this.top;
    returnString += "; Top = " + this.top;
    returnString += "; Content = " + this.values;
    returnString += "]";
    
    // Return the thus formed String
    return returnString;
}

// Add the Stack class to module.exports
module.exports = Stack;
