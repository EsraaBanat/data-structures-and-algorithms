'use strict';
let AnimalShelter = require('./AnimalShelter_queue/AnimalShelter');

let animal = new AnimalShelter();

animal.enqueue({
  name:'bobby',
  type:'dog',
  age:1,
});
animal.enqueue({
  name:'tobin',
  type:'cat',
  age:2,
});
animal.enqueue({
  name:'vivi',
  type:'dog',
  age:3,
});
animal.enqueue({
  name:'meso',
  type:'cat',
  age:4,
});
animal.enqueue({
  name:'kai',
  type:'bear',
  age:5,
});

console.log(animal.dequeue('cat'));
console.log(animal.dequeue('dog'));
console.log(animal.dequeue('bear'));
