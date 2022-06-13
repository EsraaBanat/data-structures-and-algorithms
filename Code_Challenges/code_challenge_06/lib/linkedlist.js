'use strict';
const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = null;
  }

  //'insert' method :
  insertAtEnd(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.length++;
      return this;
    }
    else {
      let temporaryNode = this.head;
      while (temporaryNode.next) {
        temporaryNode = temporaryNode.next;
      }
      temporaryNode.next = newNode;
      this.length++;
      return this;
    }
  }
  insertBefore(value, newValue) {
    const newNode = new Node(newValue);
    if (this.head.value == value) {
      this.head = newNode;
      this.length++;
      return this;
    }
    else {
      let currentNode = this.head;
      while (currentNode.next) {
        if (currentNode.next.value == value) {
          newNode.next = currentNode.next;
          currentNode.next = newNode;
          return this;
        }
        currentNode = currentNode.next;
      }
      return this;
    }
  }


  //   insertAfter(value, newValue) {

  // }
 // 'to string' method :
  tostring() {
    let currentNode = this.head;
    let str = '';
    while (currentNode) {
      str += `{${currentNode.value}} -> ` ;
      currentNode = currentNode.next;
    }
    return str;
  }


}

module.exports = LinkedList;
