/**
 *  @file               equals.js
 *  @created            2013-10-09
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides a general to use equals method</li>
 *  </ul>
 */

/**
 *  @function           equals
 *  @param              [in] pValue1            Object of the first data
 *  @param              [in] pValue2            Object of the second data
 *  @return             Number                  Number representing the relation between pValue1 and pValue2
 *  @description
 *  <ul>
 *      <li>Compares the two data objects and return the appropriate number</li>
 *      <li>-1 - If pValue1 is less than pValue2 as per "<"</li>
 *      <li> 0 - If pValue1 and pValue2 are equal as per "==="</li>
 *      <li> 1 - If pValue1 is greater than pValue2 as per ">"</li>
 *  </ul>
 */
var equals = function(pValue1, pValue2) {
    
    if (pValue1 === pValue2)        return 0;
    else if (pValue < pValue2)      return -1;
    else                            return 1;
}

// Add the equals function to module.exports
module.exports = equals;
