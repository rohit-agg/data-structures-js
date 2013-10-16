/**
 *  @file           define.js
 *  @author         Rohit Aggarwal
 *  @created        2013-10-15
 *  @description
 *  <ul>
 *      <li>Provides the functionality of defining Constants</li>
 *  </ul>
 */

/**
 *  @function       define
 *  @param          [in] pObject    Object to which the constant is to be added
 *  @param          [in] pName      Name of the Constant
 *  @param          [in] pValue     Value of the Constant
 *  @description
 *  <ul>
 *      <li>Provides the functionality of defining Constants with provided "pName" and "pValue" to an "pObject"</li>
 *  </ul>
 */
var define = function(pObject, pName, pValue) {
    
    // Create a Property with the identifier "name" and adds it to "object"
    Object.defineProperty(pObject, pName, {
    
        value           : pValue,               // Value of Property
        writable        : false,                // Property is not writable
        configurable    : false,                // Property is not configurable
        enumerable      : true                  // Property is enumerable
    });
}

// Add the function "define" to module exports
module.exports = define;
