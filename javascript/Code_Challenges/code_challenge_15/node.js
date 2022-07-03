'use strict';
class Node {
  constructor(value, left = null, right=null) {
    this.value = value;
    this.right = left;
    this.left = right;
  }
}
module.exports = Node;
