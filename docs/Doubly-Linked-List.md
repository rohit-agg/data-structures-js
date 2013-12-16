### Properties

| Property | Description |
| --- | --- |
| head | First Node in the Doubly Linked List |
| tail | Last Node in the Doubly Linked List |
| size | Current Size of the Doubly Linked List |
| compare | Reference to the function used by the Doubly Linked List for comparing two stored values |

### Methods

| Method | Description |
| --- | --- |
| insertFront | Inserts the data to the Front of the Doubly Linked List |
| insertEnd | Inserts the data to the Rear of the Doubly Linked List |
| insertAt | Inserts the data at the specified position in the Doubly Linked List |
| removeFront | Removes the data from the Front of the Doubly Linked List |
| removeEnd | Removes the data from the Rear of the Doubly Linked List |
| removeAt | Removes the data from the specified position in the Doubly Linked List |
| removeData | Removes the specified data from the Doubly Linked List |
| search | Searches for a particular data in the Doubly Linked List |
| isEmpty | Checks whether the Doubly Linked List is empty or not |
| toString | Provides a string representation of the Doubly Linked List Object |
| iterator | Provides an iterator for traversing through all the elements in the Doubly Linked List |

## Example

```javascript
var DoublyLinkedList = require('data-structure-js').DoublyLinkedList;

var doublyLinkedListObj = new DoublyLinkedList();
var i = 0, max = 100;
var numOfElem = 10;
var doublyLinkedListIterObj;

for (i=0; i<numOfElem; i++) {
    
    doublyLinkedListObj.insertFront(i);
    doublyLinkedListObj.insertRear(max-i);
    doublyLinkedListObj.insertAt(i, i);
}

console.log("Size = " + doublyLinkedListObj.size);

console.log(doublyLinkedListObj.toString());

console.log(doublyLinkedListObj.search(1));

console.log(doublyLinkedListObj.search(11));

doublyLinkedListIterObj = doublyLinkedListObj.iterator();

while (doublyLinkedListIterObj.hasNext()) {
    
    console.log(doublyLinkedListIterObj.next());
}

for(i=0; i<numOfElem; i++) {
    
    doublyLinkedListObj.removeAt(i);
    doublyLinkedListObj.removeData(i);
    doublyLinkedListObj.removeFront();
    doublyLinkedListObj.removeEnd();
}

console.log(doublyLinkedListObj.isEmpty());

console.log(doublyLinkedListObj.toString());

```

## API

#### Constructor

`DoublyLinkedList([compare])`

__Parameters__

| | Type | Description |
| --- | --- | --- |
| compare (Optional) | Function | To be used for comparing two objects stored in the Doubly Linked List. |

#### insertFront, insertEnd, insertAt

`insertFront(data, [callback])`
`insertEnd(data, [callback])`
`insertAt(data, location, [callback])`

__Parameters__

| | Type | Description |
| --- | --- | --- |
| data | Object | Represents the data to be stored in Front/Rear/At of Doubly Linked List |'
| location | Number | Represents the position at which the data needs to be inserted in Doubly Linked List |
| callback | Function | To be executed after the insert operation has completed successfully |

#### removeFront, removeEnd, removeAt, removeData

`removeFront()`
`removeRear()`
`removeAt(location)`
`removeData(data)`

__Parameters__

| | Type | Description |
| --- | --- | --- |
| data | Object | Data to be deleted from the Doubly Linked List |
| location | Number | Represents the position from which the data needs to be deleted from Doubly Linked List |

__Returns__

Object representing the data stored at Front/End/At of Doubly Linked List

Status representing whether the specified data was deleted from Doubly Linked List

#### isEmpty

`isEmpty()`

__Returns__

True/False, depicting whether the Doubly Linked List is empty or not.

#### toString

`toString()`

__Returns__

A String representation of the Doubly Linked List Object

#### search

`search(data)`

__Parameter__

| | Type | Description |
| --- | --- | --- |
| data | Object | Represents the data to be searched in the Doubly Linked List |'

__Returns__

#### iterator

`iterator()`

__Returns__

Object of DoublyLinkedListIterator containing the containing the following methods:

| Method | Description |
| --- | --- |
| hasNext | Checks whether another element exists in the Doubly Linked List or not |
| next | Provides the next element in the Doubly Linked List |