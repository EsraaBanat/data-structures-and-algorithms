'use strict';

function swap(arr, i, low) {

  var temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;

}

function partition(arr, left, right) {

  let pivot = arr[right];
  let low = left - 1;

  for (let i = left; i < right ; i++){
    if (arr[i] <= pivot) {
      low++;
      swap(arr,i,low);
    }
  }
  swap(arr,right,low + 1);

  return low + 1;

}

function quickSort(arr, left, right) {
  if (arr.length === 1) {
    return arr;
  }

  if (left < right) {
    let position = partition(arr, left, right);
    quickSort(arr, left, position - 1);
    quickSort(arr, position + 1, right);
    return arr;
  }

}

module.exports = quickSort;

let arr = [3, 2, 7, 1, 10, 8];
console.log(quickSort(arr,0,arr.length-1));


