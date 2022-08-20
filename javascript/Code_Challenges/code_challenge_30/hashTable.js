'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

class Hashmap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  set(key, value) {
    const asciiCodeSum = key.split("").reduce((sum, element) => {
      return sum + element.charCodeAt();
    }, 0);
    const multiPrime = asciiCodeSum * 599;
    const index = multiPrime % this.size;
    // return index;
    if (!this.map[index]) {
      this.map[index] = new LinkedList();
    }
    this.map[index].append({
      [key]: value
    });
  }

  get(key) {
    const idx = this.hash(key);
    const bucket = this.map[idx];
    // console.log(bucket);
    if (bucket) {
      let current = bucket.head;
      while (current) {
        if (current.value[key]) {
          // console.log(current.value[key]);
          return current.value[key];
        }
        current = current.next;
      }
      return null;
    } else {
      return null;
    }
  }

  contains(key) {
    const idx = this.hash(key);
    const bucket = this.map[idx];
    if (bucket) {
      let current = bucket.head;
      while (current) {
        if (current.value[key]) {
          // console.log(current.value[key]);
          return true;
        }
        current = current.next;
      }
      return false;
    } else {
      return false;
    }
  }

  keys() {
    let keys = [];
    this.map.map((e) => {
      let current = e.head;
      while (current) {
        keys.push(Object.keys(current.value));
        current = current.next;
      }
    });
    return keys;
  }

  hash(key) {
    const asciicodeSum = key.split('').reduce((acc, cur) => {
      return acc + cur.charCodeAt(0);
    }, 0);
    const multiPrime = asciicodeSum * 599;
    const index = multiPrime % this.size;
    // console.log(index);
    return index;
  }
}

const myhashmap = new Hashmap(10);
myhashmap.set('esam', '401d15 student');
myhashmap.set('ahmad', '401d15 student');
myhashmap.set('mohamad', '401d15 student');
myhashmap.set('samah', '401d15 student');
myhashmap.set('laith', '401d15 student');
myhashmap.set('shihab', '401d15 student');

myhashmap.get('esam');
myhashmap.get('laith');
myhashmap.get('eee');

console.log(myhashmap.contains('laith'));
console.log(myhashmap.contains('eee'));

console.log('ppppppppppppppppp', myhashmap.get('esam'));

console.log('jjjjjjjjjjjjj', myhashmap.keys());

// console.log(myhashmap.map[8]);
// console.log(myhashmap.map[8].head.next);

// console.log(myhashmap);
// myhashmap.map.forEach((ll) => {
//   console.log(ll.values());
// });

module.exports = Hashmap;
