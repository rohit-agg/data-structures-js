/**
 *  @file               resize.js
 *  @created            2014-04-16
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides functionality of expanding an array to a new size</li>
 *  </ul>
 */

/**
 *  @function       resize
 *  @param          [in] pValues    Array of values to be used for resizing
 *	@param			[in] pStart		Index from which to insert the values in the new array
 *  @description
 *  <ul>
 *      <li>Provides the functionality of resizing an array to a new size</li>
 *  </ul>
 */
var resize = function(pValues, pStart) {
    
    if (!(pValues instanceof Array)) {
    	// If the provided pValues is not an instance of Array,
    	// Don't perform any operation and return the array as it is

    	return pValues;
    }

    var newArray = Array();         	// New Array for storing the values
    var index, newIndex = pStart;  		// Indexes for executing array operation
    
    for (index in pValues) {
    	// Loop through all the values in the array, and start assigning them at new indexes of the new array

    	newArray[newIndex] = pValues[index];
    }

    return newArray;
}

// Add the function "resize" to module exports
module.exports = resize;