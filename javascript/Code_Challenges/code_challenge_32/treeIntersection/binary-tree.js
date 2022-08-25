'use strict';

const Node = require('./node');

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  // Pre-order >> root - left - right
  preOrder() {
    let result = [];
    let traverse = (node) => {
      result.push(node.value);
      //if left go left
      if (node.left) traverse(node.left);
      //if right go right
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
  // In-Order >> left - root - right
  inOrder() {
    let result = [];
    let traverse = (node) => {
      //if left go left
      if (node.left) traverse(node.left);
      result.push(node.value);
      //if right go right
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
  // Post-Order >> left - right - root
  postOrder() {
    let result = [];
    let traverse = (node) => {
      //if left go left
      if (node.left) traverse(node.left);
      //if right go right
      if (node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }
}

class BinaryTreeSearch extends BinaryTree {
  add(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
    }
    let current = this.root;

    function addNode() {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (!current.left) {
          current.left = node;
        }
        current = current.left; // if there is a node move to left
        addNode();
      } else if (value > current.value) {
        if (!current.right) {
          current.right = node;
        }
        current = current.right; // if there is a node move to right
        addNode();
      }
    }
    addNode();
  }
  contains(value) {
    let current = this.root;
    while (current !== null) {
      if (current.value === value) {
        // Found the element!
        return true;
      } else if (value < current.value) {
        // Go Left as value is smaller than parent
        current = current.left;
      } else {
        // Go right as value is greater than parent
        current = current.right;
      }
    }
    return false;
  }
}

module.exports = {
  BinaryTree,
  BinaryTreeSearch
};
