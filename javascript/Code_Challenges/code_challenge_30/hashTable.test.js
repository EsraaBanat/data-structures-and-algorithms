'use strict';

const Hashmap = require('./hashTable');
const hashedTable = new Hashmap(10);

describe('Hash Table Test', () => {

  test('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    hashedTable.set('esraa', 'student1');
    expect(hashedTable.get('esraa')).toBe('student1');
  });

  test('Retrieving based on a key returns the value stored', () => {
    hashedTable.set('esam', 'student2');
    expect(hashedTable.get('esam')).toBe('student2');
  });

  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    hashedTable.set('esam', 'student2');
    expect(hashedTable.get('ahmad')).toBeNull();
  });

  test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    const table = new Hashmap(10);
    table.set('esraa', 'student1');
    table.set('esam', 'student2');
    table.set('mohamad', 'student3');
    table.set('ahmad', 'student4');
    table.set('laith', 'student5');
    expect(table.keys().length).toBe(5);
  });

  test('Successfully handle a collision within the hashtable', () => {
    hashedTable.set('nur', 'name');
    hashedTable.set('run', 'action');
    expect(hashedTable.contains('nur')).toBeTruthy();
    expect(hashedTable.contains('run')).toBeTruthy();
  });

  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    hashedTable.set('nur', 'name');
    hashedTable.set('run', 'action');
    expect(hashedTable.contains('nur')).toBeTruthy();
    expect(hashedTable.get('nur')).toBe('name');
    expect(hashedTable.contains('run')).toBeTruthy();
    expect(hashedTable.get('run')).toBe('action');
  });

  test('Successfully hash a key to an in-range value', () => {
    hashedTable.set('laith', 'student5');
    expect(hashedTable.hash('laith')).toBeLessThan(10);
  });

});
