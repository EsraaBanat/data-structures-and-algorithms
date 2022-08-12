'use strict';

const insertionSort = require('./insertion_sort');

describe('insertionSort Function', () => {

  it('Can sort array of even size', () => {
    let arr = [5, 1, 4, 2, 0, -1];
    expect(insertionSort(arr)).toEqual([-1, 0, 1, 2, 4, 5]);
  });


  it('Can sort array of odd size', () => {
    let arr = [17, 10, -2, -55, 22, 100, 7];
    expect(insertionSort(arr)).toEqual([-55, -2, 7, 10, 17, 22, 100]);
  });

});
