/**
 *  @file               stack.js
 *  @created            2013-09-29
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides the javascript implementation of a Stack</li>
 *  </ul>
 */

/**
 *  @constructor
 *  @class              Stack
 *  @description
 *  <ul>
 *      <li>Initializes the class variables</li>
 *  </ul>
 */
var Stack = function() {
    
    this.values = Array();
    this.top = 0;
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
    if (typeof pCallback === "function") pCallback();
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
