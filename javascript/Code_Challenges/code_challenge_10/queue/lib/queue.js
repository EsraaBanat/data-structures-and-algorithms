'use strict';
const Node = require('./node');

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }
  isEmpty() {
    return this.front===null || this.length===null ;
    // return this.front===null && this.length===null ; I think this is the right one
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
      this.length++;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
      this.length++;
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log('There is No Nodes in the Queue to eliminate');
      return false;
    }
    const temp = this.front;
    this.front = temp.next;
    temp.next = null;
    return temp.value;
  }
  peek() {
    if (this.isEmpty()) {
      return 'Queue is Empty';
    }
    return this.front.value;
  }
}

module.exports = Queue;
