'use strict';
const Queue = require('./lib/PseudoQueue');
const newQueue = new Queue();

newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);

console.log('front is ', newQueue.peek());

newQueue.dequeue();
console.log('front is ', newQueue.peek());
// console.log(newQueue);
newQueue.isEmpty();
console.log('kkkkkkkkkk');


