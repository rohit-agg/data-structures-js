/**
 *  @file               linkedList.js
 *  @created            2013-10-09
 *  @author             Rohit Aggarwal
 *  @fileoverview
 *  <ul>
 *      <li>Provides Javascript implementation of a Linked List</li>
 *  </ul>
 */

// Include the required libraries
var ListNode            = require('./dataType/listNode');
var equals              = require('./common/equals');
var LinkedListIterator  = require('./iterator/linkedListIterator');

/**
 *  @constructor
 *  @class              LinkedList
 *  @param              [in] pCompare           Compare function for comparing two values in the linked list
 *                                              If not provided, system default "===" will be used
 *  @description
 *  <ul>
 *      <li>Initializes the class variables</li>
 *  </ul>
 */
var LinkedList = function(pCompare) {    
    
    this.head = undefined;
    this.tail = undefined;
    this.size = 0;
    this.compare = (typeof pCompare === "undefined") ? equals : pCompare;
}

/**
 *  @function           insertFront
 *  @class              LinkedList
 *  @param              [in] pData              Object of the data to be inserted into the linked list
 *  @param              [in] pCallback          Reference to the callback function
 *  @description
 *  <ul>
 *      <li>Inserts a new node with the provided data in the front of the Linked List</li>
 *  </ul>
 */
LinkedList.prototype.insertFront = function(pData, pCallback) {
    
    // Create a new Linked Node, with the provided data and Head of the List as next Node
    var newListNode = new ListNode(pData, this.head);
    
    this.size++;                    // Increment the size of the list
    this.head = newListNode;        // Change the Head to point to the new node
    
    // If the End of list is undefined, this is the first node in the list
    // Update the End of list to point to the new node
    if (typeof this.tail === "undefined") {
        this.tail = newListNode;
    }
    
    // Execute the callback function, if provided
    // Also, execute only when pCallback is a type of function
    if (typeof pCallback === "function") {
        pCallback();
    }
}

/**
 *  @function           insertEnd
 *  @class              LinkedList
 *  @param              [in] pData              Object of the data to be inserted into the linked list
 *  @param              [in] pCallback          Reference to the callback function
 *  @description
 *  <ul>
 *      <li>Inserts a new node with the provided data in the end of the Linked List</li>
 *  </ul>
 */
LinkedList.prototype.insertEnd = function(pData, pCallback) {
    
    // Create a new Linked Node, with the provided data and undefined as next Node
    var newListNode = new ListNode(pData, undefined);
    
    this.size++;                                // Increment the size of the list
    this.tail.setNext(newListNode);             // Update the next Node of End to point to newly created Node
    this.tail = newListNode;                    // Change the End to point to the new Node
    
    // If the Head of list is undefined, this is the first node in the list
    // Update the Head of list to point to the new node
    if (typeof this.head === "undefined") {
        this.head = newListNode;
    }
    
    // Execute the callback function, if provided
    // Also, execute only when pCallback is a type of function
    if (typeof pCallback === "function") {
        pCallback();
    }
}

/**
 *  @function           insertAt
 *  @class              LinkedList
 *  @param              [in] pData              Object of the data to be inserted into the linked list
 *  @param              [in] pLocation          Location at which the data needs to be inserted
 *  @param              [in] pCallback          Reference to the callback function
 *  @description
 *  <ul>
 *      <li>Inserts a new node with the provided data at the provided location in the Linked List</li>
 *      <li>If the location doesn't exists in the list, Insert in the end of list</li>
 *  </ul>
 */
LinkedList.prototype.insertAt = function(pData, pLocation, pCallback) {
    
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
    
    // Create a new Linked Node, with the provided data and currentNode as next Node
    newListNode = new ListNode(pData, currentNode);
    
    this.size++;                // Increment the size of the list
    
    // If the parentNode is not undefined, this is not the first node in the list
    // Update the next node of parentNode to point to the new node
    if (typeof parentNode !== "undefined") {
        parentNode.setNext(newListNode);
    }
    
    // Execute the callback function, if provided
    // Also, execute only when pCallback is a type of function    
    if (typeof pCallback === "function") {
        pCallback();
    }
}

