/**
 *  @file               doublyLinkedList.js
 *  @created            2013-10-12
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides Javascript implementation of a Doubly Linked List</li>
 *  </ul>
 */

// Include the required libraries
var DoublyListNode              = require('./dataType/doublyListNode');
var equals                      = require('./common/equals');
var DoublyLinkedListIterator    = require('./iterator/doublyLinkedListIterator');

/**
 *  @constructor
 *  @class              DoublyLinkedList
 *  @param              [in] pCompare           Compare function for comparing two values in the linked list
 *                                              If not provided, system default "===" will be used
 *  @description
 *  <ul>
 *      <li>Initializes the class variables</li>
 *  </ul>
 */
var DoublyLinkedList = function(pCompare) {    
    
    this.head = undefined;
    this.tail = undefined;
    this.size = 0;
    this.compare = (typeof pCompare === "undefined") ? equals : pCompare;
}

/**
 *  @function           insertFront
 *  @class              DoublyLinkedList
 *  @param              [in] pData              Object of the data to be inserted into the doubly linked list
 *  @param              [in] pCallback          Reference to the callback function
 *  @description
 *  <ul>
 *      <li>Inserts a new node with the provided data in the front of the Doubly Linked List</li>
 *  </ul>
 */
DoublyLinkedList.prototype.insertFront = function(pData, pCallback) {
    
    // Create a new Doubly Linked Node, with the provided data, Head of the List as next Node
    // and undefined as the previous node
    var newDoublyListNode = new DoublyListNode(pData, this.head, undefined);
    
    this.size++;                                // Increment the size of the list
    this.head.setPrevious(newDoublyListNode);   // Set new node as previous of current head of linked list
    this.head = newDoublyListNode;              // Change the Head to point to the new node
    
    // If the End of list is undefined, this is the first node in the list
    // Update the End of list to point to the new node
    if (typeof this.tail === "undefined")       this.tail = newDoublyListNode;
    
    // Execute the callback function, if provided
    // Also, execute only when pCallback is a type of function
    if (typeof pCallback === "function")        pCallback();
}

/**
 *  @function           insertEnd
 *  @class              DoublyLinkedList
 *  @param              [in] pData              Object of the data to be inserted into the doubly linked list
 *  @param              [in] pCallback          Reference to the callback function
 *  @description
 *  <ul>
 *      <li>Inserts a new node with the provided data in the end of the Doubly Linked List</li>
 *  </ul>
 */
DoublyLinkedList.prototype.insertEnd = function(pData, pCallback) {
    
    // Create a new Doubly Linked Node, with the provided data, undefined as next Node
    // and current tail of linked list as the previous node
    var newDoublyListNode = new DoublyListNode(pData, undefined, this.tail);
    
    this.size++;                                // Increment the size of the list
    this.tail.setNext(newDoublyListNode);       // Update the next Node of End to point to newly created Node
    this.tail = newDoublyListNode;              // Change the End to point to the new Node
    
    // If the Head of list is undefined, this is the first node in the list
    // Update the Head of list to point to the new node
    if (typeof this.head === "undefined")      this.head = newDoublyListNode;
    
    // Execute the callback function, if provided
    // Also, execute only when pCallback is a type of function
    if (typeof pCallback === "function")        pCallback();
}

/**
 *  @function           insertAt
 *  @class              DoublyLinkedList
 *  @param              [in] pData              Object of the data to be inserted into the doubly linked list
 *  @param              [in] pLocation          Location at which the data needs to be inserted
 *  @param              [in] pCallback          Reference to the callback function
 *  @description
 *  <ul>
 *      <li>Inserts a new node with the provided data at the provided location in the Doubly Linked List</li>
 *      <li>If the location doesn't exists in the list, Insert in the end of list</li>
 *  </ul>
 */
DoublyLinkedList.prototype.insertAt = function(pData, pLocation, pCallback) {
    
    if (pLocation > this.size) {
        // If pLocation is more than the size of the list
        
        // Insert the data at the end of the list, and return
        this.insertEnd(pData, pCallback);
        return;
    }
    
    var newListNode;                    // Declare a variable for the new node in the list
    var location = 1;                   // Initialize the location to 1
    var currentNode = this.head;        // Initialize the currentNode to head of list
    var parentNode = undefined;         // Initialize the parentNode to undefined
    
    while (location < pLocation) {
        // Loop until the desired location is not reached
        
        parentNode = currentNode;                       // Update the parent to point to the current node
        currentNode = currentNode.getNext();            // Update the current node to point to next node
        location++;                                     // Increment the location counter
    }
    
    // Create a new Doubly Linked Node, with the provided data, currentNode as next Node
    // and parentNode as the previous Node
    newDoublyListNode = new DoublyListNode(pData, currentNode, parentNode);
    
    this.size++;                // Increment the size of the list
    
    // If the parentNode is not undefined, this is not the first node in the list
    // Update the next node of parentNode to point to the new node
    if (typeof parentNode !== "undefined")      parentNode.setNext(newDoublyListNode);
    
    // If the currentNode is not undefined, this is not the last node in the list
    // Update the previous node of the currentNode to point to the new node
    if (typeof currentNode !== "undefined")     currentNode.setPrev(newDoublyListNode);
    
    // Execute the callback function, if provided
    // Also, execute only when pCallback is a type of function    
    if (typeof pCallback === "function")        pCallback();
}

