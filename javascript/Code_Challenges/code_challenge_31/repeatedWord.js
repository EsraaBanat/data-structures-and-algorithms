'use strict';

const repeatedWord = (str) => {

  const splittedStr = str.toLowerCase().split(/[, ]+/);
  let arr = [];

  for (let i = 0; i < splittedStr.length; i++) {

    let word = splittedStr[i];
    const includingReapeted = arr.includes(word);

    if (includingReapeted) return word;
    arr.push(word);

  }
  return "There is No Repeated Words";
};

// console.log(repeatedWord("It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didnt know what I was doing in New York.."));

module.exports = repeatedWord;
