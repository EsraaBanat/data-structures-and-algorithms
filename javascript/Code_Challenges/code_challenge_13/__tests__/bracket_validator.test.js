'use strict';

const Stack = require('../stack/stack');
const {isBalance} = require('../bracket_validator');

describe('Testing the Bracket_Validator', () => {
// console.log(isBalance('{}'));
// console.log(isBalance('{}(){}'));
// console.log(isBalance('()[[Extra Characters]]'));
// console.log(isBalance('(){}[[]]'));
// console.log(isBalance('{}{Code}[Fellows](())'));
// console.log('FFFFFFFFFF',isBalance('[({}]'));
// console.log(isBalance('(]('));
// console.log(isBalance('{(})'));
// console.log(isBalance('{'));
// console.log(isBalance(')'));
// console.log(isBalance('[}'));

  it('Return False When single open bracket', () => {
    let str = '{';
    expect(isBalance(str)).toBeFalsy();
  });

  it('Return False When single close parantheses', () => {
    let str = ')';
    expect(isBalance(str)).toBeFalsy();
  });

  it('Return True When simple expresion', () => {
    let str = '{}';
    expect(isBalance(str)).toBeTruthy();
  });

  it('Return True When multiple parnatheses and brakets', () => {
    let str = '{}(){}';
    expect(isBalance(str)).toBeTruthy();
  });

  it('Return True When complex expresion', () => {
    let str1 = '()[[Extra Characters]]';
    expect(isBalance(str1)).toBeTruthy();
    let str2 = '{}{Code}[Fellows](())';
    expect(isBalance(str2)).toBeTruthy();
  });

  it('Return False When str = `[({}]` ', () => {
    let str = '[({}]';
    expect(isBalance(str)).toBeFalsy();
  });

  it('Return False When str = `(](`', () => {
    let str = '(](';
    expect(isBalance(str)).toBeFalsy();
  });

  it('Return False When str = `{(})`', () => {
    let str = '{(})';
    expect(isBalance(str)).toBeFalsy();
  });

});