/**
 *  @function           removeFront
 *  @class              DoublyLinkedList
 *  @return             Object                  Object stored on the front of the doubly linked list
 *  @description
 *  <ul>
 *      <li>Deletes the node present in the front of the doubly linked list</li>
 *      <li>Moves the head to the next node in the doubly linked list</li>
 *  </ul>
 */
DoublyLinkedList.prototype.removeFront = function() {
    
    // If the doubly linked list is empty, return "undefined"
    if (this.head == this.tail)                 return undefined;
    
    var frontData = this.head.getData();        // Store data in front of doubly linked list into a temporary variable
    var frontOfList = this.head.getNext();      // Store the new front of list into a temporary variable
    
    this.size--;                        // Decrement the size of the list
    delete this.head;                   // Free up the memory occupied by current front of doubly linked list
    
    this.head = frontOfList;            // Assign the stored new front of list to head of doubly linked list 
    this.head.setPrev(undefined);       // Set the previous node of the head to undefined
    
    // If the node was the only node in the list, update the tail of the list to undefined
    if (typeof this.head === "undefined")       this.tail = undefined;
    
    // Return the data present on the front of the list
    return frontData;
}

/**
 *  @function           removeEnd
 *  @class              DoublyLinkedList
 *  @return             Object                  Object stored on the end of the doubly linked list
 *  @description
 *  <ul>
 *      <li>Deletes the node present in the tail of the doubly linked list</li>
 *      <li>Moves the tail to the previous node in the doubly linked list</li>
 *  </ul>
 */
DoublyLinkedList.prototype.removeEnd = function() {
    
    // If the linked list is empty, return "undefined"
    if (this.head == this.tail)                 return undefined;
    
    var endData = this.tail.getData();      // Store data in end of doubly linked list into a temporary variable
    var endOfList = this.tail.getPrev();    // Store the new end of the list into a temporary variable
    
    this.size--;                // Decrement the size of the list
    delete this.tail;           // Free up the memory occupied by the current end of the linked list
    
    this.tail = endOfList;              // Assign the stored new front of list to head of doubly linked list 
    this.tail.setNext(undefined);       // Set the previous node of the head to undefined
    
    // If the node was the only node in the list, update the head of the list to undefined
    if (typeof this.tail === "undefined")       this.head = undefined;
    
    // Return the data present on the end of the list
    return endData;
}

/**
 *  @function           removeAt
 *  @class              DoublyLinkedList
 *  @param              [in] pLocation          Location from which the data needs to be deleted
 *  @return             Object                  Object stored on the specified location
 *  @description
 *  <ul>
 *      <li>Deletes the node present at the specified location of the doubly linked list</li>
 *  </ul>
 */
DoublyLinkedList.prototype.removeAt = function(pLocation) {
    
    if (this.head == this.tail || pLocation > this.size) {
        // If the doubly linked list is empty, return "undefined"
        // OR If the provided location is more than the size of doubly linked list, return "undefined"
        
        return undefined;
    }
    
    var dataAt;                                 // Variable to store the data to be deleted from the node
    var location = 1;                           // Location counter
    var currentNode = this.head;                // Assign head of doubly linked list to the current node
    var parentNode = undefined;                 // Assign undefined to the parent node
    
    while (location < pLocation) {
        // Loop until the location to be deleted is not reached
        
        parentNode = currentNode;                   // Assign current node to the parent node
        currentNode = currentNode.getNext();        // Move the current node to the next node in the list
        location++;                                 // Increment the location counter
    }
    
    dataAt = currentNode.getData();                 // Store the data to be deleted
    
    if (typeof parentNode !== "undefined")  {
        // If the parentNode is a valid doubly linked list node,
        // set the next of Parent to the next of current node
        
        parentNode.setNext(currentNode.getNext());
    
    } else {
        // If the parent node is undefined, update the head to point to next of current node
        
        this.head = currentNode.getNext();
        this.head.setPrev(undefined);
    }
    
    if (typeof currentNode.getNext() !== "undefined") {
        // If the next node of current node is a valid doubly linked list node,
        // Set the previous of next of current node to the parent node
        
        currentNode.getNext().setPrev(parentNode);
        
    } else {
        // If the next node of current node is undefined, update the tail of list to parent node
        
        this.tail = parentNode;
        this.tail.setNext(undefined);
    }
    
    this.size--;                            // Decrement the size of linked list
    currentNode = undefined;                // Update the currentNode to undefined
    
    // Return the data present at the specified location
    return dataAt;
}

