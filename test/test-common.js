/**
 *  @file               test-common.js
 *  @created            2013-11-11
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides common functions to be used by tests</li>
 *  </ul>
 */

/**
 *  @function           header
 *  @param              [in] pText              Text to be printed
 *  @description
 *  <ul>
 *      <li>Text will be printed as a Header in Blocks along with trailing and leading line-break</li>
 *  </ul>
 */
var header = function(pText) {
    
    var length = pText.length + 6;
    var counter;
    var headerBreak = ""
    
    for (counter = 1; counter <= length; counter++) { headerBreak += "="; }
    
    console.log("\n" + headerBreak);
    console.log("|| " + pText + " ||");
    console.log(headerBreak);
}

/**
 *  @function           testHeader
 *  @param              [in] pText              Text to be printed
 *  @description
 *  <ul>
 *      <li>Text will be printed as a Sub-Header as Underlined, with trailing and leading line-break</li>
 *  </ul>
 */
var testHeader = function(pText) {
    
    var length = pText.length + 6;
    var counter;
    var subHeaderBreak = "";
    
    for (counter = 1; counter <= length; counter++) { subHeaderBreak += "-" }
    
    console.log("\nTest: " + pText);
    console.log(subHeaderBreak);
}

/**
 *  @function           testCase
 *  @param              [in] pText              Text to be printed
 *  @description
 *  <ul>
 *      <li></li>
 *  </ul>
 */
var testCase = function(pText) {

    console.log("Case: " + pText);
}

// Add all the functions to module.exports
module.exports.header       = header;
module.exports.testHeader   = testHeader;
module.exports.testCase     = testCase;