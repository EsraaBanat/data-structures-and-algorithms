'use strict';

const Queue = require('./queue');

function breadthFirst(tree) {
  const breadthQueue = new Queue();
  const result = [];
  const root = tree.root;

  if (!root) return 'Tree is Empty';

  breadthQueue.enqueue(root);
  result.push(root.value);

  while (!breadthQueue.isEmpty()) {
    let front = breadthQueue.dequeue();

    if (front.left) {
      breadthQueue.enqueue(front.left);
      result.push(front.left.value);
    }

    if (front.right) {
      breadthQueue.enqueue(front.right);
      result.push(front.right.value);
    }

  }
  console.log({result});
  return result;
}




module.exports = breadthFirst;
