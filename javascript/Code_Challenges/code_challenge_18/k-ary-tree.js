'use strict';

const TreeNode = require('./node');

class karyTree {
  constructor(data) {
    var node = new TreeNode(data);
    this.root = node;
  }
  add(data, toNodeData) {
    const node = new TreeNode(data);
    // If the toNodeData arg is passed, find it. Otherwise, store null.
    const parent = toNodeData ? this.findBFS(toNodeData) : null;
    node.parent = parent;
    // Push new node to parent whose value matches toNodeData
    if (parent) {
      parent.child.push(node);
      node.parent = parent;
    } else {
      // If there's no parent, make this the root node
      if (!this.root) {
        this.root = node;
        node.parent = parent;
      } else
        return "Tried to store node as root when root already exists."
    }
  }
  findBFS(data) {
    const queue = [this.root];
    let _node = null;

    // Go thru every node in BFS
    this.traverseBFS((node) => {
      // Return match if found
      if (node.data === data) {
        _node = node;
      }
    });

    return _node;
  }

  traverseBFS(cb) {
    const queue = [this.root];

    if (cb)
      while (queue.length) {
        // Store current node & remove it from queue
        const node = queue.shift();

        cb(node)

        // Push children of current node to end of queue
        for (const child of node.child) {
          queue.push(child);
        }
      }
  }
}

module.exports = karyTree;
