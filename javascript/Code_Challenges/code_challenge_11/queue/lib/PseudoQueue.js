'use strict';
const Stack = require('../../stack/lib/stack');

class PseudoQueue {
  constructor() {
    this.innerStack = new Stack();
    this.outerStack = new Stack();
  }
  isEmpty() {
    // console.log(this.innerStack.isEmpty()&&this.outerStack.isEmpty());
    return this.innerStack.isEmpty() ;
  }
  enqueue(value) {
    this.innerStack.push(value);
    // return this.innerStack;
  }
  dequeue() {
    if (this.outerStack.isEmpty()) {
      while (!this.isEmpty()) {
        this.outerStack.push(this.innerStack.pop());
      }
    }
    return this.outerStack.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return 'Queue is Empty';
    }
    if (this.outerStack.isEmpty()) {
      while (!this.innerStack.isEmpty())
        this.outerStack.push(this.innerStack.pop());
    }
    return this.outerStack.peek();
  }
  print() {
    console.log(`Inner Stack : ${this.innerStack}`);
    console.log(`Outer Stack : ${this.outerStack}`);
  }
}

module.exports = PseudoQueue;
