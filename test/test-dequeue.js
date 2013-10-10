/**
 *  @file               test-dequeue.js
 *  @created            2012-10-04
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides the testing module for Dequeue</li>
 *  </ul>
 */

// Require the required Queue Library
var Dequeue   = require('./../lib/dequeue');

/**
 *  @function           testDequeue
 *  @description
 *  <ul>
 *      <li>Runs extensive tests on the Dequeue class</li>
 *      <li>Logs every test, and provides relevant output in case any test failed</li>
 *  </ul>
 */
var testDequeue = function() {

    dequeue = new Dequeue();
    count = 1;

    console.log("Test " + count + " : Object of Dequeue class");
    
    if (dequeue instanceof Dequeue) {
        
        console.log("Result: Success");
        
    } else {
        
        console.log("Result: Failure");
        console.log("Your Output: " + dequeue);
        console.log("Expected: " + new Dequeue());
    }
    console.log(dequeue.toString());
}

// Add the testDequeue function to module.exports
module.exports = testDequeue;