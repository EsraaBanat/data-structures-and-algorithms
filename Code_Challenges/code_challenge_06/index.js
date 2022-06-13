'use strict';

const LinkedList = require('./lib/linkedlist');

const ll = new LinkedList();

ll.insertAtEnd(1);
ll.insertAtEnd(2);
ll.insertAtEnd(3);
ll.insertBefore(3,4);
console.log(ll);
console.log(ll.tostring());

