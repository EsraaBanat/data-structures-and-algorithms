'use strict';

const repeatedWord = require('./repeatedWord');

describe('Repeated Word Test', () => {

  test('find the first repeated word exactly if its lower case and string have commas', () => {
    expect(repeatedWord('After great effort, he explained that water is water')).toBe('water');
  });

  test('find the first repeated word if the two words are differnt regards to lower and upper case', () => {
    expect(repeatedWord('It was long journy but we enjoy it')).toBe('it');
  });

  test('find the first repeated word with a lot of other repeated also', () => {
    expect(repeatedWord('I felt happy because I saw the others were happy and because I knew I should feel happy, but I wasn’t really happy.')).toBe('i');
  });

});
