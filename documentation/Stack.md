# Stack

## API

#### Constructor

`Stack([compare])`

__Parameters__

| | Type | Description |
| --- | --- | --- |
| compare (Optional) | Function | To be used for comparing two objects stored in the Stack. |

#### push

`push(data, [callback])`

__Parameters__

| | Type | Description |
| --- | --- | --- |
| data | Object | Represents the data to be stored onto the top of Stack |'
| callback | Function | To be executed after the push operation has completed successfully |

#### pop

`pop()`

__Returns__

Object representing the data stored on top of stack

#### size

`size()`

__Returns__

A Number providing the current size of the stack.

#### isEmpty

`isEmpty()`

__Returns__

True/False, depicting whether the Stack is empty or not.

#### toString

`toString()`

__Returns__

#### search

`search(data)`

__Parameter__

__Returns__

#### iterator

`iterator()`

__Returns__

## Example

```javascript
var Stack = require('data-structure-js').Stack;

var stackObj = new Stack();
var i = 0;
var numOfElem = 10;

for (i=0; i<numOfElem; i++) {
    
    stackObj.push(i);
}

console.log("Size = " + stackObj.size());

console.log(stackObj.toString());

console.log(stackObj.search(1));

console.log(stackObj.search(11));

for(i=0; i<numOfElem; i++) {
    
    stackObj.pop();
}

console.log(stackObj.isEmpty());

console.log(stackObj.toString());
```
