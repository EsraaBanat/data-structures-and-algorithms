'use strict';
const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.length;
    this.tail;
  }

  //'insert' method :
  insert(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return this;
    }
    else {
      let temporaryNode = this.head;
      while (temporaryNode.next) {
        temporaryNode = temporaryNode.next;
      }
      temporaryNode.next = newNode;
      return this;
    }
  }

  // 'includes' methode :
  includes(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  // 'to string' method :
  tostring() {
    console.log(this); // ensure if that correct
  }
}

module.exports = LinkedList;
