/**
 *  @file               stackIterator.js
 *  @created            2013-10-11
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides an iterator for the Stack class</li>
 *  </ul>
 */

/**
 *  @constructor
 *  @class              StackIterator
 *  @param              [in] pStack             Object of the stack whose iterator is being created
 *  @description
 *  <ul>
 *      <li>Initializes the class variables for the Iterator</li>
 *  </ul>
 */
var StackIterator = function(pStack) {
    
    var size = pStack.top;
    var values = pStack.values;
    var current = 0;

    StackIterator.prototype = {

        /**
         *  @function           hasNext
         *  @return             Boolean                 True/False, whether the iterator has more elements
         *  @description
         *  <ul>
         *      <li>Checks whether the particular instance of Stack Iterator has any more elements to traverse</li>
         *  </ul>
         */
        hasNext: function() {
     
            // Returns whether there are any more elements to traverse in the Stack
            return current != size;
        },

        /**
         *  @function           next
         *  @return             Object                  Object of the data stored at the next location in Stack
         *  @description
         *  <ul>
         *      <li>Returns the next data object stored on Stack</li>
         *  </ul>
         */
        next: function() {
            
            if (current == size) {
                // If the current pointer location is same as the size of Stack, return undefined

                return undefined;
            }
            
            // Returns the data object stored on stack, and increment the counter
            return values[current++];
        }
    }
}

// Add the StackIterator class to module.exports
module.exports = StackIterator;