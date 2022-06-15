'use strict';
const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.length=0;
    this.tail=null;
  }

  //'insert' method :
  insert(value) {
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