/**
 *  @function           removeData
 *  @class              DoublyLinkedList
 *  @param              [in] pData              Object of the data to be delete from the doubly linked list
 *  @return             Boolean                 True/False, depending on whether the data was deleted from the doubly linked list
 *  @description
 *  <ul>
 *      <li>Deletes the node present with the specified data from the doubly linked list</li>
 *  </ul>
 */
DoublyLinkedList.prototype.removeData = function(pData) {
    
    var currentNode = this.head;            // currentNode is initialized with the head of the list
    var parentNode = undefined;             // parentNode is initialized to undefined
    
    while (typeof currentNode !== "undefined") {
        // Loop until all the nodes in the linked list are not processed
        
        if (this.compare(currentNode.getData(), pData) == 0) {
            // If the value to be searched and value in the current node are same
            
            if (typeof parentNode !== "undefined")  {
                // If the parentNode is a valid doubly linked list node,
                // set the next of Parent to the next of current node
                
                parentNode.setNext(currentNode.getNext());
                
            } else {
                // If the parent node is undefined, update the head to point to next of current node
                
                this.head = currentNode.getNext();
                this.head.setPrev(undefined);
            }
            
            if (typeof currentNode.getNext() !== "undefined") {
                // If the next node of current node is a valid doubly linked list node,
                // Set the previous of next of current node to parent node
                
                currentNode.getNext().setPrev(parentNode);
                
            } else {
                // If the next node of current node is undefined,
                // update the tail of list to parent node
                
                this.tail = parentNode;
                this.tail.setNext(undefined);
            }
            
            this.size--;                            // Decrement the size of linked list
            currentNode = undefined;                // Update the currentNode to undefined
            
            return true;            // Delete operation was successful
        }
        
        // If the comparison is unsuccessful, move to the next node in the list
        parentNode = currentNode;                       // Assign the currentNode to the parentNode
        currentNode = currentNode.getNext();
    }
    
    return false;           // Unsuccessful search, Data not found in Doubly Linked List
}

/**
 *  @function           isEmpty
 *  @class              DoublyLinkedList
 *  @return             Boolean                 True/False, depending on whether the doubly linked list is empty
 *  @description
 *  <ul>
 *      <li>Checks whether the Doubly Linked List is Empty or not, and returns the same</li>
 *  </ul>
 */
DoublyLinkedList.prototype.isEmpty = function() {
    
    return this.size == 0;              // Returns whether the Doubly Linked List is empty or not
}

/**
 *  @function           search
 *  @class              DoublyLinkedList
 *  @param              [in] pData              Object of the data to be searched in the doubly linked list
 *  @return             Boolean                 True/False, depending on whether the data exists in the doubly linked list
 *  @description
 *  <ul>
 *      <li>Data is searched against the compare function provided in constructor</li>
 *      <li>If compare function is not provided, system default "===" is used</li>
 *  </ul>
 */
DoublyLinkedList.prototype.search = function(pData) {
 
    // currentNode is initialized with the head of the list
    var currentNode = this.head;
    
    while (typeof currentNode !== "undefined") {
        // Loop until all the nodes in the doubly linked list are not processed
        
        // If the value to be searched and value in the current node are same, return true
        if (this.compare(currentNode.getData(), pData) == 0)       return true;
        
        // If the comparison is unsuccessful, move to the next node in the list
        currentNode = currentNode.getNext();
    }
    
    return false;           // Unsuccessful search, Data not found in Linked List
}

/**
 *  @function           iterator
 *  @class              DoublyLinkedList
 *  @reutrn             Object                  Object of Doubly Linked List Iterator
 *  @description
 *  <ul>
 *      <li>Returns a new Doubly Linked List Iterator on the current Instance of the Doubly Linked List</li>
 *  </ul>
 */
DoublyLinkedList.prototype.iterator = function() {
    
    // Return a new Doubly Linked List Iterator with the current instance as Input
    return new DoublyLinkedListIterator(this);
}

/**
 *  @function           toString
 *  @class              DoublyLinkedList
 *  @return             String                  A String providing the details of the DoublyLinkedList Object
 *  @description
 *  <ul>
 *      <li>This is an overriden method of the default toString</li>
 *      <li>Provides a String representation of the DoublyLinkedList class in the required format</li>
 *  </ul>
 */
DoublyLinkedList.prototype.toString = function() {
    
    var current = this.head;                    // Initialize current to the head of the list
    
    // Prepare the string to be returned
    returnString  = "";
    returnString += "[ Size = " + this.size;
    returnString += "; Values = [" + current.getData();
    current = current.getNext();
    
    while (typeof current !== "undefined") {
        // Loop until all the nodes in the list are not traversed
        
        returnString += ", " + current.getData();           // Attach data in the node to returnString        
        current = current.getNext();                        // Move the node to the next in the list
    }
    
    returnString += "] ]";
    
    // Return the thus formed String
    return returnString;
}

// Add the DoublyLinkedList class to module.exports
module.exports = DoublyLinkedList;
