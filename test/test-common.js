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
    console.log(headerBreak + "\n");    
}

/**
 *  @function           subHeader
 *  @param              [in] pText              Text to be printed
 *  @description
 *  <ul>
 *      <li>Text will be printed as a Sub-Header as Underlined, with trailing and leading line-break</li>
 *  </ul>
 */
var subHeader = function(pText) {
    
    var length = pText.length;
    var counter;
    var subHeaderBreak = "";
    
    for (counter = 1; counter <= length; counter++) { subHeaderBreak += "-" }
    
    console.log("\n" + pText);
    console.log(subHeaderBreak);
}

// Add all the functions to module.exports
module.exports.header       = header;
module.exports.subHeader    = subHeader;