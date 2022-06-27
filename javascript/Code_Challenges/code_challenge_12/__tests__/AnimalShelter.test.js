'use strict';

const Queue = require('../AnimalShelter_queue/AnimalShelter');

describe('Testing the AnimalShelter Queue', () => {

  it('Can successfully enqueue animal (dog or cat) into AnimalShelter', () => {
    let newQueue = new Queue();
    newQueue.enqueue({
      name: 'bobby',
      type: 'dog',
      age: 1,
    });
    // console.log({newQueue});
    expect(newQueue.dogArray[0].type).toEqual('dog');
  });

  it('Can successfully enqueue multiple animals into AnimalShelter', () => {
    let newQueue = new Queue();
    newQueue.enqueue({
      name: 'bobby',
      type: 'dog',
      age: 1,
    });
    // console.log({newQueue});
    expect(newQueue.dogArray[0].type).toEqual('dog');
    newQueue.enqueue({
      name: 'tobin',
      type: 'cat',
      age: 2,
    });
    expect(newQueue.catArray[0].type).toEqual('cat');
  });

  it('Can not enqueue non cat/dog animal', () => {
    let newQueue = new Queue();
    expect(newQueue.enqueue({
      name: 'ka',
      type: 'bear',
      age: 2,
    })).toEqual('s/he not cat or dog');
  });

  it('Can successfully dequeue cat out of the AnimalShelter', () => {
    let newQueue = new Queue();
    newQueue.enqueue({
      name: 'tobin',
      type: 'cat',
      age: 2,
    });
    // newQueue.dequeue('cat');
    // console.log(newQueue.dequeue('cat'));
    expect(newQueue.dequeue('cat')).toStrictEqual({
      name: 'tobin',
      type: 'cat',
      age: 2,
    });
  });

  it('Can successfully dequeue dog out of the AnimalShelter', () => {
    let newQueue = new Queue();
    newQueue.enqueue({
      name: 'vivi',
      type: 'dog',
      age: 3,
    });
    expect(newQueue.dequeue('dog')).toStrictEqual({
      name: 'vivi',
      type: 'dog',
      age: 3,
    });
  });


  it('Return null value when try to dequeue non cat/dog animal', () => {
    let newQueue = new Queue();
    newQueue.enqueue({
      name: 'vivi',
      type: 'dog',
      age: 3,
    });
    expect(newQueue.dequeue('bear')).toBeNull();
  });
  
});
