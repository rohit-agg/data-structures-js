/**
 *  @file               test-stack.js
 *  @created            2012-09-29
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides the testing module for Stack</li>
 *  </ul>
 */

// Require the required Stack Library
var Stack   = require('./../lib/stack');

/**
 *  @function           testStack
 *  @description
 *  <ul>
 *      <li>Runs extensive tests on the Stack class</li>
 *      <li>Logs every test, and provides relevant output in case any test failed</li>
 *  </ul>
 */
var testStack = function() {

    stack = new Stack();
    count = 1;

    console.log("Test " + count + " : Object of Stack class");
    
    if (stack instanceof Stack) {
        
        console.log("Result: Success");
        
    } else {
        
        console.log("Result: Failure");
        console.log("Your Output: " + stack);
        console.log("Expected: " + new Stack());
    }
    console.log(stack.toString());
}

// Add the testStack function to module.exports
module.exports = testStack;