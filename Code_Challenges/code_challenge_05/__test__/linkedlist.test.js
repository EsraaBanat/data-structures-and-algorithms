'use strict';

const LinkedList = require('../lib/linkedlist');

describe("Linked List", () => {
  test("initiation an empty linked list", (()=> {
    let testList = new LinkedList();
    expect(testList.head).toBeNull();
  }))
})
