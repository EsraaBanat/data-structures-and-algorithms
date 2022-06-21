# **Stacks and Queues**
<!-- Short summary or background information -->
Contains a Stack, Queue, and Node class. The Stack operates on a last in first out (LIFO) basis, and the Queue operates on a first in first out (FIFO) basis. A Stack object contains a reference to its top Node, a Queue object contains references for the front and rear Nodes. Each Node contains a value and a reference to the next Node in the Stack/Queue.

## **Challenge**
<!-- Description of the challenge -->
- Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue

- Node:

  - Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.

- Stack

  - Create a Stack class that has a top property. It creates an empty Stack when instantiated.

This object should be aware of a default empty value assigned to top when the stack is created.
The class should contain the following methods:

- push

  - Arguments: value
  - adds a new node with that value to the top of the stack with an O(1) Time performance.

- pop
  - Arguments: none
  - Returns: the value from node from the top of the stack
  - Removes the node from the top of the stack Should raise exception when called on empty stack

- peek
  - Arguments: none
  - Returns: Value of the node located at the top of the stack
Should raise exception when called on empty stack

- is empty
  - Arguments: none
  - Returns: Boolean indicating whether or not the stack is empty.

- Queue
  - Create a Queue class that has a front property. It creates an empty Queue when instantiated.
  - This object should be aware of a default empty value assigned to front when the queue is created.

The class should contain the following methods:

- enqueue
  - Arguments: value
adds a new node with that value to the back of the queue with an O(1) Time performance.

- dequeue
  - Arguments: none
  - Returns: the value from node from the front of the queue
  - Removes the node from the front of the queue
Should raise exception when called on empty queue

- peek
  - Arguments: none
  - Returns: Value of the node located at the front of the queue
Should raise exception when called on empty stack

- is empty
  - Arguments: none
  - Returns: Boolean indicating whether or not the queue is empty

## **Approach & Efficiency**
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

- The push method approach is to point the top reference to a new Node containing the provided value and it's next being the old top of the stack.
- The pop method temporarily stores the top node, sets the top to be the old tops next, and returns the old tops value.
- The enqueue method adds a new Node as the next of the old rear, then sets the rear to point at the new Node.
- Dequeue works in the same way as the pop method, but uses the front of the queue, as opposed to the top.

> ### **All Of the above methods has Big O(1) time and space compexity.**


## **API**
<!-- Description of each method publicly available to your Stack and Queue-->

### **Stack**

- **Push** Takes in a value and adds a new Node with the provided value to the top of the stack with a O(1) time efficiency.

- **Pop** Removes the top Node from the stack and returns its value.

- **Peek** Returns the current top Node of the stack.

### **Queue**

- **Enqueue** Takes in a value and adds a new Node to the rear of the queue with a O(1) time efficiency.

- **Dequeue** Removes the front Node from the queue and returns its value.

- **Peek** Returns the current front Node of the queue.
