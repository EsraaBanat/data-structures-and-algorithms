'use strict';

function leftJoin(hashTable1, hashTable2) {
  let result = {};
  for (let key in hashTable1) {
    result[key] = [hashTable1[key]];
  }
  console.log(result);
  for (let key in hashTable2) {
    if (result[key]) {
      result[key].push(hashTable2[key]);
    } else {
      result[key] = [null, hashTable2[key]];
    }
  }
  return result;
}


module.exports = leftJoin;
