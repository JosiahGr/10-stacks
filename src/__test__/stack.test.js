'use strict';

const Stack = require('../lib/stack');

describe('stack.js', () => {
  test('#constructor', () => {
    const testList = new Stack();
    expect(testList.storage.head).toBeNull();
  });

  test('#pop should remove value at the top of the stack', () => {
    const testList = new Stack();
    testList.push(1);
    testList.push(2);
    testList.push(3);
    testList.pop();
    expect(testList.storage.head.next.next).toBeNull();
  });
  test('#peak should return the value of the top of the stack', () => {
    const testList = new Stack();

    testList.push(1);
    testList.push(2);
    testList.push(3);
    testList.peek();

    expect(testList.peek()).toEqual(3);
  });
  test('#push should add inserted value at the head of LinkedList', () => {
    const testList = new Stack();

    testList.push(1);
    testList.push(2);
    testList.push(3);

    expect(testList.storage.head.next.next.value).toEqual(3);
  });
  test('#isEmpty should return FALSE if stack is not empty', () => {
    const testList = new Stack();

    testList.push(1);
    expect(testList.isEmpty()).toBeFalsy();
  });
  test('#isEmpty should return TRUE if stack is empty', () => {
    const testList = new Stack();
    expect(testList.isEmpty()).toBeTruthy();
  });
});
