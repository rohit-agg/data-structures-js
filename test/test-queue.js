/**
 *  @file               test-queue.js
 *  @created            2014-04-24
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides the testing module for Queue</li>
 *  </ul>
 */

// Require the required Queue Library
var Queue           = require('./../lib/queue');
var QueueIterator   = require('./../lib/iterator/queueIterator');
var equals          = require('./../lib/common/equals');
var Common          = require('./test-common');

/**
 *  @function       queueCompare
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
function queueCompare(val1, val2) {
    
    if (val1 < val2) { return -1; }
    else if (val1 > val2) { return 1; }
    else { return 0; }
}

/**
 *  @function           testQueue
 *  @description
 *  <ul>
 *      <li>Runs extensive tests on the Queue class</li>
 *      <li>Logs every test, and provides relevant output in case any test failed</li>
 *  </ul>
 */
var testQueue = function() {

    Common.header("TESTING QUEUE");
    
    Common.testHeader("Queue API");    
    queueApi();
    
    Common.testHeader("Boundary Conditions");
    queueBoundary();

    Common.testHeader("enqueue/insert and dequeue/remove operations");
    queueEnDequeueCheck();

    Common.testHeader("Other functions");
    queueOtherFuncCheck();
    
    Common.header("END: TESTING QUEUE");
}

/**
 *  @function           queueOtherFuncCheck
 *  @description
 *  <ul>
 *      <li>Check all the functions except enqueue/insert and dequeue/remove for validity</li>
 *  </ul>
 */
var queueOtherFuncCheck = function() {

    var cases = Array();
    var queue = new Queue();
    var i, searchLimit = 25, searchEle;

    Common.testCase("Enqueue/Insert an element and check isEmpty");
    queue.enqueue(1);
    if (queue.isEmpty()) { cases.push("Case: Queue after one enqueue operation should not be empty."); }

    Common.testCase("Dequeue/Remove the previously inserted element and check isEmpty");
    queue.dequeue();
    if (!queue.isEmpty()) { cases.push("Case: Queue after one enqueue and one dequeue operation should be empty."); }

    Common.testCase("Insert 1-" + (searchLimit * 4) + " into Queue and search for " + searchLimit + " random values in the range");
    for (i = 1; i <= (searchLimit * 4); i++) { queue.enqueue(i); }
    for (i = 1; i <= searchLimit; i++) {
        searchEle = parseInt(Math.random() * searchLimit * 4) + 1;
        if (!queue.search(searchEle)) {
            cases.push("Search for element in range should be successful. Searched for = " +  searchEle);
        }
    }

    Common.testCase("Search for " + searchLimit + " random values out of the range");
    for (i = 1; i < searchLimit; i++) {
        searchEle = parseInt(Math.random() * searchLimit * 4) + (searchLimit * 4) + 1;
        if (queue.search(searchEle)) {
            cases.push("Search for element out of range should not be successful. Searched for = " +  searchEle);
        }   
    }

    printResult(cases);
    delete queue;
}

/**
 *  @function           queueEnDequeueCheck
 *  @description
 *  <ul>
 *      <li>Checks the enqueue and dequeue operations</li>
 *  </ul>
 */
var queueEnDequeueCheck = function() {

    var cases = Array();
    var valueLimit = 99999999, insertLimit = 1000, testLimit = 100;
    var queue = new Queue();
    var i, currInsertLimit;

    Common.testCase("Perform 'enqueue' and 'dequeue' operation random times for " + testLimit + " times");
    for (i = 0; i < testLimit; i++) {
        currInsertLimit = parseInt(Math.random() * insertLimit) + 1;
        for (j = 0; j < currInsertLimit; j++) { queue.enqueue(Math.random() * valueLimit); }
        if (queue.size !== currInsertLimit) { cases.push("Case: Performed 'enqueue' operation " + currInsertLimit + " times(s). Size = " + queue.size); }
        if (queue.rear !== currInsertLimit) { cases.push("Case: Performed 'enqueue' operation " + currInsertLimit + " times(s). Rear = " + queue.rear); }
        if (queue.front !== 0) { cases.push("Case: Performed 'enqueue' operation " + currInsertLimit + " times(s). Front = " + queue.front); }
        for (i = 0; i < currInsertLimit; i++) { queue.dequeue(); }
        if (queue.size !== 0) { cases.push("Case: Performed 'dequeue' operation " + currInsertLimit + " times(s). Size = " + queue.size); }
        if (queue.rear !== 0) { cases.push("Case: Performed 'dequeue' operation " + currInsertLimit + " times(s). Rear = " + queue.rear); }
        if (queue.front !== 0) { cases.push("Case: Performed 'dequeue' operation " + currInsertLimit + " times(s). Front = " + queue.front); }
    }

    Common.testCase("Perform 'insert' and 'remove' operation random times for " + testLimit + " times");
    for (i = 0; i < testLimit; i++) {
        
        currInsertLimit = parseInt(Math.random() * insertLimit) + 1;
        for (j = 0; j < currInsertLimit; j++) { queue.insert(Math.random() * valueLimit); }
        if (queue.size !== currInsertLimit) { cases.push("Case: Performed 'insert' operation " + currInsertLimit + " times(s). Size = " + queue.size); }
        if (queue.rear !== currInsertLimit) { cases.push("Case: Performed 'insert' operation " + currInsertLimit + " times(s). Rear = " + queue.rear); }
        if (queue.front !== 0) { cases.push("Case: Performed 'insert' operation " + currInsertLimit + " times(s). Front = " + queue.front); }
        for (i = 0; i < currInsertLimit; i++) { queue.remove(); }
        if (queue.size !== 0) { cases.push("Case: Performed 'dequeue' operation " + currInsertLimit + " times(s). Size = " + queue.size); }
        if (queue.rear !== 0) { cases.push("Case: Performed 'dequeue' operation " + currInsertLimit + " times(s). Rear = " + queue.rear); }
        if (queue.front !== 0) { cases.push("Case: Performed 'dequeue' operation " + currInsertLimit + " times(s). Front = " + queue.front); }
    }

    printResult(cases);
    delete queue;
}

