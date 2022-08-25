'use strict';

const treeIntersection = require('./tree-intersection');
const {
  BinaryTree
} = require('./binary-tree');
const Node = require('./node');

describe('Tree Intersection Test', () => {

  test('Find Common values when these values are integers', () => {
    let tree1 = null;
    let tree2 = null;

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
    // console.log(treeIntersection(tree1, tree2));

    expect(treeIntersection(tree1, tree2)).toEqual([1, 2, 3, 4]);
  });

  test('Find Common values when these values are string values', () => {
    let tree1 = null;
    let tree2 = null;

    let one = new Node('one');
    let two = new Node('two');
    let three = new Node('three');
    let four = new Node('four');
    let five = new Node('five');
    let six = new Node('six');
    let seven = new Node('seven');
    let eight = new Node('eight');
    let nine = new Node('nine');

    let onee = new Node('one');
    let twoe = new Node('two');
    let threee = new Node('three');
    let foure = new Node('four');
    let fivee = new Node('ten');
    let sixe = new Node('sixty');
    let sevene = new Node('seventy');
    let eighte = new Node('eighty');
    let ninee = new Node('ninty');

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
    // console.log(treeIntersection(tree1, tree2));

    expect(treeIntersection(tree1, tree2)).toEqual([ 'one', 'two', 'three','four']);
  });

});
