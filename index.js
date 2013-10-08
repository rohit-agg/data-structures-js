/**
 *  @file           index.js
 *  @created        2013-09-29
 *  @author         Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Adds the library's functionalities to module exports</li>
 *  </ul>
 */

// Retrieve all the Data Structure Libraries from the respective files
var stack       = require('./lib/stack');
var queue       = require('./lib/queue');
var dequeue     = require('./lib/dequeue');
var binaryTree  = require('./lib/binaryTree');

// Add all the Libraries to module.exports with appropriate name
module.exports.Stack        = stack;
module.exports.Queue        = queue;
module.exports.Dequeue      = dequeue;
module.exports.BinaryTree   = binaryTree;
