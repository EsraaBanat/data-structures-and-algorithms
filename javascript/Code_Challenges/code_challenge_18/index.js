'use strict';

const KaryTree = require('./k-ary-tree');
const fizzBuzzTree = require('./fizz _buzz_tree');
const treeify = require('treeify');
const TreeNode = require('./node');


let node = new TreeNode(10);
console.log({node});
let tree = new KaryTree('0');

tree.add(5,'0');
tree.add(15,'0');
tree.add(3,'0');
tree.add(7,'0');

console.log('fizzBuzzTree',fizzBuzzTree(tree));


console.log(treeify.asTree(tree, true));
console.log(treeify.asTree(fizzBuzzTree(tree), true));

fizzBuzzTree(tree);
