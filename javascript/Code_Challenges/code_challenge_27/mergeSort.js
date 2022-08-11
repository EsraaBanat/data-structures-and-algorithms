'use strict';

function mergeSort(arr) {
  let n = arr.length;
  let mid = Math.round(n / 2);

  if (n === 1) {
    return arr;
  }

  let L = [];// left half of current array
  let R = [];// right half of current array

  for (let i = 0; i < mid; i++) {
    L.push(arr[i]);
  }
  for (let j = mid; j < n; j++) {
    R.push(arr[j]);
  }

  mergeSort(L);
  mergeSort(R);

  let i = 0,
    j = 0,
    k = 0;

  // Merging part
  while (i < L.length && j < R.length) {
    if (L[i] < R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < L.length) {
    arr[k] = L[i];
    i++;
    k++;
  }

  while (j < R.length) {
    arr[k] = R[j];
    j++;
    k++;
  }
  return arr;
}

console.log(mergeSort([7, 1, 8, 3, 4, 9, 14, 0, 2]));

module.exports = mergeSort;
