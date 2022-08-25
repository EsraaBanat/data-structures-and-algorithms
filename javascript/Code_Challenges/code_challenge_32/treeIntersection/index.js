'use strict';
const {BinaryTree} = require('./binary-tree');
const Node = require('./node');
const treeIntersection = require('./tree-intersection');
const treeify = require('treeify');

// BinaryTree
let tree1  = null;
let tree2  = null;

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

let onee = new Node(1);
let twoe = new Node(2);
let threee = new Node(3);
let foure = new Node(4);
let fivee = new Node(10);
let sixe = new Node(60);
let sevene = new Node(70);
let eighte = new Node(80);
let ninee = new Node(90);

one.left = two;
one.right = three;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
three.left = four;
three.right = five;

onee.left = twoe;
onee.right = threee;
twoe.left = sixe;
sixe.right = sevene;
sevene.left = eighte;
sevene.right = ninee;
threee.left = foure;
threee.right = fivee;

tree1 = new BinaryTree(one);
tree2 = new BinaryTree(onee);

console.log(treeify.asTree(tree1,true));
let preOrder = tree1.preOrder();
console.log('pre order: ', preOrder);
//pre order > 1 , 2 , 6 , 7 , 8 , 9 , 3 , 4 , 5

let inOrder = tree1.inOrder();
console.log('in order: ', inOrder);
//pre order > 6 , 8 , 7 , 9 , 2 , 1 , 4 , 3 , 5


let postOrder = tree1.postOrder();
console.log('post order: ', postOrder);
//pre order > 8 , 9 , 7 , 6 , 2 , 4 , 5 , 3 , 1


console.log(treeify.asTree(tree1, true));
console.log(treeify.asTree(tree2, true));

console.log(treeIntersection(tree1, tree2));





