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
var Stack           = require('./../lib/stack');
var StackIterator   = require('./../lib/iterator/stackIterator');
var equals          = require('./../lib/common/equals');
var Common          = require('./test-common');

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
    
    if (val1 < val2) { return -1; }
    else if (val1 > val2) { return 1; }
    else { return 0; }
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
    
    Common.testHeader("Stack API");    
    stackApi();
    
    Common.testHeader("Boundary Conditions");
    stackBoundary();

    Common.testHeader("push/insert and pop/remove operations");
    stackPushPopCheck();

    Common.testHeader("Other functions");
    stackOtherFuncCheck();
    
    Common.header("END: TESTING STACK");
}

/**
 *  @function           stackOtherFuncCheck
 *  @description
 *  <ul>
 *      <li>Check all the functions except push/insert and pop/remove for validity</li>
 *  </ul>
 */
var stackOtherFuncCheck = function() {

    var cases = Array();
    var stack = new Stack();
    var i, searchLimit = 25, searchEle;

    Common.testCase("Push/Insert an element and check isEmpty");
    stack.push(1);
    if (stack.isEmpty()) { cases.push("Case: Stack after one push operation should not be empty."); }

    Common.testCase("Pop/Remove the previously inserted element and check isEmpty");
    stack.pop();
    if (!stack.isEmpty()) { cases.push("Case: Stack after one push and one pop operation should be empty."); }

    Common.testCase("Insert 1-" + (searchLimit * 4) + " into Stack and search for " + searchLimit + " random values in the range");
    for (i = 1; i <= (searchLimit * 4); i++) { stack.push(i); }
    for (i = 1; i <= searchLimit; i++) {
        searchEle = parseInt(Math.random() * searchLimit * 4) + 1;
        if (!stack.search(searchEle)) {
            cases.push("Search for element in range should be successful. Searched for = " +  searchEle);
        }
    }

    Common.testCase("Search for " + searchLimit + " random values out of the range");
    for (i = 1; i < searchLimit; i++) {
        searchEle = parseInt(Math.random() * searchLimit * 4) + (searchLimit * 4) + 1;
        if (stack.search(searchEle)) {
            cases.push("Search for element out of range should not be successful. Searched for = " +  searchEle);
        }   
    }

    printResult(cases);
    delete stack;
}

/**
 *  @function           stackPushPopCheck
 *  @description
 *  <ul>
 *      <li>Checks the push and pop operations</li>
 *  </ul>
 */
var stackPushPopCheck = function() {

    var cases = Array();
    var valueLimit = 99999999, insertLimit = 1000, testLimit = 100;
    var stack = new Stack();
    var i, currInsertLimit;

    Common.testCase("Perform 'push' and 'pop' operation random times for " + testLimit + " times");
    for (i = 0; i < testLimit; i++) {
        currInsertLimit = parseInt(Math.random() * insertLimit) + 1;
        for (j = 0; j < currInsertLimit; j++) { stack.push(Math.random() * valueLimit); }
        if (stack.top !== currInsertLimit) { cases.push("Case: Performed 'push' operation " + currInsertLimit + " times(s). Top = " + stack.top); }
        for (i = 0; i < currInsertLimit; i++) { stack.pop(); }
        if (stack.top !== 0) { cases.push("Case: Performed 'pop' operation " + insertLimit + " time(s). Top = " + stack.top) }
    }

    Common.testCase("Perform 'insert' and 'remove' operation random times for " + testLimit + " times");
    for (i = 0; i < testLimit; i++) {
        currInsertLimit = parseInt(Math.random() * insertLimit) + 1;
        for (j = 0; j < currInsertLimit; j++) { stack.insert(Math.random() * valueLimit); }
        if (stack.top !== currInsertLimit) { cases.push("Case: Performed 'insert' operation " + currInsertLimit + " times(s). Top = " + stack.top); }
        for (i = 0; i < currInsertLimit; i++) { stack.remove(); }
        if (stack.top !== 0) { cases.push("Case: Performed 'remove' operation " + insertLimit + " time(s). Top = " + stack.top) }
    }

    printResult(cases);
    delete stack;
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
    
    if (typeof stack.pop() !== "undefined") { cases.push("Case: 'pop()' on an empty Stack should be undefined"); }
    if (stack.top !== 0) { cases.push("Case: 'top' of an empty Stack should be zero"); }
    if (!stack.isEmpty()) { cases.push("Case: 'isEmpty()' of an empty Stack should be true"); }
    if (stack.iterator().hasNext()) { cases.push("Case: 'hasNext()' of an empty Stack iterator should be false"); }
    
    printResult(cases);
    delete stack;
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
    var stackIter = stack.iterator();
    
    if (!(new Stack instanceof Stack)) { cases.push("Case: Instance of Stack is a Stack"); }
    if (new Object instanceof Stack) { cases.push("Case: Instance of Object is not a Stack"); }
    if (typeof stack.push !== "function") { cases.push("Case: 'push' is a function"); }
    if (typeof stack.insert !== "function") { cases.push("Case: 'insert' is a function"); }
    if (typeof stack.pop !== "function") { cases.push("Case: 'pop' is a function"); }
    if (typeof stack.remove !== "function") { cases.push("Case: 'remove' is a function"); }
    if (typeof stack.isEmpty !== "function") { cases.push("Case: 'isEmpty' is a function"); }
    if (typeof stack.search !== "function") { cases.push("Case: 'search' is a function"); }
    if (typeof stack.iterator !== "function" ) { cases.push("Case: 'iterator' is a function"); }
    if (stackIter instanceof StackIterator) { cases.push("Case: 'iterator' should not return an instance of StackIterator"); }
    if (!(stackIter instanceof Object)) { cases.push("Case: 'iterator' should return an instance of Object"); }
    if (typeof stackIter.next !== "function") { cases.push("Case: Object returned from iterator doesn't have 'next' as function"); }
    if (typeof stackIter.hasNext !== "function") { cases.push("Case: Object returned from iterator doesn't have 'hasNext' as function"); }
    if (typeof stackIter.size !== "undefined" || typeof stackIter.value !== "undefined" || typeof stackIter.current !== "undefined") {
        cases.push("Case: Variables inside Object returned from iterator shouldn't be public and readable outside");
    }
    if (typeof stack.toString !== "function") { cases.push("Case: 'toString' is a function"); }
    if (!(stack.values instanceof Array)) { cases.push("Case: 'values' is an array"); }
    if (typeof stack.top !== "number") { cases.push("Case: 'top' is a number"); }
    if (typeof stack.compare !== "function") { cases.push("Case: 'compare' is a function (Default)"); }
    if (stack.compare !== equals) { cases.push("Case: Default 'compare' function should be 'equals' provided in 'lib/common'"); }

    delete stack;
    stack = new Stack(stackCompare);
    
    if (typeof stack.compare !== "function") { cases.push("Case: 'compare' is a function (User Provided)"); }
        
    printResult(cases);
    delete stack;
}

var printResult = function(pCases) {
    
    if (pCases.length != 0) {
        console.log("\nFollowing Test Cases failed: ");
        for(count in pCases) {
            console.log(pCases[count]);
        }
    } else {
        console.log("\nAll Test cases passed.");
    }    
}

// Add the testStack function to module.exports
module.exports = testStack;