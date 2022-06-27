'use strict';

class AnimalShelter {
  constructor() {
    this.catArray = [];
    this.dogArray = [];

  }

  enqueue(animal) {
    if (animal.type === 'cat') {
      this.catArray.push(animal);
    } else if (animal.type === 'dog') {
      this.dogArray.push(animal);
    } else {
      return 's/he not cat or dog';
    }
  }

  dequeue(pref) {
    if (pref === 'cat') {
      return this.catArray.shift();
    }
    else if (pref === 'dog') {
      return this.dogArray.shift();
    }
    else{
      return null;
    }
  }
}

module.exports = AnimalShelter;