/**
 *  @function           queueBoundary
 *  @description
 *  <ul>
 *      <li>Validates the boundary conditions of Queue</li>
 *  </ul>
 */
var queueBoundary = function() {
    
    var cases = Array();
    var queue = new Queue();
    
    if (typeof queue.dequeue() !== "undefined") { cases.push("Case: 'dequeue()' on an empty Queue should be undefined"); }
    if (typeof queue.remove() !== "undefined") { cases.push("Case: 'remove()' on an empty Queue should be undefined"); }
    if (queue.front !== 0) { cases.push("Case: 'front' of an empty Queue should be zero"); }
    if (queue.rear !== 0) { cases.push("Case: 'rear' of an empty Queue should be zero"); }
    if (queue.size !== 0) { cases.push("Case: 'size' of an empty Queue should be zero"); }
    if (!queue.isEmpty()) { cases.push("Case: 'isEmpty()' of an empty Queue should be true"); }
    if (queue.iterator().hasNext()) { cases.push("Case: 'hasNext()' of an empty Queue iterator should be false"); }
    
    printResult(cases);
    delete queue;
}

/**
 *  @function           queueApi
 *  @description
 *  <ul>
 *      <li>Validates the Queue API for correctness</li>
 *  </ul>
 */
var queueApi = function() {
    
    var cases = Array();
    var queue = new Queue();
    var queueIter = queue.iterator();
    
    if (!(new Queue instanceof Queue)) { cases.push("Case: Instance of Queue is a Queue"); }
    if (new Object instanceof Queue) { cases.push("Case: Instance of Object is not a Queue"); }
    if (typeof queue.enqueue !== "function") { cases.push("Case: 'enqueue' is a function"); }
    if (typeof queue.insert !== "function") { cases.push("Case: 'insert' is a function"); }
    if (typeof queue.dequeue !== "function") { cases.push("Case: 'dequeue' is a function"); }
    if (typeof queue.remove !== "function") { cases.push("Case: 'remove' is a function"); }
    if (typeof queue.isEmpty !== "function") { cases.push("Case: 'isEmpty' is a function"); }
    if (typeof queue.search !== "function") { cases.push("Case: 'search' is a function"); }
    if (typeof queue.iterator !== "function" ) { cases.push("Case: 'iterator' is a function"); }
    if (queueIter instanceof QueueIterator) { cases.push("Case: 'iterator' should not return an instance of QueueIterator"); }
    if (!(queueIter instanceof Object)) { cases.push("Case: 'iterator' should return an instance of Object"); }
    if (typeof queueIter.next !== "function") { cases.push("Case: Object returned from iterator doesn't have 'next' as function"); }
    if (typeof queueIter.hasNext !== "function") { cases.push("Case: Object returned from iterator doesn't have 'hasNext' as function"); }
    if (typeof queueIter.size !== "undefined" || typeof queueIter.values !== "undefined" || typeof queueIter.current !== "undefined") {
        cases.push("Case: Variables inside Object returned from iterator shouldn't be public and readable outside");
    }
    if (typeof queue.toString !== "function") { cases.push("Case: 'toString' is a function"); }
    if (!(queue.values instanceof Array)) { cases.push("Case: 'values' is an array"); }
    if (typeof queue.front !== "number") { cases.push("Case: 'front' is a number"); }
    if (typeof queue.rear !== "number") { cases.push("Case: 'rear' is a number"); }
    if (typeof queue.size !== "number") { cases.push("Case: 'size' is a number"); }
    if (typeof queue.compare !== "function") { cases.push("Case: 'compare' is a function (Default)"); }
    if (queue.compare !== equals) { cases.push("Case: Default 'compare' function should be 'equals' provided in 'lib/common'"); }

    delete queue;
    queue = new Queue(queueCompare);
    
    if (typeof queue.compare !== "function") { cases.push("Case: 'compare' is a function (User Provided)"); }
        
    printResult(cases);
    delete queue;
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

// Add the testQueue function to module.exports
module.exports = testQueue;