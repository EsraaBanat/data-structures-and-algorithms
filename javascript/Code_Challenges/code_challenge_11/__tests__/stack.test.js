'use strict';

const Stack = require('../stack/lib/stack');

describe('Testing the Stack', () => {

  it('Can successfully push onto a stack', () => {
    let newStack = new Stack();
    newStack.push(1);
    expect(newStack.top.value).toEqual(1);
  });

  it('Can successfully push multiple values onto a stack', () => {
    let newStack = new Stack();
    newStack.push(1);
    expect(newStack.top.value).toEqual(1);
    newStack.push(2);
    expect(newStack.top.value).toEqual(2);
  });

  it('Can successfully pop off the stack', () => {
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    expect(newStack.pop()).toEqual(3);
    expect(newStack.pop()).toEqual(2);
    expect(newStack.pop()).toEqual(1);
  });

  it('Can successfully empty a stack after multiple pops', () => {
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    newStack.pop();
    newStack.pop();
    newStack.pop();
    expect(newStack.isEmpty()).toBeTruthy();
  });

  it('Can successfully peek the next item on the stack', () => {
    let newStack = new Stack();
    newStack.push(1);
    newStack.push('I am a Top');
    expect(newStack.peek()).toEqual('I am a Top');
  });

  it('Can successfully instantiate an empty stack', () => {
    let newStack = new Stack();
    expect(newStack instanceof Stack).toBeTruthy();
    expect(newStack.peek()).toBe('Stack is Empty');
  });

  it('Calling pop or peek on empty stack raises exception', () => {
    let newStack = new Stack();
    expect(newStack.pop()).toBeFalsy();
    expect(newStack.peek()).toBe('Stack is Empty');
  });

});
