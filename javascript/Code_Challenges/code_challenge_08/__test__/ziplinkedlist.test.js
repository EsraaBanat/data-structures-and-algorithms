'use strict';

const LinkedList = require('../lib/linkedlist');

describe("zipped Linked Lists Tests", () => {

  test("When linked list 1 has tha same length of linked list 2", (() => {
    const ll1 = new LinkedList();
    const ll2 = new LinkedList();
    ll1.insertAtEnd('a');
    ll1.insertAtEnd('b');
    ll2.insertAtEnd('x');
    ll2.insertAtEnd('y');
    ll1.zipLists(ll1, ll2);
    expect(ll1.length).toBe(2);
    expect(ll2.length).toBe(2);
    expect(ll1.head.value).toBe('a');
    expect(ll1.head.next.value).toBe('x');
    expect(ll1.head.next.next.value).toBe('b');
    expect(ll1.head.next.next.next.value).toBe('y');
  }));

  test("When linked list 1 has different length of linked list 2", (() => {
    const ll1 = new LinkedList();
    const ll2 = new LinkedList();
    ll1.insertAtEnd('a');
    ll1.insertAtEnd('b');
    ll1.insertAtEnd('c');
    ll2.insertAtEnd('x');
    ll2.insertAtEnd('y');
    ll1.zipLists(ll1, ll2);
    expect(ll1.length).toBe(3);
    expect(ll2.length).toBe(2);
    expect(ll1.head.value).toBe('a');
    expect(ll1.head.next.value).toBe('x');
    expect(ll1.head.next.next.value).toBe('b');
    expect(ll1.head.next.next.next.value).toBe('y');
    expect(ll1.head.next.next.next.next.value).toBe('c');
  }));


});

