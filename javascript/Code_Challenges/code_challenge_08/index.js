'use strict';

const LinkedList = require('./lib/linkedlist');

const ll = new LinkedList();

ll.insertAtEnd(1);
ll.insertAtEnd(2);
ll.insertAtEnd(3);
ll.tostring();
// console.log(ll.length);
console.log(ll.length);
console.log(ll.tostring());
// console.log(ll.includes(3));
console.log(ll.kthFromEnd(2));


