# Trees
<!-- Short summary or background information -->

A tree data structure is defined as a collection of objects or entities known as nodes that are linked together to represent or simulate hierarchy.

A tree data structure is a non-linear data structure because it does not store in a sequential manner. It is a hierarchical structure as elements in a Tree are arranged in multiple levels.

In the Tree data structure, the topmost node is known as a root node. Each node contains some data, and data can be of any type.

Each node contains some data and the link or reference of other nodes that can be called children.

### **Binary Tree**

 special datastructure used for data storage purposes. A binary tree has a special condition that each node can have a maximum of two children. A binary tree has the benefits of both an ordered array and a linked list as search is as quick as in a sorted array and insertion or deletion operation are as fast as in linked list.

### **Binary Search Tree**
Binary Search tree exhibits a special behavior. A node's left child must have a value less than its parent's value and the node's right child must have a value greater than its parent value.

## Challenge
<!-- Description of the challenge -->
### Binary Tree and BST Implementation
- Node
  - Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
- Binary Tree
  - Create a Binary Tree class
  - Define a method for each of the depth first traversals:
    - pre order
    - in order
    - post order which returns an array of the values, ordered appropriately.
- Binary Search Tree
  - Create a Binary Search Tree class
    - This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:
  - Add
    - Arguments: value
    - Return: nothing
    - Adds a new node with that value in the correct location in the binary search tree.
  - Contains
    - Argument: value
    - Returns: boolean indicating whether or not the value is in the tree at least once.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

For `preOrder`, `inOrder`, `postOrder` and `add` methods all traverse the tree recursively

Big O:

Time complexity O(n)

Space complexity O(n)

For `contains` method :

Big O:

Time complexity O (log n)

Space complexity O(1)

## API
<!-- Description of each method publicly available in each of your trees -->
- `preOrder()`: Traverse over the tree >> root, left, right.
- `inOrder()`: Traverse over the tree >> left, root, right.
- `postOrder()`: Traverse over the tree >> left, right, root.
- `add(value)`: Adds a new node with that value in the correct location in the binary search tree.
- `contains(value)`: indicating whether or not the value is in the tree at least once.

## [Back To Home](../../../README.md)
