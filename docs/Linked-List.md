### Properties

| Property | Description |
| --- | --- |
| head | First Node in the Linked List |
| tail | Last Node in the Linked List |
| size | Current Size of the Linked List |
| compare | Reference to the function used by the Linked List for comparing two stored values |

### Methods

| Method | Description |
| --- | --- |
| insertFront | Inserts the data to the Front of the Linked List |
| insertEnd | Inserts the data to the Rear of the Linked List |
| insertAt | Inserts the data at the specified position in the Linked List |
| removeFront | Removes the data from the Front of the Linked List |
| removeEnd | Removes the data from the Rear of the Linked List |
| removeAt | Removes the data from the specified position in the Linked List |
| removeData | Removes the specified data from the Linked List |
| search | Searches for a particular data in the Linked List |
| isEmpty | Checks whether the Linked List is empty or not |
| toString | Provides a string representation of the Linked List Object |
| iterator | Provides an iterator for traversing through all the elements in the Linked List |

## Example

```javascript
var LinkedList = require('data-structure-js').LinkedList;

var linkedListObj = new LinkedList();
var i = 0, max = 100;
var numOfElem = 10;
var linkedListIterObj;

for (i=0; i<numOfElem; i++) {
    
    linkedListObj.insertFront(i);
    linkedListObj.insertRear(max-i);
    linkedListObj.insertAt(i, i);
}

console.log("Size = " + linkedListObj.size);

console.log(linkedListObj.toString());

console.log(linkedListObj.search(1));

console.log(linkedListObj.search(11));

linkedListIterObj = linkedListObj.iterator();

while (linkedListIterObj.hasNext()) {
    
    console.log(linkedListIterObj.next());
}

for(i=0; i<numOfElem; i++) {
    
    linkedListObj.removeAt(i);
    linkedListObj.removeData(i);
    linkedListObj.removeFront();
    linkedListObj.removeEnd();
}

console.log(linkedListObj.isEmpty());

console.log(linkedListObj.toString());

```

## API

#### Constructor

`LinkedList([compare])`

__Parameters__

| | Type | Description |
| --- | --- | --- |
| compare (Optional) | Function | To be used for comparing two objects stored in the Linked List. |

#### insertFront, insertEnd, insertAt

`insertFront(data, [callback])`
`insertEnd(data, [callback])`
`insertAt(data, location, [callback])`

__Parameters__

| | Type | Description |
| --- | --- | --- |
| data | Object | Represents the data to be stored in Front/Rear/At of Linked List |'
| location | Number | Represents the position at which the data needs to be inserted in Linked List |
| callback | Function | To be executed after the insert operation has completed successfully |

#### removeFront, removeEnd, removeAt, removeData

`removeFront()`
`removeRear()`
`removeAt(location)`
`removeData(data)`

__Parameters__

| | Type | Description |
| --- | --- | --- |
| data | Object | Data to be deleted from the Linked List |
| location | Number | Represents the position from which the data needs to be deleted from Linked List |

__Returns__

Object representing the data stored at Front/End/At of Linked List

Status representing whether the specified data was deleted from Linked List

#### isEmpty

`isEmpty()`

__Returns__

True/False, depicting whether the Linked List is empty or not.

#### toString

`toString()`

__Returns__

A String representation of the Linked List Object

#### search

`search(data)`

__Parameter__

| | Type | Description |
| --- | --- | --- |
| data | Object | Represents the data to be searched in the Linked List |'

__Returns__

#### iterator

`iterator()`

__Returns__

Object of LinkedListIterator containing the containing the following methods:

| Method | Description |
| --- | --- |
| hasNext | Checks whether another element exists in the Linked List or not |
| next | Provides the next element in the Linked List |