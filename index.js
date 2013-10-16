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
var stack               = require('./lib/stack');
var queue               = require('./lib/queue');
var dequeue             = require('./lib/dequeue');
var linkedList          = require('./lib/linkedList');
var doublyLinkedList    = require('./lib/doublylinkedList');
var binaryTree          = require('./lib/binaryTree');
var redBlackTree        = require('./lib/redBlackTree');
var maxHeap             = require('./lib/maxHeap');
var minHeap             = require('./lib/minHeap');

// Add all the Libraries to module.exports with appropriate name
module.exports.Stack                    = stack;
module.exports.Queue                    = queue;
module.exports.Dequeue                  = dequeue;
module.exports.LinkedList               = linkedList;
module.exports.DoublyLinkedList         = doublyLinkedList;
module.exports.BinaryTree               = binaryTree;
module.exports.RedBlackTree             = redBlackTree;
module.exports.MaxHeap                  = maxHeap;
module.exports.MinHeap                  = minHeap;
