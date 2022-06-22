'use strict';
const Node = require('./node');

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
  isEmpty() {
    return this.top === null;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.top = newNode;
      this.length++;
    } else {
      newNode.next = this.top;
      this.top = newNode;
      this.length++;
    }
  }
  pop() {
    if (this.isEmpty()) {
      console.log('There is No Nodes in the stack to eliminate');
      return false;
    }
    const temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.length-=1;
    return temp.value;
  }
  peek() {
    if (this.isEmpty()) {
      return 'Stack is Empty';
    }
    return this.top.value;
  }
}

module.exports = Stack;
