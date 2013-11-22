### Properties

| Constants | Description |
| --- | --- |
| ID_TRAVERSE_ORDER | To traverse the Dequeue in regular order (Front to Rear) |
| ID_TRAVERSE_REVESE | To traverse the Dequeue in reverse order (Rear to Front) |

| Property | Description |
| --- | --- |
| front | Current Front of Dequeue |
| rear | Current Rear of Dequeue |
| size | Current Size of the Dequeue |
| values | Array representation of the stored values in the Dequeue |
| compare | Reference to the function used by the Dequeue for comparing two stored values |

### Methods

| Method | Description |
| --- | --- |
| insertFront | Inserts the data to the Front of the Dequeue |
| insertRear | Inserts the data to the Rear of the Dequeue |
| removeFront | Removes the data from the Front of the Dequeue |
| removeRear | Removes the data from the Rear of the Dequeue |
| search | Searches for a particular data in the Dequeue |
| isEmpty | Checks whether the Dequeue is empty or not |
| toString | Provides a string representation of the Dequeue Object |
| iterator | Provides an iterator for traversing through all the elements in the Dequeue |

## Example

```javascript
var Dequeue = require('data-structure-js').Dequeue;

var dequeueObj = new Dequeue();
var i = 0, max = 100;
var numOfElem = 10;
var dequeueIterObj;

for (i=0; i<numOfElem; i++) {
    
    dequeueObj.insertFront(i);
    dequeueObj.insertRear(max-i);
}

console.log("Size = " + dequeueObj.size);

console.log(dequeueObj.toString());

console.log(dequeueObj.search(1));

console.log(dequeueObj.search(11));

dequeueIterObj = dequeueObj.iterator(Dequeue.ID_TRAVERSE_ORDER);

while (dequeueIterObj.hasNext()) {
    
    console.log(dequeueIterObj.next());
}

dequeueIterObj = dequeueObj.iterator(Dequeue.ID_TRAVERSE_REVERSE);

while (dequeueIterObj.hasNext()) {
    
    console.log(dequeueIterObj.next());
}

for(i=0; i<numOfElem; i++) {
    
    dequeueObj.pop();
    dequeueObj.remove();
}

console.log(dequeueObj.isEmpty());

console.log(dequeueObj.toString());

```

## API

#### Constructor

`Dequeue([compare])`

__Parameters__

| | Type | Description |
| --- | --- | --- |
| compare (Optional) | Function | To be used for comparing two objects stored in the Dequeue. |

#### insertFront, insertRear

`insertFront(data, [callback])`
`insertRear(data, [callback])`

__Parameters__

| | Type | Description |
| --- | --- | --- |
| data | Object | Represents the data to be stored in Front/Rear of Dequeue |'
| callback | Function | To be executed after the insert operation has completed successfully |

#### removeFront, removeRear

`removeFront()`
`removeRear()`

__Returns__

Object representing the data stored at Front/Rear of Dequeue

#### isEmpty

`isEmpty()`

__Returns__

True/False, depicting whether the Dequeue is empty or not.

#### toString

`toString()`

__Returns__

A String representation of the Dequeue Object

#### search

`search(data)`

__Parameter__

| | Type | Description |
| --- | --- | --- |
| data | Object | Represents the data to be searched in the Dequeue |'

__Returns__

#### iterator

`iterator([order])`

__Parameter__

| | Type | Description |
| --- | --- | --- |
| order | Constant | To be used for depicting in which order the traversal is to be made |

__Returns__

Object of DequeueIterator containing the containing the following methods:

| Method | Description |
| --- | --- |
| hasNext | Checks whether another element exists in the Dequeue or not |
| next | Provides the next element in the Dequeue |