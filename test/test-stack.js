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
var Common  = require('./test-common');

/**
 *  @function       stackCompare
 *  @param          [in] val1           Value 1 to be compared
 *  @param          [in] val2           Value 2 to be compared
 *  @return         Integer             Value 1 is greater, equal or lesser to Value 2
 *  @description
 *  <ul>
 *      <li>Value 1 < Value 2 => -1</li>
 *      <li>Value 1 = Value 2 => 0</li>
 *      <li>Value 1 > Value 2 => 1</li>
 *  </ul>
 */
function stackCompare(val1, val2) {
    
    if (val1 < val2)        return -1;    
    else if (val1 > val2)   return 1;
    else                    return 0;    
}

/**
 *  @function           testStack
 *  @description
 *  <ul>
 *      <li>Runs extensive tests on the Stack class</li>
 *      <li>Logs every test, and provides relevant output in case any test failed</li>
 *  </ul>
 */
var testStack = function() {

    Common.header("TESTING STACK");
    
    Common.subHeader("Test: Stack API");    
    stackApi();
    
    Common.subHeader("Test: Boundary Conditions");
    stackBoundary();
    
    Common.header("END: TESTING STACK");
}

/**
 *  @function           stackBoundary
 *  @description
 *  <ul>
 *      <li>Validates the boundary conditions of Stack</li>
 *  </ul>
 */
var stackBoundary = function() {
    
    var cases = Array();
    var stack = new Stack();
    
    if (typeof stack.pop() !== "undefined")
        cases.push("Case: pop() on an empty Stack should be undefined");
        
    if (stack.size() !== 0)
        cases.push("Case: size() of an empty Stack should be zero");
        
    if (!stack.isEmpty())
        cases.push("Case: isEmpty() of an empty Stack should be true");
    
    printResult(cases);
}

/**
 *  @function           stackApi
 *  @description
 *  <ul>
 *      <li>Validates the Stack API for correctness</li>
 *  </ul>
 */
var stackApi = function() {
    
    var cases = Array();
    var stack = new Stack();
    
    if (!(new Stack instanceof Stack)) 
        cases.push("Case: Instance of Stack is a Stack");
    
    if (new Object instanceof Stack) 
        cases.push("Case: Instance of Object is not a Stack");
    
    if (typeof stack.push !== "function") 
        cases.push("Case: push is a function");
    
    if (typeof stack.pop !== "function")
        cases.push("Case: pop is a function");
    
    if (typeof stack.isEmpty !== "function") 
        cases.push("Case: isEmpty is a function");
    
    if (typeof stack.size !== "function")
        cases.push("Case: size is a function");
    
    if (typeof stack.search !== "function")
        cases.push("Case: search is a function");
    
    if (typeof stack.iterator !== "function" )
        cases.push("Case: iterator is a function");
    
    if (typeof stack.toString !== "function")
        cases.push("Case: toString is a function");
    
    if (!(stack.values instanceof Array))
        cases.push("Case: values is an array");
    
    if (typeof stack.top !== "number") 
        cases.push("Case: top is a number");
    
    if (typeof stack.compare !== "function") 
        cases.push("Case: compare is a function (Default)");
    
    stack = new Stack(stackCompare);
    
    if (typeof stack.compare !== "function")
        cases.push("Case: compare is a function (User Provided)");
        
    printResult(cases);
}

var printResult = function(pCases) {
    
    if (pCases.length != 0) {
        
        console.log("Following Test Cases failed: ");
        for(count in pCases) {
            
            console.log(pCases[count]);
        }
        
    } else {
        
        console.log("All Test cases passed.");
    }    
}

// Add the testStack function to module.exports
module.exports = testStack;
