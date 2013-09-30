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
var Log     = require('./log-test');

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

    var test = {};
    
    test['name']        = "Object of Stack class";
    test['expected']    = Stack;
    test['result']      = stack;    
    
    Log(test);
}

// Add the testStack function to module.exports
module.exports = testStack;