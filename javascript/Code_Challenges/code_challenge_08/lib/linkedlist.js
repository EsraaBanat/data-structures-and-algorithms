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
    if (this.head.value === value) {
      this.head = newNode;
      this.length++;
      return this;
    }
    else {
      let currentNode = this.head;
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          newNode.next = currentNode.next;
          currentNode.next = newNode;
          this.length++;
          return this;
        }
        currentNode = currentNode.next;
      }
      return this;
    }
  }
  insertAfter(value, newValue) {
    const node = new Node(newValue);
    let current = this.head;
    while (current.next) {
      if (current.value === value) {
        node.next = current.next;
        current.next = node;
        this.length++;
        return this;
      }
      current = current.next;
    }
    if (current.value === value) {
      current.next = node;
      this.length++;
      return this;
    } return this;
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
      str += `{${currentNode.value}} -> `;
      currentNode = currentNode.next;
    }
    return str;
  }

  kthFromEnd(k) {
    let node = this.head;
    while (!node) {
      node = node.next;
      this.length++;
    }
    if (this.length < k || k < 0)
      return 'Exception';
    for (let i = 1; i < this.length - k; i++) {
      node = node.next;
    }
    return node.value;
  }

  zipLists(list1, list2) {

    let tail=list1.head;
    let current1 = list1.head.next;
    let current2 = list2.head;
    let count = 0;

    while (current1 !== null && current2 !== null){
      if (count%2 === 0){
        tail.next=current2;
        current2=current2.next;
      }else{
        tail.next=current1;
        current1=current1.next;

      }
      tail=tail.next;
      count++;
    }
    if(current1!==null){
      tail.next=current1;
    }
    if(current2!==null){
      tail.next=current2;
    }

    return list1;
  }

}

module.exports = LinkedList;
