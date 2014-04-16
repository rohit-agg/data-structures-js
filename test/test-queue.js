/**
 *  @file               test-queue.js
 *  @created            2012-10-04
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides the testing module for Queue</li>
 *  </ul>
 */

// Require the required Queue Library
var Queue   = require('./../lib/queue');

/**
 *  @function           testQueue
 *  @description
 *  <ul>
 *      <li>Runs extensive tests on the Queue class</li>
 *      <li>Logs every test, and provides relevant output in case any test failed</li>
 *  </ul>
 */
var testQueue = function() {

    queue = new Queue();
    count = 1;

    console.log("Test " + count + " : Object of Queue class");
    
    if (queue instanceof Queue) {
        
        console.log("Result: Success");
        
    } else {
        
        console.log("Result: Failure");
        console.log("Your Output: " + queue);
        console.log("Expected: " + new Queue());
    }
}

// Add the testQueue function to module.exports
module.exports = testQueue;