/**
 *  @function           removeFront
 *  @class              LinkedList
 *  @return             Object                  Object stored on the front of the linked list
 *  @description
 *  <ul>
 *      <li>Deletes the node present in the front of the linked list</li>
 *      <li>Moves the head to the next node in the linked list</li>
 *  </ul>
 */
LinkedList.prototype.removeFront = function() {
    
    // If the linked list is empty, return "undefined"
    if (this.head == this.tail) {
        return undefined;
    }
    
    var frontData = this.head.getData();        // Store data in front of linked list into a temporary variable
    var frontOfList = this.head.getNext();      // Store the new front of list into a temporary variable
    
    this.size--;                    // Decrement the size of the list
    delete this.head;               // Free up the memory occupied by the current front of the linked list
    
    // Assign the stored new front of list to head of the linked list 
    this.head = frontOfList;
    
    // If the node was the only node in the list, update the tail of the list to undefined
    if (typeof this.head === "undefined") {
        this.tail = undefined;
    }
    
    // Return the data present on the front of the list
    return frontData;
}

/**
 *  @function           removeEnd
 *  @class              LinkedList
 *  @return             Object                  Object stored on the end of the linked list
 *  @description
 *  <ul>
 *      <li>Deletes the node present in the tail of the linked list</li>
 *      <li>Moves the tail to the previous node in the linked list</li>
 *  </ul>
 */
LinkedList.prototype.removeEnd = function() {
    
    // If the linked list is empty, return "undefined"
    if (this.head == this.tail) {
        return undefined;
    }
    
    var endData = this.tail.getData();      // Store data in end of linked list into a temporary variable
    var currentNode = this.head;            // Assign the head of linked list to the currentNode
    var parentNode = undefined;             // Assign undefined to the parentNode
    
    while (typeof currentNode.getNext() !== "undefined") {
        // Loop until the next node the current node is not undefined
        
        parentNode = currentNode;                   // Assign current node to the parent node
        currentNode = currentNode.getNext();        // Move the current node to the next node in the list
    }
    
    // If the parentNode is not undefined, ie it is a valid linked list node
    // Set the next node of the parentNode to undefined, as it is new end of the list
    if (typeof parentNode !== "undefined") {
        parentNode.setNext(undefined);
    }
    
    this.size--;                // Decrement the size of the list
    delete this.tail;           // Free up the memory occupied by the current end of the linked list
    
    // Assign the parentNode to end of the linked list
    this.tail = parentNode;
    
    // If the node was the only node in the list, update the head of the list to undefined
    if (typeof this.tail === "undefined") {
        this.head = undefined;
    }
    
    // Return the data present on the end of the list
    return endData;
}

/**
 *  @function           removeAt
 *  @class              LinkedList
 *  @param              [in] pLocation          Location from which the data needs to be deleted
 *  @return             Object                  Object stored on the specified location
 *  @description
 *  <ul>
 *      <li>Deletes the node present at the provided location of the linked list</li>
 *  </ul>
 */
LinkedList.prototype.removeAt = function(pLocation) {
    
    if (this.head == this.tail || pLocation > this.size) {
        // If the linked list is empty, return "undefined"
        // OR If the provided location is more than the size of linked list, return "undefined"
        
        return undefined;
    }
    
    var dataAt;                                 // Variable to store the data to be deleted from the node
    var location = 1;                           // Location counter
    var currentNode = this.head;                // Assign head of linked list to the current node
    var parentNode = undefined;                 // Assign undefined to the parent node
    
    while (location < pLocation) {
        // Loop until the location to be deleted is not reached
        
        parentNode = currentNode;                   // Assign current node to the parent node
        currentNode = currentNode.getNext();        // Move the current node to the next node in the list
        location++;                                 // Increment the location counter
    }
    
    dataAt = currentNode.getData();                 // Store the data to be deleted
    
    // If the parentNode is a valid linked list node, set the next of Parent to the next of current node
    if (typeof parentNode !== "undefined") {
        parentNode.setNext(currentNode.getNext());
    }
    
    // If the parent node is undefined, update the head to point to next of current node
    if (typeof parentNode === "undefined") {
        this.head = currentNode.getNext();
    }
    
    // If the next node of current node is undefined, update the tail of list to parent node
    if (typeof currentNode.getNext() === "undefined") {
        this.tail = parentNode;
    }
    
    this.size--;                            // Decrement the size of linked list
    currentNode = undefined;                // Update the currentNode to undefined
    
    // Return the data present at the specified location
    return dataAt;
}

