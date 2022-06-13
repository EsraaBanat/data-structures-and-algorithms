'use strict';

const LinkedList = require('../lib/linkedlist');

describe("Linked List Tests", () => {
  test("Can successfully add a node to the end of the linked list", (() => {
    const ll = new LinkedList();
    ll.insertAtEnd(1);
    ll.insertAtEnd(2);
    expect(ll.head.value).toBe(1);
    expect(ll.head.next.next).toBeNull();
    expect(ll.length).toBe(2);

  }))

  test("Can successfully add multiple nodes to the end of a linked list",()=>{
    const ll=new LinkedList();
    ll.insertAtEnd(1);
    ll.insertAtEnd(2);
    ll.insertAtEnd(3);
    expect(ll.head.value).toEqual(1);
    expect(ll.head.next.value).toEqual(2);
    expect(ll.head.next.next.value).toEqual(3);
    expect(ll.length).toBe(3);
  })

  test('Can successfully insert a node before a node located i the middle of a linked list', (() => {
    const ll = new LinkedList();
    ll.insertAtEnd(1);
    ll.insertAtEnd(2);
    ll.insertBefore(2, 3);
    console.log(ll.tostring());
    expect(ll.head.next.value).toEqual(3);
    expect(ll.head.next.next.value).toEqual(2);
  }))

  test('Can successfully insert a node before the first node of a linked list', (() => {
    const ll = new LinkedList();
    ll.insertAtEnd(1);
    ll.insertAtEnd(2);
    ll.insertBefore(1, 3);
    console.log(ll.tostring());
    expect(ll.head.value).toEqual(3);
    expect(ll.length).toEqual(3);
    // expect(ll.head.next.value).toEqual(1);
  }))

  test('Can successfully insert after a node in the middle of the linked list', (() => {
    const ll = new LinkedList();
    ll.insertAtEnd(1);
    ll.insertAtEnd(2);
    ll.insertAtEnd(3);
    ll.insertAfter(2,11);
    console.log(ll.tostring());
    expect(ll.head.next.next.value).toEqual(11);
  }))

  test('Can successfully insert a node after the last node of the linked list', (() => {
    const ll = new LinkedList();
    ll.insertAtEnd(1);
    ll.insertAtEnd(2);
    ll.insertAfter(2,3);
    console.log(ll.tostring());
    expect(ll.head.next.next.value).toEqual(3);
    expect(ll.length).toEqual(3);
  }))
})

