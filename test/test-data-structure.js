/**
 *  @file               test-data-structure
 *  @created            2013-09-29
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Calls the appropriate functions for running extensive tests on the concerned data structure</li>
 *  </ul>
 */

// Include the test libraries for all the data structures
var testStack           = require('./test-stack');
var testQueue           = require('./test-queue');
var testDequeue         = require('./test-dequeue');
var testBinaryTree      = require('./test-binary-tree');

// Run the test functions for the included data structures
testStack();
//testQueue();
//testDequeue();