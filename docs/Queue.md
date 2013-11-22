### Properties

| Property | Description |
| --- | --- |
| front | Current Front of Queue |
| rear | Current Rear of Queue |
| size | Current Size of the Queue |
| values | Array representation of the stored values in the Queue |
| compare | Reference to the function used by the Queue for comparing two stored values |

### Methods

| Method | Description |
| --- | --- |
| enqueue | Inserts the data at the rear of Queue |
| insert | Similar to 'enqueue', it will also insert the data at the rear of Queue |
| dequeue | Deletes the data present at the front of Queue |
| remove | Similar to 'dequeue', it will also delete the data present at the front of Queue |
| search | Searches for a particular data in the Queue |
| isEmpty | Checks whether the Queue is empty or not |
| toString | Provides a string representation of the Queue Object |
| iterator | Provides an iterator for traversing through all the elements in the Queue |

## Example

```javascript
var Queue = require('data-structure-js').Queue;

var queueObj = new Queue();
var i = 0;
var numOfElem = 10;
var queueIterObj;

for (i=0; i<numOfElem; i++) {
    
    queueObj.enqueue(i);
    queueObj.insert(i);
}

console.log("Size = " + queueObj.size);

console.log(queueObj.toString());

console.log(queueObj.search(1));

console.log(queueObj.search(11));

queueIterObj = queueObj.iterator();

while (queueIterObj.hasNext()) {
    
    console.log(queueIterObj.next());
}

for(i=0; i<numOfElem; i++) {
    
    queueObj.dequeue();
    queueObj.remove();
}

console.log(queueObj.isEmpty());

console.log(queueObj.toString());

```

## API

#### Constructor

`Queue([compare])`

__Parameters__

| | Type | Description |
| --- | --- | --- |
| compare (Optional) | Function | To be used for comparing two objects stored in the Queue. |

#### enqueue | insert

`enqueue(data, [callback])`
`insert(data, [callback])`

__Parameters__

| | Type | Description |
| --- | --- | --- |
| data | Object | Represents the data to be stored at the Rear of Queue |'
| callback | Function | To be executed after the insert operation has completed successfully |

#### dequeue | remove

`dequeue()`
`remove()`

__Returns__

Object representing the data stored at the front of Queue

#### isEmpty

`isEmpty()`

__Returns__

True/False, depicting whether the Queue is empty or not.

#### toString

`toString()`

__Returns__

A String representation of the Queue Object

#### search

`search(data)`

__Parameter__

| | Type | Description |
| --- | --- | --- |
| data | Object | Represents the data to be searched in the Queue |'

__Returns__

#### iterator

`iterator()`

__Returns__

Object of QueueIterator containing the containing the following methods:

| Method | Description |
| --- | --- |
| hasNext | Checks whether another element exists in the Queue or not |
| next | Provides the next element in the Queue |