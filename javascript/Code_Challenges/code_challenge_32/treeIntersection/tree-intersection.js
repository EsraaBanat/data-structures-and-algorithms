'use strict';
// const binaryTree = require('./binary-tree');
const HashMap = require('./hashTable');

function treeIntersection(tree1, tree2) {
  if (!tree1 || !tree2) {
    return null;
  } else {
    const preOrder1 = tree1.preOrder();
    const preOrder2 = tree2.preOrder();
    let hash = new HashMap(100);
    let intersectionArr = [];
    preOrder1.forEach((value) => {
      // console.log('VVVV111111', value);
      // console.log('VVVV', typeof(value));
      hash.set(value,1);
    });
    preOrder2.forEach((value) => {
      // console.log('VVVV2222', value);
      if (hash.contains(value)) {
        intersectionArr.push(value);
      }
    });
    return intersectionArr;
  }
}


module.exports = treeIntersection;
