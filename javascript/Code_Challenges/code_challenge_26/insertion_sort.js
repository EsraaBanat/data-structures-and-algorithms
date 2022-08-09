'use strict';

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = temp;
  }
  console.log({
    arr
  });
  return arr;
}



insertionSort([1, 7, 8, 2]);


module.exports = insertionSort;
