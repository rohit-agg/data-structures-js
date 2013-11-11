/**
 *  @file               exchange.js
 *  @created            2013-11-11
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides functionality of exchanging two values in a list</li>
 *  </ul>
 */

/**
 *  @function       exchange
 *  @param          [in] pObject    Object in which the exchange is to be performed
 *  @param          [in] pIndex1    Index 1 to be exchanged
 *  @param          [in] pIndex2    Index 2 to be exchanged
 *  @description
 *  <ul>
 *      <li>Provides the functionality of exchanging values on pIndex1 and pIndex2 in pObject</li>
 *  </ul>
 */
var exchange = function(pObject, pIndex1, pIndex2) {
    
    var tempValue;          // Variable for storing the value at pIndex1
    
    if (typeof pObject === "Array") {
        // If the provided list of values is an Array
        
        // Swap the values at the two indexes
        tempValue           = pObject[pIndex1];
        pObject[pIndex1]    = pObject[pIndex2];
        pObject[pIndex2]    = tempValue;
    }
}

// Add the function "exchange" to module exports
module.exports = exchange;
