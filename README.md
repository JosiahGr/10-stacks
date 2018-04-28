# STACK DATA STRUCTURE
version 1.1.0 

This program implements a Stack Class using an internal Linked List class. 

## stack.push(value) 
Time - O(1)
Space - O(n)

The `push()` function adds one node to the "top" of the stack. It takes in a parameter of the nodes value that is being added.

## stack.pop()
Time - O(n)
Space - O(n)

The `pop()` function removes the "last in" or "top" node of the stack.

## stack.peek()
Time - O(n)
Space - O(n)

The `peek()` function searches through the Stack to find and return the value of the "last in" node value. 

## stack.isEmpty()
Time - O(n)
Space - O(n)

The `isEmpty()` function searches for through the stack and will return `true` if it is empty and `false` if not. 

# LinkedList Data Structure

## LinkedList.insertAtHead(value)
This function takes in one parameter that inserts the value at the begining of an array.

```arr1 = [];

arr1.LinkedList.insertAtHead(4);

console.log(arr1); // [4]
```

## LinkedList.insertAtTail(value)

 takes in one parameter that inserts the value at the end of an array. 

```arr1 = [1, 2];

arr1.LinkedList.insertAtTail(4);

console.log(arr1); // [1, 2, 4]
```


### LinkedList.find(value)

This method takes in one parameter and will search for the specified value. Will return null if value does not exist. 

```arr1 = [1, 2, 4];

var num = arr1.LinkedList.find(4);

console.log(num); // 4
```


### LinkedList.remove(value) 

This method takes in one parameter and removes the specified value from the list. Will return null if no value is found.  

```arr1 = [1, 2, 4, 5, 6];

var num = arr1.LinkedList.remove(4);

console.log(arr1); // [1, 2, 5, 6]
```


### LinkedList.pop()

This method removes the last item in a string. Will return null if array is empty. 

```arr1 = [1, 2, 4, 5, 6];

var num = arr1.LinkedList.pop();

console.log(arr1); // [1, 2, 4, 5]
```

### linkedList.map()

This method will search through every value in an array.

```arr1 = [1, 2, 3, 4];

console.log(arr1.LinkedList.map());
// 1
// 2
// 3
// 4
```

## Testing

Insure that npm is updated and Node is installed. To utilize the testing functionality for this package, type in ```npm run test``` in the terminal while at the root of your directory.

This program was developed by Josiah Green with the help from Lacy Hogan and Joy Hue