/**
 *  @function           removeData
 *  @class              LinkedList
 *  @param              [in] pData              Object of the data to be delete from the linked list
 *  @return             Boolean                 True/False, depending on whether the data was deleted from the linked list
 *  @description
 *  <ul>
 *      <li>Deletes the node present with the provided data from the linked list</li> 
 *  </ul>
 */
LinkedList.prototype.removeData = function(pData) {
    
    var currentNode = this.head;            // currentNode is initialized with the head of the list
    var parentNode = undefined;             // parentNode is initialized to undefined
    
    while (typeof currentNode !== "undefined") {
        // Loop until all the nodes in the linked list are not processed
        
        if (this.compare(currentNode.getData(), pData) == 0) {
            // If the value to be searched and value in the current node are same
            
            // If the parentNode is a valid linked list node, set the next of Parent to the next of current node
            if (typeof parentNode !== "undefined") {
                parentNode.setNext(currentNode.getNext());
            }
            
            // If the parent node is undefined, update the head to point to next of current node
            if (typeof parentNode === "undefined") {
                this.head = currentNode.getNext();
            }
            
            // If the next node of current node is undefined, update the tail of list to parent node
            if (typeof currentNode.getNext() === "undefined") {
                this.tail = parentNode;
            }
            
            this.size--;                            // Decrement the size of linked list
            currentNode = undefined;                // Update the currentNode to undefined
            
            return true;            // Delete operation was successful
        }
        
        // If the comparison is unsuccessful, move to the next node in the list
        parentNode = currentNode;                       // Assign the currentNode to the parentNode
        currentNode = currentNode.getNext();
    }
    
    return false;           // Unsuccessful search, Data not found in Linked List
}

/**
 *  @function           isEmpty
 *  @class              LinkedList
 *  @return             Boolean                 True/False, depending on whether the linked list is empty
 *  @description
 *  <ul>
 *      <li>Checks whether the Linked List is Empty or not, and returns the same</li>
 *  </ul>
 */
LinkedList.prototype.isEmpty = function() {
    
    return this.size == 0;              // Returns whether the Linked List is empty or not
}

/**
 *  @function           search
 *  @class              LinkedList
 *  @param              [in] pData              Object of the data to be searched in the linked list
 *  @return             Boolean                 True/False, depending on whether the data exists in the linked list
 *  @description
 *  <ul>
 *      <li>Data is searched against the compare function provided in constructor</li>
 *      <li>If compare function is not provided, system default "===" is used</li>
 *  </ul>
 */
LinkedList.prototype.search = function(pData) {
 
    // currentNode is initialized with the head of the list
    var currentNode = this.head;
    
    while (typeof currentNode !== "undefined") {
        // Loop until all the nodes in the linked list are not processed
        
        // If the value to be searched and value in the current node are same, return true
        if (this.compare(currentNode.getData(), pData) == 0) {
            return true;
        }
        
        // If the comparison is unsuccessful, move to the next node in the list
        currentNode = currentNode.getNext();
    }
    
    return false;           // Unsuccessful search, Data not found in Linked List
}

/**
 *  @function           iterator
 *  @class              LinkedList
 *  @reutrn             Object                  Object of Linked List Iterator
 *  @description
 *  <ul>
 *      <li>Returns a new Linked List Iterator on the current Instance of the Linked List</li>
 *  </ul>
 */
LinkedList.prototype.iterator = function() {
    
    // Return a new Linked List Iterator with the current instance as Input
    return new LinkedListIterator(this);
}

/**
 *  @function           toString
 *  @class              LinkedList
 *  @return             String                  A String providing the details of the LinkedList Object
 *  @description
 *  <ul>
 *      <li>This is an overriden method of the default toString</li>
 *      <li>Provides a String representation of the LinkedList class in the required format</li>
 *  </ul>
 */
LinkedList.prototype.toString = function() {
    
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

// Add the LinkedList class to module.exports
module.exports = LinkedList;