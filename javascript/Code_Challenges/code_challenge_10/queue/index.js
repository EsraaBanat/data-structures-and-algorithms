'use strict';
const Queue = require('./lib/queue');
const newQueue = new Queue();

newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);

console.log('front is ', newQueue.peek());

newQueue.dequeue();
console.log('front is ', newQueue.peek());
