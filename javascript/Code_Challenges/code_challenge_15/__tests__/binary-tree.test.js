'use strict';

const {
  BinaryTree,
  BinaryTreeSearch
} = require('../binary-tree');
const Node = require('../node');
let tree;

describe('Binary Tree Tests', () => {

  beforeAll(() => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    tree = new BinaryTree(one);
    // bstTree = new BinaryTreeSearch();
  });

  test('Can successfully instantiate an empty tree', () => {
    const newTree = new BinaryTree();
    expect(newTree.root).toBeNull();
    expect(tree.root.value).toEqual(1);
  });

  test('Can successfully instantiate a tree with a single root node', () => {
    let a = new Node('a');
    const newTree = new BinaryTree(a);
    expect(newTree.root.value).toEqual('a');
    expect(newTree.root.left).toBeNull();
    expect(newTree.root.right).toBeNull();
  });

  test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    const bstTree = new BinaryTreeSearch();
    bstTree.add(20);
    bstTree.add(10);
    bstTree.add(30);
    expect(bstTree.root.value).toEqual(20);
    // console.log({bstTree});
    expect(bstTree.root.left.value).toEqual(10);
    expect(bstTree.root.right.value).toEqual(30);
  });

  test('Can successfully return a collection from a preorder traversal', () => {
    let expectedOutput = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    let preOrder = tree.preOrder();
    expect(preOrder).toEqual(expectedOutput);
  });

  test('Can successfully return a collection from an inorder traversal', () => {
    let expectedOutput = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    let inOrder = tree.inOrder();
    expect(inOrder).toEqual(expectedOutput);
  });

  test('Can successfully return a collection from a postorder traversal', () => {
    let expectedOutput = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    let postOrder = tree.postOrder();
    expect(postOrder).toEqual(expectedOutput);
  });

  test('Returns true / false for the contains method, given an existing or non-existing node value', () => {
    const bstTree = new BinaryTreeSearch();
    bstTree.add(20);
    bstTree.add(10);
    bstTree.add(30);
    expect(bstTree.contains(10)).toBeTruthy();
    expect(bstTree.contains(20)).toBeTruthy();
    expect(bstTree.contains(30)).toBeTruthy();
    expect(bstTree.contains(40)).toBeFalsy();
    expect(bstTree.contains(50)).toBeFalsy();
  });

});
