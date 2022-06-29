'use strict';
const Stack = require('./stack/stack');

function arePair(open, close) {
  if (open === '(' && close === ')')
    return true;
  else if (open === '[' && close === ']')
    return true;
  else if (open === '{' && close === '}')
    return true;

  return false;

}

function isBalance(str) {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++){
    let letter = str.charAt(i);

    if (letter === '(' || letter === '[' || letter === '{') {
      stack.push(letter);

    } else if (letter === ')' || letter === ']' || letter === '}') {

      if (stack.isEmpty() || !arePair(stack.top.value, letter)) {
        return false;
      }

      else if (stack.peek() === '(' || stack.peek() === '[' || stack.peek() === '{' ) {
        stack.pop();

      } else {
        return false;
      }

    }
  }
  return stack.isEmpty();
}

module.exports = {
  arePair,
  isBalance,
};
console.log(isBalance('{}'));
console.log(isBalance('{}(){}'));
console.log(isBalance('()[[Extra Characters]]'));
console.log(isBalance('(){}[[]]'));
console.log(isBalance('{}{Code}[Fellows](())'));
console.log('FFFFFFFFFF',isBalance('[({}]'));
console.log(isBalance('(]('));
console.log(isBalance('{(})'));
console.log(isBalance('{'));
console.log(isBalance(')'));
console.log(isBalance('[}'));

