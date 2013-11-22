### Properties

| Property | Description |
| --- | --- |
| top | Current Top of Stack |
| size | Current Size of the Stack |
| values | Array representation of the stored values in the Stack |
| compare | Reference to the function used by the Stack for comparing two stored values |

### Methods

| Method | Description |
| --- | --- |
| push | Pushes the data onto the top of Stack |
| insert | Similar to 'push', it will also push the data onto the top of Stack |
| pop | Pops the data present on the top of Stack |
| remove | Similar to 'pop', it will also pop the data present on the top of Stack |
| search | Searches for a particular data in the Stack |
| isEmpty | Checks whether the Stack is empty or not |
| toString | Provides a string representation of the Stack Object |
| iterator | Provides an iterator for traversing through all the elements in the Stack |

## Example

```javascript
var Stack = require('data-structure-js').Stack;

var stackObj = new Stack();
var i = 0;
var numOfElem = 10;
var stackIterObj;

for (i=0; i<numOfElem; i++) {
    
    stackObj.push(i);
    stackObj.insert(i);
}

console.log("Size = " + stackObj.size);

console.log(stackObj.toString());

console.log(stackObj.search(1));

console.log(stackObj.search(11));

stackIterObj = stackObj.iterator();

while (stackIterObj.hasNext()) {
    
    console.log(stackIterObj.next());
}

for(i=0; i<numOfElem; i++) {
    
    stackObj.pop();
    stackObj.remove();
}

console.log(stackObj.isEmpty());

console.log(stackObj.toString());

```

## API

#### Constructor

`Stack([compare])`

__Parameters__

| | Type | Description |
| --- | --- | --- |
| compare (Optional) | Function | To be used for comparing two objects stored in the Stack. |

#### push | insert

`push(data, [callback])`
`insert(data, [callback])`

__Parameters__

| | Type | Description |
| --- | --- | --- |
| data | Object | Represents the data to be stored onto the top of Stack |'
| callback | Function | To be executed after the push operation has completed successfully |

#### pop | remove

`pop()`

__Returns__

Object representing the data stored on top of stack

#### isEmpty

`isEmpty()`

__Returns__

True/False, depicting whether the Stack is empty or not.

#### toString

`toString()`

__Returns__

A String representation of the Stack Object

#### search

`search(data)`

__Parameter__

| | Type | Description |
| --- | --- | --- |
| data | Object | Represents the data to be searched in the Stack |'

__Returns__

#### iterator

`iterator()`

__Returns__

Object of StackIterator containing the containing the following methods:

| Method | Description |
| --- | --- |
| hasNext | Checks whether another element exists in the Stack or not |
| next | Provides the next element in the Stack |